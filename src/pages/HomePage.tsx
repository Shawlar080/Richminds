import React from 'react';
import { PageRoute, ProductCategory } from '../types';
import { COMPANY_DETAILS, PRODUCT_CATEGORIES, DISTRIBUTION_STEPS, WHY_CHOOSE_ITEMS, IMPORTED_PRODUCTS } from '../data/company';
import { CategoryVisual } from '../components/VisualFallback';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Users, Sparkles, Building2, Store, Search, Package } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onEnquireCategory: (category: ProductCategory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onEnquireCategory }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 bg-gradient-to-b from-[#F5EFE6]/60 via-[#FAF8F5] to-[#FAF8F5] border-b border-[#EADFCB]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Quiet editorial kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A4F1D] bg-[#F1E4CE] px-3 py-1.5 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#C98822]" />
                <span>UK Import & Redistribution · Kingston upon Hull</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B1C38] tracking-tight leading-[1.15] text-balance">
                Authentic African Foods.{' '}
                <span className="text-[#C98822]">Connecting Cultures</span> Across the UK.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Bringing the rich tastes and culinary heritage of Africa closer to households,
                retailers, and food businesses across the United Kingdom through quality-focused
                sourcing and distribution.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#0B1C38] hover:bg-[#162D56] active:bg-[#071326] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 text-[#E7A942]" />
                </button>
                <button
                  onClick={() => onNavigate('partnerships')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0B1C38] bg-white hover:bg-[#FAF8F5] active:bg-[#F2ECE0] border border-[#D5C6AC] rounded-lg transition-all whitespace-nowrap shrink-0 shadow-xs"
                >
                  <span>Become a Business Partner</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-[#E8DFC9] grid grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">Direct Sourcing</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">Verified African growers</p>
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">Hull Operations</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">UK redistribution hub</p>
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">Wholesale Ready</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">Retailers & distributors</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C98822]/30 via-[#1E5032]/20 to-[#0B1C38]/30 rounded-2xl blur-lg opacity-70" />
                <div className="relative rounded-2xl overflow-hidden border border-[#E0D4BE] shadow-xl bg-white p-2">
                  <CategoryVisual
                    type="hero"
                    alt="Authentic African Grains, Spices and Packaged Foods representing Richminds International Limited"
                    aspect="4/3"
                    className="rounded-xl shadow-inner"
                  />
                  <div className="p-4 bg-[#FCFBF8] border-t border-[#EFE8D8] mt-2 rounded-lg flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1E5032]" />
                      <span className="font-medium text-[#0B1C38]">Authentic Harvests & Provisions</span>
                    </div>
                    <span className="text-slate-500">UK Distribution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME & INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8DFC9] rounded-2xl p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C98822]">
                <span>Welcome to Richminds International Limited</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1C38] tracking-tight">
                Bridging the Culinary Gap Between Africa and the United Kingdom
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {COMPANY_DETAILS.welcomeIntro}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg transition-colors shadow-sm"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#E7A942]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
            Curated Sourcing Focus
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B1C38] tracking-tight">
            Our Core African Food Categories
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Richminds sources and redistributes high-quality food products across three main pillars, serving retail stores, wholesalers, and community kitchens across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category) => {
            const visualType =
              category.id === 'grains-staples'
                ? 'grains'
                : category.id === 'spices-seasonings'
                ? 'spices'
                : 'packaged';

            return (
              <div
                key={category.id}
                className="bg-white border border-[#E8DFC9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <CategoryVisual
                    type={visualType}
                    alt={category.name}
                    aspect="4/3"
                  />
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-xl font-bold text-[#0B1C38]">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {category.shortDescription}
                    </p>
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Key Sourced Lines:
                      </p>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {category.highlightItems.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C98822] shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => onEnquireCategory(category.name as ProductCategory)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg transition-colors"
                  >
                    <span>Enquire About This Category</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E7A942]" />
                  </button>
                  <button
                    onClick={() => onNavigate('products')}
                    className="w-full text-center text-xs font-medium text-slate-600 hover:text-[#0B1C38] py-1 transition-colors underline underline-offset-4"
                  >
                    Explore Category Overview →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-[#F2EDE2]/70 rounded-xl text-center text-xs text-slate-600 border border-[#E2D8C3]">
          <span className="font-semibold text-slate-800">Catalogue Availability Note:</span> Category listings represent our active sourcing focus. Specific lots, SKU sizes, and inventory allocations are confirmed directly with our commercial team upon enquiry.
        </div>
      </section>

      {/* 3B. FEATURED IMPORTED PRODUCTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-[#FAF8F5] border border-[#E8DFC9] rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C98822]">
                <Package className="w-4 h-4" />
                <span>UK Wholesale Stock</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B1C38]">
                Featured Products Imported & Ready for Distribution
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                From staple 20kg Ijebu garri bags to signature Gino Asun seasonings and Derica tomato tins, explore our verified import lines.
              </p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <Search className="w-3.5 h-3.5 text-[#E7A942]" />
              <span>Search All 28 Products</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {IMPORTED_PRODUCTS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('products')}
                className="bg-white p-3.5 rounded-xl border border-[#E8DFC9] hover:border-[#C98822] cursor-pointer transition-all hover:shadow-xs group flex flex-col justify-between space-y-2"
              >
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block truncate">
                    {item.sizeOrPackaging || 'Standard'}
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#0B1C38] group-hover:text-[#C98822] transition-colors leading-snug mt-1">
                    {item.name}
                  </h4>
                </div>
                <span className="text-[11px] text-[#8A4F1D] font-medium flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE RICHMINDS */}
      <section className="bg-[#FAF8F5] border-y border-[#E8DFC9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
              Our Foundation
            </span>
            <h2 className="font-display text-3xl font-extrabold text-[#0B1C38]">
              Why Choose Richminds International?
            </h2>
            <p className="text-sm text-slate-600">
              Built on integrity, direct partnerships, and operational reliability for UK businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E8DFC9] shadow-2xs hover:border-[#C98822]/60 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF4E8] border border-[#E8DFC9] flex items-center justify-center text-[#8A4F1D]">
                  {idx === 0 && <Sparkles className="w-5 h-5 text-[#C98822]" />}
                  {idx === 1 && <Users className="w-5 h-5 text-[#1E5032]" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5 text-[#0B1C38]" />}
                  {idx === 3 && <Truck className="w-5 h-5 text-[#C98822]" />}
                  {idx === 4 && <Store className="w-5 h-5 text-[#0B1C38]" />}
                  {idx === 5 && <Building2 className="w-5 h-5 text-[#1E5032]" />}
                </div>
                <h3 className="font-display font-bold text-base text-[#0B1C38]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW OUR DISTRIBUTION MODEL WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
            End-To-End Operations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B1C38]">
            How Our Distribution Model Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A transparent four-stage pathway connecting authentic African agricultural harvest to UK dinner tables and store shelves.
          </p>
        </div>

        {/* 4-Step horizontal timeline on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {DISTRIBUTION_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-white border border-[#E8DFC9] rounded-xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-[#C98822]">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Stage {idx + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#0B1C38]">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#8A4F1D]">
                  {step.summary}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PARTNERSHIP CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B1C38] via-[#10274B] to-[#0B1C38] text-white p-8 sm:p-14 border border-[#234275] shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E7A942]">
              Grow With Richminds
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Let's Bring Authentic African Food to More People Across the UK.
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Are you a food retailer, wholesale buyer, supplier, or distribution partner? Connect with Richminds International Limited to discuss opportunities for working together.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B1C38] bg-[#E7A942] hover:bg-[#F2BD59] rounded-lg shadow-sm transition-colors"
              >
                <span>Start a Business Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#0B1C38]" />
              </button>
              <button
                onClick={() => onNavigate('partnerships')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E7A942] transition-colors"
              >
                <span>Explore Partnership Models →</span>
              </button>
            </div>
          </div>

          {/* Subtle background motif */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
            <div className="w-96 h-96 rounded-full border-8 border-white/20" />
          </div>
        </div>
      </section>
    </div>
  );
};
