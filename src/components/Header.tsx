import React, { useState } from 'react';
import { PageRoute } from '../types';
import { RichmindsLogo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'partnerships', label: 'Suppliers & Partnerships' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DFC9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand wordmark and emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C98822] rounded-lg p-1 transition-opacity hover:opacity-90"
            aria-label="Richminds International Limited - Home"
          >
            <RichmindsLogo size={52} showText={true} />
          </button>

          {/* Zone 2: 5 single-line clean text navigation links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-slate-700"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C98822] rounded ${
                    isActive
                      ? 'text-[#0B1C38] font-bold'
                      : 'text-slate-600 hover:text-[#0B1C38]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C98822] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] active:bg-[#071326] rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C98822] whitespace-nowrap shrink-0"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E7A942]" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B1C38] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C98822] rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DFC9] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl space-y-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#0B1C38] text-white font-semibold'
                    : 'text-slate-700 hover:bg-[#EFE8D8]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1C38] rounded-lg shadow"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#E7A942]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
