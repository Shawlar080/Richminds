import React, { useState, useEffect } from 'react';
import { EnquiryFormData, EnquiryType, ProductCategory } from '../types';
import { COMPANY_DETAILS } from '../data/company';
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Building,
  Mail,
  ExternalLink,
  RotateCcw,
  Inbox,
  X
} from 'lucide-react';

interface ContactPageProps {
  initialEnquiryType?: EnquiryType;
  initialCategory?: ProductCategory;
  initialSubject?: string;
}

interface SubmittedEnquiryRecord {
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
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialEnquiryType,
  initialCategory,
  initialSubject
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    enquiryType: initialEnquiryType || 'General Enquiry',
    productCategory: initialCategory || 'Not Sure Yet',
    subject: initialSubject || '',
    message: '',
    honeypot: ''
  });

  const [privacyAgreed, setPrivacyAgreed] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<SubmittedEnquiryRecord | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Inbox Modal State for viewing saved enquiries
  const [inboxOpen, setInboxOpen] = useState(false);
  const [savedEnquiries, setSavedEnquiries] = useState<SubmittedEnquiryRecord[]>([]);
  const [loadingInbox, setLoadingInbox] = useState(false);

  // Sync props when user clicks specific category or partnership CTAs
  useEffect(() => {
    if (initialEnquiryType) {
      setFormData((prev) => ({ ...prev, enquiryType: initialEnquiryType }));
    }
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, productCategory: initialCategory }));
    }
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialEnquiryType, initialCategory, initialSubject]);

  const loadInbox = async () => {
    setLoadingInbox(true);
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      if (data.enquiries) {
        setSavedEnquiries(data.enquiries);
      }
    } catch (e) {
      console.error('Failed to load inbox:', e);
    } finally {
      setLoadingInbox(false);
    }
  };

  const handleOpenInbox = () => {
    setInboxOpen(true);
    loadInbox();
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 2) {
      newErrors.message = 'Please enter a message or requirement.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      subject: formData.subject.trim() || `${formData.enquiryType} - ${formData.productCategory}`
    };

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setSubmittedEnquiry(result.enquiry || {
          id: `enq_${Date.now()}`,
          referenceId: result.referenceId || `RML-${new Date().getFullYear()}-01`,
          fullName: payload.fullName,
          email: payload.email,
          phone: payload.phone || 'Not provided',
          companyName: payload.companyName || 'Not specified',
          enquiryType: payload.enquiryType,
          productCategory: payload.productCategory,
          subject: payload.subject,
          message: payload.message,
          submittedAt: new Date().toISOString()
        });

        // Clear form fields for next time
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          enquiryType: 'General Enquiry',
          productCategory: 'Not Sure Yet',
          subject: '',
          message: '',
          honeypot: ''
        });
      } else {
        setSubmitError(result.error || 'Failed to submit enquiry. Please call our team directly.');
      }
    } catch (err: any) {
      setSubmitError('Network connection issue. Please check your network or call our office.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateMailtoUrl = (enq: SubmittedEnquiryRecord) => {
    const to = COMPANY_DETAILS.email || 'admin@richmindsinternational.com.ng';
    const subj = encodeURIComponent(`[Ref: ${enq.referenceId}] ${enq.subject} - ${enq.fullName}`);
    const body = encodeURIComponent(
      `Hello Richminds International Limited,\n\n` +
      `Here is my enquiry details (Ref: ${enq.referenceId}):\n\n` +
      `Name: ${enq.fullName}\n` +
      `Email: ${enq.email}\n` +
      `Phone: ${enq.phone}\n` +
      `Company: ${enq.companyName}\n` +
      `Enquiry Type: ${enq.enquiryType}\n` +
      `Category: ${enq.productCategory}\n` +
      `Subject: ${enq.subject}\n\n` +
      `Message:\n${enq.message}\n\n` +
      `Submitted via: richmindsinternational.com.ng`
    );
    return `mailto:${to}?subject=${subj}&body=${body}`;
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#F3ECE0] to-[#FAF8F5] border-b border-[#E8DFC9] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
            Official Communication & Trade Desk
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0B1C38] tracking-tight text-balance">
            Contact Richminds International Limited
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Our trade desk in Kingston upon Hull is active and ready to assist retailers, wholesalers, and food partners across the United Kingdom.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid: Contact Details & Interactive Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Verified Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="bg-white border border-[#E8DFC9] rounded-2xl p-7 shadow-xs space-y-5">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C98822]">
                  Headquarters & Address
                </span>
                <h3 className="font-display font-bold text-xl text-[#0B1C38]">
                  Richminds International Limited
                </h3>
                <p className="text-xs text-slate-500">Business Type: Import & Redistribution</p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#8A4F1D] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Operating Facility:</p>
                    <address className="not-italic text-slate-600 leading-relaxed mt-0.5">
                      {COMPANY_DETAILS.address.line1}<br />
                      {COMPANY_DETAILS.address.line2}<br />
                      {COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.postcode}<br />
                      {COMPANY_DETAILS.address.country}
                    </address>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <p className="font-semibold text-slate-800 text-sm">Direct Phone Numbers:</p>
                  {COMPANY_DETAILS.phones.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#C98822] shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">{p.label}</span>
                        <a
                          href={`tel:${p.dial}`}
                          className="text-sm font-bold text-[#0B1C38] hover:text-[#C98822] font-mono underline underline-offset-4 transition-colors"
                        >
                          {p.number}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {COMPANY_DETAILS.email && (
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <p className="font-semibold text-slate-800 text-sm">Official Email Address:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#8A4F1D] shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <span className="text-[10px] text-slate-400 block">General & Trade Inquiries:</span>
                        <a
                          href={`mailto:${COMPANY_DETAILS.email}`}
                          className="text-sm font-bold text-[#0B1C38] hover:text-[#C98822] underline underline-offset-4 transition-colors break-all"
                        >
                          {COMPANY_DETAILS.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-start gap-3 text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-700">Commercial Enquiries Desk:</p>
                    <p className="text-[11px] mt-0.5">Monday to Friday: 09:00 – 17:30 GMT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Telephone Priority Callout */}
            <div className="bg-[#FAF8F5] border border-[#E8DFC9] rounded-2xl p-6 text-xs space-y-3">
              <div className="flex items-center gap-2 text-[#8A4F1D] font-bold uppercase tracking-wider text-[11px]">
                <Phone className="w-4 h-4" />
                <span>Immediate Telephone Assistance</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                For urgent trade dispatch enquiries, pallet availability, or incoming container logistics, please call our direct operational lines:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href="tel:07435977209"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#D5C6AC] rounded-lg font-mono font-bold text-xs text-[#0B1C38] hover:bg-[#F2ECE0] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#C98822]" />
                  <span>07435977209</span>
                </a>
                <a
                  href="tel:+447424276619"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#D5C6AC] rounded-lg font-mono font-bold text-xs text-[#0B1C38] hover:bg-[#F2ECE0] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#C98822]" />
                  <span>+44 7424 276619</span>
                </a>
              </div>
              <div className="pt-2 border-t border-[#E8DFC9]/70 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8A4F1D] shrink-0" />
                <span className="text-slate-500 text-[11px]">Direct email:</span>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-[#0B1C38] hover:text-[#C98822] font-medium text-[11px] underline underline-offset-2 transition-colors break-all"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            {/* In-app Logged Enquiries viewer button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleOpenInbox}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-[#FAF8F5] border border-[#D5C6AC] rounded-xl transition-colors shadow-2xs"
              >
                <Inbox className="w-4 h-4 text-[#C98822]" />
                <span>View Registered Enquiries Log</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Trade Enquiry Form OR Success State (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E8DFC9] rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
              {/* If an enquiry was just submitted, display the active confirmation card */}
              {submittedEnquiry ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="p-6 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                        <span>Enquiry Active & Registered</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-900 bg-white px-2.5 py-1 rounded border border-emerald-200">
                        {submittedEnquiry.referenceId}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-2xl text-emerald-950">
                        Thank You, {submittedEnquiry.fullName}!
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                        Your business enquiry has been successfully registered in our commercial intake desk. Our redistribution team in Kingston upon Hull will review your request and get in touch via <strong>{submittedEnquiry.email}</strong>.
                      </p>
                    </div>

                    {/* Summary of what was submitted */}
                    <div className="bg-white p-4 rounded-lg border border-emerald-200/80 space-y-2 text-xs">
                      <div className="grid grid-cols-2 gap-2 text-slate-600">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Enquiry Type:</span>
                          <span className="font-medium text-slate-800">{submittedEnquiry.enquiryType}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Category:</span>
                          <span className="font-medium text-slate-800">{submittedEnquiry.productCategory}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Company:</span>
                          <span className="font-medium text-slate-800">{submittedEnquiry.companyName}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Contact Phone:</span>
                          <span className="font-medium text-slate-800">{submittedEnquiry.phone}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Subject:</span>
                        <p className="font-semibold text-slate-800">{submittedEnquiry.subject}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Message:</span>
                        <p className="text-slate-700 whitespace-pre-wrap">{submittedEnquiry.message}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions after submission */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-700">Optional Quick Actions:</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={generateMailtoUrl(submittedEnquiry)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1C38] bg-[#E7A942] hover:bg-[#F2BD59] rounded-lg transition-colors shadow-2xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Send Direct Copy via Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedEnquiry(null)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-700 bg-[#FAF8F5] hover:bg-[#F2ECE0] border border-[#D5C6AC] rounded-lg transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Submit Another Enquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C98822]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Trade Desk · Active</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#0B1C38]">
                      Commercial & Product Enquiry Form
                    </h3>
                    <p className="text-xs text-slate-600">
                      Submit your trade or wholesale requirement below. Our team in Hull logs and reviews every submission immediately.
                    </p>
                  </div>

                  {/* Submission Error Banner if any */}
                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold text-sm">Submission Error</p>
                        <p>{submitError}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Honeypot field for bot protection */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="hp_field">Do not fill this</label>
                      <input
                        type="text"
                        id="hp_field"
                        name="hp_field"
                        tabIndex={-1}
                        value={formData.honeypot}
                        onChange={(e) =>
                          setFormData({ ...formData, honeypot: e.target.value })
                        }
                        autoComplete="off"
                      />
                    </div>

                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label
                          htmlFor="fullName"
                          className="text-xs font-semibold text-slate-700"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="e.g. Adebayo Ogunlesi"
                          className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C98822] transition-all ${
                            errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#D5C6AC]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-600">{errors.fullName}</p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold text-slate-700"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@company.co.uk"
                          className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C98822] transition-all ${
                            errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D5C6AC]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label
                          htmlFor="phone"
                          className="text-xs font-semibold text-slate-700"
                        >
                          Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="e.g. 07123 456789"
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D5C6AC] rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C98822] transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="companyName"
                          className="text-xs font-semibold text-slate-700"
                        >
                          Business / Company Name{' '}
                          <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          placeholder="e.g. African Pride Grocers Ltd"
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D5C6AC] rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C98822] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Enquiry Type & Product Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label
                          htmlFor="enquiryType"
                          className="text-xs font-semibold text-slate-700"
                        >
                          Enquiry Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="enquiryType"
                          value={formData.enquiryType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              enquiryType: e.target.value as EnquiryType
                            })
                          }
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D5C6AC] rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C98822] transition-all"
                        >
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Product Enquiry">Product Enquiry</option>
                          <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                          <option value="Retail Partnership">Retail Partnership</option>
                          <option value="Supplier Partnership">Supplier Partnership</option>
                          <option value="Distribution Enquiry">Distribution Enquiry</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="productCategory"
                          className="text-xs font-semibold text-slate-700"
                        >
                          Product Category{' '}
                          <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <select
                          id="productCategory"
                          value={formData.productCategory}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              productCategory: e.target.value as ProductCategory
                            })
                          }
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D5C6AC] rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C98822] transition-all"
                        >
                          <option value="Authentic Grains & Staples">
                            Authentic Grains & Staples
                          </option>
                          <option value="Traditional Spices & Seasonings">
                            Traditional Spices & Seasonings
                          </option>
                          <option value="Specialty Packaged Goods">
                            Specialty Packaged Goods
                          </option>
                          <option value="Multiple Categories">Multiple Categories</option>
                          <option value="Not Sure Yet">Not Sure Yet</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Subject */}
                    <div className="space-y-1">
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold text-slate-700"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Wholesale price inquiry for Ijebu Garri 20kg and Gino Asun"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D5C6AC] rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C98822] transition-all"
                      />
                    </div>

                    {/* Row 5: Message */}
                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold text-slate-700"
                      >
                        Your Message / Trade Requirement <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Please specify order quantities, store location, frequency of replenishment, or questions..."
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C98822] transition-all ${
                          errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#D5C6AC]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-600">{errors.message}</p>
                      )}
                    </div>

                    {/* Privacy Consent Checkbox (UK GDPR compliant) */}
                    <div className="space-y-1 pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                        <input
                          type="checkbox"
                          checked={privacyAgreed}
                          onChange={(e) => setPrivacyAgreed(e.target.checked)}
                          className="mt-0.5 rounded border-[#D5C6AC] text-[#0B1C38] focus:ring-[#C98822]"
                        />
                        <span>
                          I consent to Richminds International Limited storing and processing my details to reply to this commercial inquiry.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] active:bg-[#071326] disabled:bg-slate-400 rounded-lg shadow transition-all cursor-pointer disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#E7A942]" />
                            <span>Transmitting & Registering Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#E7A942]" />
                            <span>Submit Business Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. In-App Enquiries Review Drawer / Modal */}
      {inboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#E8DFC9]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#E8DFC9] bg-[#FAF8F5] rounded-t-2xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#8A4F1D]">
                  <Inbox className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#0B1C38]">
                    Richminds Registered Enquiries Log
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Live recorded submissions stored on the commercial server
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setInboxOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: List of enquiries */}
            <div className="p-5 overflow-y-auto space-y-3 flex-1">
              {loadingInbox ? (
                <div className="py-12 text-center text-slate-400 text-xs flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#C98822]" />
                  <span>Loading recorded enquiries...</span>
                </div>
              ) : savedEnquiries.length === 0 ? (
                <div className="py-12 text-center space-y-2">
                  <Inbox className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs text-slate-500">
                    No enquiries registered yet. Submit the form above to see your enquiry appear here!
                  </p>
                </div>
              ) : (
                savedEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-4 rounded-xl border border-[#E8DFC9] bg-[#FCFBF8] space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[#0B1C38] text-[11px] bg-[#F1E4CE] px-2 py-0.5 rounded">
                        {enq.referenceId}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {new Date(enq.submittedAt).toLocaleString('en-GB')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                      <div>
                        <span className="text-slate-400">From:</span>{' '}
                        <strong className="text-slate-800">{enq.fullName}</strong> ({enq.email})
                      </div>
                      <div>
                        <span className="text-slate-400">Phone:</span>{' '}
                        <span className="font-mono">{enq.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Company:</span>{' '}
                        <span>{enq.companyName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Type / Category:</span>{' '}
                        <span>{enq.enquiryType} · {enq.productCategory}</span>
                      </div>
                    </div>

                    <div className="pt-1 border-t border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Subject:</span>
                      <p className="font-medium text-slate-800">{enq.subject}</p>
                    </div>

                    <div className="pt-1">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Message:</span>
                      <p className="text-slate-700 whitespace-pre-wrap bg-white p-2 rounded border border-slate-100">
                        {enq.message}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#E8DFC9] bg-[#FAF8F5] rounded-b-2xl flex items-center justify-between text-xs">
              <span className="text-slate-500">
                {savedEnquiries.length} enquiry{savedEnquiries.length === 1 ? '' : 'ies'} registered
              </span>
              <button
                type="button"
                onClick={() => setInboxOpen(false)}
                className="px-4 py-2 bg-[#0B1C38] text-white rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
