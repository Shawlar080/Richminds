export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json({
      success: true,
      status: 'active',
      message: 'Enquiries endpoint is operational'
    });
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
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
    } = body;

    // Honeypot check for bots
    if (honeypot && String(honeypot).trim().length > 0) {
      res.status(400).json({ success: false, error: 'Spam detected.' });
      return;
    }

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      res.status(400).json({ success: false, error: 'Please enter your full name (at least 2 characters).' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
      return;
    }

    const cleanSubject = subject && typeof subject === 'string' && subject.trim().length > 0
      ? subject.trim()
      : 'General Trade Enquiry';

    const cleanMessage = message && typeof message === 'string' && message.trim().length > 0
      ? message.trim()
      : 'No additional details provided.';

    const referenceId = `RML-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newEnquiry = {
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

    console.log('[Vercel Serverless] Enquiry Received:', JSON.stringify(newEnquiry, null, 2));

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'admin@richmindsinternational.com.ng';
    const senderEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

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

        await fetch('https://api.resend.com/emails', {
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
      } catch (err) {
        console.error('Resend error in Vercel function:', err);
      }
    }

    res.status(200).json({
      success: true,
      referenceId,
      message: `Your enquiry has been successfully registered under reference ${referenceId}. Our commercial team at Richminds International Limited will review and respond promptly.`,
      enquiry: newEnquiry
    });
  } catch (error: any) {
    console.error('Error handling enquiry:', error);
    res.status(500).json({
      success: false,
      error: 'An unexpected internal error occurred.'
    });
  }
}
