import React from 'react';
import { PageRoute, ProductCategory } from '../types';
import { RichmindsLogo } from './Logo';
import { COMPANY_DETAILS } from '../data/company';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute, categoryPrefill?: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B1C38] text-slate-300 border-t border-[#1C335C] mt-auto">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/10 p-2.5 rounded-xl inline-block backdrop-blur-sm border border-white/15">
              <RichmindsLogo size={56} showText={false} />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-lg text-white tracking-wide">
                Richminds International Limited
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#E7A942] font-semibold">
                Authentic African Foods · UK Import & Redistribution
              </p>
            </div>
            <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm">
              Bridging the culinary gap between Africa and the United Kingdom. Dedicated to sourcing authentic, high-quality African food products and making them accessible to UK retailers, wholesalers, and communities.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1C38] bg-[#E7A942] hover:bg-[#F2BD59] rounded-md transition-colors"
              >
                <span>Make a Trade Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E7A942]">Quick Links</p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors"
                >
                  Product Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partnerships')}
                  className="hover:text-white transition-colors"
                >
                  Suppliers & Partnerships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E7A942]">
              Food Categories
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('products', 'Authentic Grains & Staples')}
                  className="text-left hover:text-white transition-colors"
                >
                  Authentic Grains & Staples
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'Traditional Spices & Seasonings')}
                  className="text-left hover:text-white transition-colors"
                >
                  Traditional Spices & Seasonings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'Specialty Packaged Goods')}
                  className="text-left hover:text-white transition-colors"
                >
                  Specialty Packaged Goods
                </button>
              </li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-400">
              Direct sourcing from verified agricultural regions across Africa.
            </div>
          </div>

          {/* Col 4: Verified Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E7A942]">
              Headquarters & Contact
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E7A942] shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300 leading-snug">
                  {COMPANY_DETAILS.address.line1}<br />
                  {COMPANY_DETAILS.address.line2}<br />
                  {COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.postcode}<br />
                  {COMPANY_DETAILS.address.country}
                </address>
              </div>

              <div className="space-y-1.5 pt-1">
                {COMPANY_DETAILS.phones.map((phone, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#E7A942] shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 mr-1.5">{phone.label}:</span>
                      <a
                        href={`tel:${phone.dial}`}
                        className="text-white hover:text-[#E7A942] font-mono tracking-tight font-medium underline underline-offset-2 transition-colors"
                      >
                        {phone.number}
                      </a>
                    </div>
                  </div>
                ))}

                {COMPANY_DETAILS.email && (
                  <div className="flex items-start gap-2.5 pt-1">
                    <Mail className="w-3.5 h-3.5 text-[#E7A942] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Official Email:</span>
                      <a
                        href={`mailto:${COMPANY_DETAILS.email}`}
                        className="text-white hover:text-[#E7A942] font-medium underline underline-offset-2 transition-colors text-[11px] break-all"
                      >
                        {COMPANY_DETAILS.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Quiet legal notice */}
      <div className="border-t border-white/10 bg-[#071326] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Richminds International Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Business Type: Import & Redistribution</span>
            <span aria-hidden="true">·</span>
            <span>Kingston upon Hull, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
