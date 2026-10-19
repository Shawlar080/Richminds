import React from 'react';
import { PageRoute, EnquiryType } from '../types';
import { PARTNERSHIP_PATHS } from '../data/company';
import { Handshake, Network, TrendingUp, Check, ArrowRight } from 'lucide-react';

interface PartnershipsPageProps {
  onNavigate: (page: PageRoute) => void;
  onEnquirePartnership: (enquiryType: EnquiryType, subject: string) => void;
}

export const PartnershipsPage: React.FC<PartnershipsPageProps> = ({
  onNavigate,
  onEnquirePartnership
}) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#F3ECE0] to-[#FAF8F5] border-b border-[#E8DFC9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
            Supplier & Partnership Overview
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0B1C38] tracking-tight text-balance">
            Growing Together Through Authentic African Food.
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            At Richminds International Limited, we believe that the foundation of quality distribution lies in strong, reliable, and mutually beneficial relationships.
          </p>
          <div className="pt-2">
            <button
              onClick={() =>
                onEnquirePartnership(
                  'Distribution Enquiry',
                  'Strategic Partnership Enquiry with Richminds'
                )
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg shadow-sm transition-all"
            >
              <span>Discuss a Partnership</span>
              <ArrowRight className="w-4 h-4 text-[#E7A942]" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. The Three Documented Partnership Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
            Core Tenets
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#0B1C38]">
            Our Partnership Principles
          </h2>
          <p className="text-sm text-slate-600">
            Documented commitments that govern every trade relationship we forge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Principle 1: Direct Sourcing */}
          <div className="bg-white border border-[#E8DFC9] rounded-2xl p-8 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4E8] border border-[#E8DFC9] flex items-center justify-center text-[#C98822]">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0B1C38]">
                Direct Sourcing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We partner closely with trusted producers, farmers, and food processors across Africa to ensure authenticity and premium quality. Direct sourcing guarantees crop traceability and fair value for African agricultural growers.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] text-[#1E5032] font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4 shrink-0" />
              <span>Direct farmer & cooperative channels</span>
            </div>
          </div>

          {/* Principle 2: Efficient Supply Chain */}
          <div className="bg-white border border-[#E8DFC9] rounded-2xl p-8 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4E8] border border-[#E8DFC9] flex items-center justify-center text-[#1E5032]">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0B1C38]">
                Efficient Supply Chain
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We maintain a streamlined redistribution network designed to move goods safely and efficiently from ports of entry to our UK-based clients, reducing storage friction and safeguarding freshness.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] text-[#1E5032] font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4 shrink-0" />
              <span>Hull logistics hub & UK port transit</span>
            </div>
          </div>

          {/* Principle 3: Growth Opportunities */}
          <div className="bg-white border border-[#E8DFC9] rounded-2xl p-8 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4E8] border border-[#E8DFC9] flex items-center justify-center text-[#8A4F1D]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0B1C38]">
                Growth Opportunities
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We are always open to expanding our network and collaborating with new suppliers, wholesale buyers, and retail partners looking to enter or scale within the UK market.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] text-[#1E5032] font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4 shrink-0" />
              <span>Scalable commercial trade terms</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tailored Partnership Tracks */}
      <section className="bg-[#FAF8F5] border-y border-[#E8DFC9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
              Collaborate With Us
            </span>
            <h2 className="font-display text-3xl font-extrabold text-[#0B1C38]">
              Partnership Pathways
            </h2>
            <p className="text-sm text-slate-600">
              Select the pathway that matches your business model to start a targeted commercial conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERSHIP_PATHS.map((path) => (
              <div
                key={path.id}
                className="bg-white border border-[#E8DFC9] rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C98822]">
                      {path.audience}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#0B1C38] mt-1">
                      {path.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {path.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      What We Offer & Support:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {path.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#1E5032] shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() =>
                      onEnquirePartnership(
                        path.enquiryType,
                        `Partnership inquiry for ${path.title}`
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg transition-colors"
                  >
                    <span>{path.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E7A942]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Partner Inquiry Form Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1C38] text-white rounded-2xl p-8 sm:p-12 text-center space-y-5 border border-[#1C335C] shadow-lg">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E7A942]">
            Ready to Take the Next Step?
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white max-w-xl mx-auto">
            Let's Discuss How Richminds Can Support Your African Food Supply Chain
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our trade team in Kingston upon Hull welcomes all supplier and wholesale conversations. Fill out our partnership inquiry form or call our direct office numbers.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                onEnquirePartnership(
                  'Distribution Enquiry',
                  'Strategic Partnership Enquiry with Richminds'
                )
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B1C38] bg-[#E7A942] hover:bg-[#F2BD59] rounded-lg shadow-sm transition-colors"
            >
              <span>Discuss a Partnership</span>
              <ArrowRight className="w-4 h-4 text-[#0B1C38]" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 rounded-lg transition-colors"
            >
              <span>View Office Contact & Phones</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
