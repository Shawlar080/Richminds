export default function handler(_req: any, res: any) {
  res.status(200).json({
    status: 'ok',
    active: true,
    platform: 'vercel-serverless',
    contactEmail: process.env.CONTACT_EMAIL || 'admin@richmindsinternational.com.ng',
    emailConfigured: Boolean(process.env.RESEND_API_KEY)
  });
}
