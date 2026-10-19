import React, { useState, useEffect } from 'react';
import { PageRoute, ProductCategory, EnquiryType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [categoryPrefill, setCategoryPrefill] = useState<ProductCategory | undefined>(undefined);
  const [enquiryTypePrefill, setEnquiryTypePrefill] = useState<EnquiryType | undefined>(undefined);
  const [subjectPrefill, setSubjectPrefill] = useState<string | undefined>(undefined);

  // Sync document title with current page
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      home: 'Richminds International Limited - Authentic African Foods UK',
      about: 'About Us | Richminds International Limited - UK African Food Importer',
      products: 'Food Categories & Catalogue | Richminds International Limited',
      partnerships: 'Suppliers & Business Partnerships | Richminds International Limited',
      contact: 'Contact & Commercial Enquiries | Richminds International Limited'
    };
    document.title = titles[currentPage] || 'Richminds International Limited';
  }, [currentPage]);

  const handleNavigate = (page: PageRoute, category?: ProductCategory) => {
    setCurrentPage(page);
    if (category) {
      setCategoryPrefill(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquireCategory = (category: ProductCategory, customSubject?: string) => {
    setCategoryPrefill(category);
    setEnquiryTypePrefill('Product Enquiry');
    setSubjectPrefill(customSubject || `Enquiry regarding ${category}`);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquirePartnership = (enquiryType: EnquiryType, customSubject: string) => {
    setEnquiryTypePrefill(enquiryType);
    setSubjectPrefill(customSubject);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 font-sans selection:bg-[#E7A942]/30 selection:text-[#0B1C38]">
      <Header
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onEnquireCategory={handleEnquireCategory}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onEnquireCategory={handleEnquireCategory}
            initialCategory={categoryPrefill}
          />
        )}
        {currentPage === 'partnerships' && (
          <PartnershipsPage
            onNavigate={handleNavigate}
            onEnquirePartnership={handleEnquirePartnership}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            initialCategory={categoryPrefill}
            initialEnquiryType={enquiryTypePrefill}
            initialSubject={subjectPrefill}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
