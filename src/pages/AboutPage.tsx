import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_DETAILS } from '../data/company';
import { CategoryVisual } from '../components/VisualFallback';
import { Compass, Heart, Shield, Globe2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#F3ECE0] to-[#FAF8F5] border-b border-[#E8DFC9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
            About Richminds International Limited
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0B1C38] tracking-tight">
            Our Purpose & Heritage
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Bridging the culinary distance between Africa and the United Kingdom, championing authentic food traditions, and ensuring reliable UK redistribution.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction & Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C98822]">
              <span>Who We Are</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold text-[#0B1C38] tracking-tight">
              A Dedicated Import & Redistribution Business in Kingston upon Hull
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              {COMPANY_DETAILS.welcomeIntro}
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Food is more than sustenance—it is identity, memory, family celebration, and cultural belonging. By maintaining close ties with African agricultural regions and navigating the complexities of UK cross-border distribution, Richminds International Limited ensures that authentic food products arrive safely, reliably, and ready for retail and table enjoyment.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg transition-colors"
              >
                <span>Browse Food Categories</span>
                <ArrowRight className="w-4 h-4 text-[#E7A942]" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1C38] bg-white border border-[#D5C6AC] hover:bg-[#FAF8F5] rounded-lg transition-colors"
              >
                <span>Contact Our Hull Hub</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E0D4BE] shadow-lg bg-white p-2">
              <CategoryVisual
                type="sourcing"
                alt="Agricultural food harvesting and sourcing relationships"
                aspect="4/3"
                className="rounded-xl"
              />
              <div className="p-4 bg-[#FCFBF8] border-t border-[#EFE8D8] text-xs text-slate-600">
                <span className="font-semibold text-[#0B1C38]">Authentic Agricultural Lineage:</span> Direct connections with regional African growers and processors.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Statement */}
          <div className="bg-[#0B1C38] text-white rounded-2xl p-8 sm:p-10 border border-[#1C335C] shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#E7A942]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E7A942]">
                Vision Statement
              </span>
              <blockquote className="font-display text-xl sm:text-2xl font-bold leading-snug text-slate-100">
                "{COMPANY_DETAILS.vision}"
              </blockquote>
            </div>
            <p className="text-xs text-slate-300 border-t border-white/10 pt-4">
              Our guiding beacon for every supplier agreement, cargo shipment, and client interaction.
            </p>
          </div>

          {/* Mission & Purpose */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8DFC9] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#1E5032]">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
                Mission & Cultural Purpose
              </span>
              <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-[#0B1C38]">
                "{COMPANY_DETAILS.mission}"
              </p>
            </div>
            <p className="text-xs text-slate-600 border-t border-slate-100 pt-4">
              Preserving tradition while making authentic African flavors accessible across UK towns and cities.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Strategic Pillars: Sourcing, Supply Chain & Cultural Preservation */}
      <section className="bg-[#FAF8F5] border-y border-[#E8DFC9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
              Operational Excellence
            </span>
            <h2 className="font-display text-3xl font-extrabold text-[#0B1C38]">
              How We Deliver Quality & Authenticity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#E8DFC9] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#C98822]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1C38]">
                Product Sourcing Approach
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prioritize close collaboration with trusted African agricultural producers, farming cooperatives, and traditional food processors. By verifying provenance and cultivation methods, we safeguard ingredient purity and cultural legitimacy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFC9] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#1E5032]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1C38]">
                Seamless Supply Chain
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From African packing houses to UK border points and onwards to our Kingston upon Hull facilities, our distribution procedures focus on goods safety, proper transit condition monitoring, and timely customer dispatch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFC9] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F1E4CE] flex items-center justify-center text-[#8A4F1D]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1C38]">
                Cultural Preservation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authentic African recipes cannot be compromised with synthetic substitutes. We champion heritage staples—from whole sorghum and indigenous uda spice pods to authentic cassava flours—honoring the culinary customs passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hull Headquarters & Operational Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8DFC9] rounded-2xl p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A4F1D]">
                Our Location
              </span>
              <h3 className="font-display text-2xl font-bold text-[#0B1C38]">
                Based in Kingston upon Hull, UK
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Our base in Hull positions Richminds with strategic access to vital trade routes, maritime connectivity, and central road logistics throughout Yorkshire, the Midlands, and the wider UK network.
              </p>
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">Operational Address:</p>
                <p>Apartment 8 Charterhouse School</p>
                <p>55 Wincolmlee Street, Hull, HU2 8AG</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg transition-colors"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-4 h-4 text-[#E7A942]" />
              </button>
              <button
                onClick={() => onNavigate('partnerships')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B1C38] bg-white border border-[#D5C6AC] hover:bg-[#FAF8F5] rounded-lg transition-colors"
              >
                <span>Partnership Overview</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
