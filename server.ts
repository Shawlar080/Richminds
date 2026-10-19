import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 10; // generous 10 submissions per minute per IP

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

// Enquiries in-memory & file persistence
interface StoredEnquiry {
  id: string;
  referenceId: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  enquiryType: string;
  productCategory: string;
  subject: string;
  message: string;
  submittedAt: string;
  deliveryStatus: 'delivered_via_resend' | 'saved_to_inbox';
}

const ENQUIRIES_FILE = path.resolve(__dirname, 'enquiries-db.json');

function loadEnquiries(): StoredEnquiry[] {
  try {
    if (fs.existsSync(ENQUIRIES_FILE)) {
      const data = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error loading enquiries file:', err);
  }
  return [];
}

function saveEnquiries(list: StoredEnquiry[]) {
  try {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving enquiries file:', err);
  }
}

// Health check endpoint
app.get('/api/health', (_req, res) => {
  const recipientEmail = process.env.CONTACT_EMAIL || 'admin@richmindsinternational.com.ng';
  const isEmailConfigured = Boolean(process.env.RESEND_API_KEY);
  res.json({
    status: 'ok',
    active: true,
    emailConfigured: isEmailConfigured,
    contactEmail: recipientEmail,
    resendApiKey: process.env.RESEND_API_KEY ? 'configured' : 'missing',
    enquiriesCount: loadEnquiries().length
  });
});

// GET /api/enquiries - view all submitted enquiries
app.get('/api/enquiries', (_req, res) => {
  const list = loadEnquiries();
  res.json({
    success: true,
    count: list.length,
    enquiries: list
  });
});

// Enquiry submission endpoint - ACTIVE & ALWAYS PERSISTENT
app.post('/api/enquiries', async (req, res) => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

    // Rate limit check
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        error: 'Too many submissions in a short period. Please wait a moment or call our office directly.'
      });
    }

    const {
      fullName,
      email,
      phone,
      companyName,
      enquiryType,
      productCategory,
      subject,
      message,
      honeypot
    } = req.body;

    // Honeypot check for bots
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn('Bot submission blocked via honeypot field');
      return res.status(400).json({ success: false, error: 'Spam detected.' });
    }

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please enter your full name (minimum 2 characters).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    const cleanSubject = subject && typeof subject === 'string' && subject.trim().length > 0
      ? subject.trim()
      : 'General Trade Enquiry';

    const cleanMessage = message && typeof message === 'string' && message.trim().length > 0
      ? message.trim()
      : 'No additional details provided.';

    const referenceId = `RML-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newEnquiry: StoredEnquiry = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      referenceId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim() : 'Not provided',
      companyName: companyName ? String(companyName).trim() : 'Not specified',
      enquiryType: enquiryType ? String(enquiryType).trim() : 'General Enquiry',
      productCategory: productCategory ? String(productCategory).trim() : 'Not specified',
      subject: cleanSubject,
      message: cleanMessage,
      submittedAt: new Date().toISOString(),
      deliveryStatus: 'saved_to_inbox'
    };

    console.log('[Richminds Enquiry Received & Saved]', JSON.stringify(newEnquiry, null, 2));

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'admin@richmindsinternational.com.ng';
    const senderEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    // If Resend API key is present, attempt live email dispatch
    if (resendApiKey) {
      try {
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <div style="background-color: #0B1C38; padding: 16px; border-radius: 6px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Richminds International Limited</h2>
              <p style="color: #E7A942; margin: 4px 0 0; font-size: 13px;">New Website Trade Enquiry · Ref: ${referenceId}</p>
            </div>
            
            <div style="padding: 20px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Reference:</strong></td><td>${referenceId}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Full Name:</strong></td><td>${newEnquiry.fullName}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${newEnquiry.email}">${newEnquiry.email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${newEnquiry.phone}">${newEnquiry.phone}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Company:</strong></td><td>${newEnquiry.companyName}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Enquiry Type:</strong></td><td>${newEnquiry.enquiryType}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Category:</strong></td><td>${newEnquiry.productCategory}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Subject:</strong></td><td><strong>${newEnquiry.subject}</strong></td></tr>
              </table>

              <div style="margin-top: 20px; background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #C98822;">
                <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold;">Message</p>
                <p style="margin: 0; color: #1e293b; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${newEnquiry.message}</p>
              </div>
            </div>
            <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
              Headquarters: Apartment 8 Charterhouse School, 55 Wincolmlee Street, Hull, HU2 8AG
            </div>
          </div>
        `;

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: `Richminds Enquiries <${senderEmail}>`,
            to: [recipientEmail],
            reply_to: newEnquiry.email,
            subject: `[Richminds Enquiry ${referenceId}] ${newEnquiry.subject} - ${newEnquiry.fullName}`,
            html: emailHtml
          })
        });

        if (resendRes.ok) {
          newEnquiry.deliveryStatus = 'delivered_via_resend';
          console.log(`Email delivered to ${recipientEmail} via Resend for ref ${referenceId}`);
        } else {
          console.warn('Resend API response was not OK, saved to inbox database instead.');
        }
      } catch (emailErr) {
        console.error('Error during live Resend email dispatch:', emailErr);
      }
    }

    // Persist to store
    const existing = loadEnquiries();
    existing.unshift(newEnquiry);
    saveEnquiries(existing);

    return res.json({
      success: true,
      referenceId,
      message: `Your enquiry has been successfully registered under reference ${referenceId}. Our commercial distribution team at Richminds International Limited will review and respond promptly.`,
      enquiry: newEnquiry
    });
  } catch (error: any) {
    console.error('Enquiry handling error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected internal error occurred. Please call our Hull office directly at 07435977209 or +44 7424 276619.'
    });
  }
});

// Vite dev middleware or static serving
async function startServer() {
  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Richminds server running at http://0.0.0.0:${PORT} (mode: ${isProd ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
