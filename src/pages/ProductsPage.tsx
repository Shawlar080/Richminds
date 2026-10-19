import React, { useState, useMemo } from 'react';
import { PageRoute, ProductCategory, ProductItem } from '../types';
import { PRODUCT_CATEGORIES, IMPORTED_PRODUCTS } from '../data/company';
import { CategoryVisual } from '../components/VisualFallback';
import {
  Search,
  ArrowRight,
  Check,
  Info,
  HelpCircle,
  Package,
  Layers,
  Sparkles,
  Wheat,
  X
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageRoute) => void;
  onEnquireCategory: (category: ProductCategory, subject?: string) => void;
  initialCategory?: ProductCategory | null;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onEnquireCategory,
  initialCategory
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    initialCategory || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'items' | 'categories'>('items');

  const filterTabs = [
    { id: 'all', label: 'All Items & Categories' },
    { id: 'Authentic Grains & Staples', label: 'Grains & Staples' },
    { id: 'Traditional Spices & Seasonings', label: 'Spices & Seasonings' },
    { id: 'Specialty Packaged Goods', label: 'Specialty Packaged Goods' }
  ];

  const popularSearches = [
    'Ijebu Garri',
    'Ayoola Poundo',
    'Gino Asun',
    'Grinded Egusi',
    'Knorr Beef',
    'Maggi Star',
    'Derica Tomatoes',
    'Pepper Soup Mix',
    'Ghana Must Go',
    'Yellow Pap'
  ];

  // Filter individual imported products
  const filteredProducts = useMemo(() => {
    return IMPORTED_PRODUCTS.filter((prod) => {
      const matchesCategory =
        selectedFilter === 'all' || prod.category === selectedFilter;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inName = prod.name.toLowerCase().includes(q);
      const inCategory = prod.category.toLowerCase().includes(q);
      const inDesc = prod.description.toLowerCase().includes(q);
      const inPackaging = prod.sizeOrPackaging?.toLowerCase().includes(q) || false;
      const inTags = prod.tags.some((tag) => tag.toLowerCase().includes(q));

      return inName || inCategory || inDesc || inPackaging || inTags;
    });
  }, [selectedFilter, searchQuery]);

  // Filter category sections
  const filteredCategories = useMemo(() => {
    return PRODUCT_CATEGORIES.filter((cat) => {
      const matchesTab =
        selectedFilter === 'all' || cat.name === selectedFilter;
      const matchesSearch =
        searchQuery.trim() === '' ||
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.longDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.highlightItems.some((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesTab && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const handleProductEnquire = (prod: ProductItem) => {
    const subject = `Wholesale Enquiry: ${prod.name}${
      prod.sizeOrPackaging ? ` (${prod.sizeOrPackaging})` : ''
    }`;
    onEnquireCategory(prod.category, subject);
  };

  return (
    <div className="space-y-14 pb-20">
      {/* 1. Catalogue Header & Search Hero */}
      <section className="bg-gradient-to-b from-[#F3ECE0] to-[#FAF8F5] border-b border-[#E8DFC9] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
            Richminds Wholesale & Distribution Catalogue
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0B1C38] tracking-tight text-balance">
            Explore Our Imported African Foods
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Search our imported stock of authentic grains, spices, seasonings, and packaged grocery provisions available for UK retailers, wholesalers, and food businesses.
          </p>

          {/* Search bar */}
          <div className="pt-4 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products: ijebu garri, gino asun, egusi, maggi, derica, pap..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 text-sm sm:text-base bg-white border border-[#D5C6AC] rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#C98822] focus:border-transparent transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick search tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-600 max-w-2xl mx-auto">
              <span className="text-slate-400 font-medium mr-1">Popular:</span>
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-2.5 py-1 bg-white hover:bg-[#F2ECE0] border border-[#E0D5C1] rounded-md text-slate-700 hover:text-[#0B1C38] transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* Segmented Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#EBE4D5]/80 rounded-xl max-w-2xl mx-auto pt-2">
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#0B1C38] text-white shadow-xs'
                        : 'text-slate-700 hover:text-[#0B1C38] hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle: Individual Products vs Categories */}
            <div className="flex items-center justify-center gap-3 pt-2 text-xs">
              <button
                onClick={() => setActiveTab('items')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'items'
                    ? 'bg-[#0B1C38] text-white'
                    : 'bg-white border border-[#D5C6AC] text-slate-700 hover:bg-[#FAF8F5]'
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                <span>Imported Products ({filteredProducts.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'categories'
                    ? 'bg-[#0B1C38] text-white'
                    : 'bg-white border border-[#D5C6AC] text-slate-700 hover:bg-[#FAF8F5]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Category Overview ({filteredCategories.length})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Notice Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C98822] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-950">
              Direct UK Trade Stock & Pallet Allocation:
            </p>
            <p className="text-amber-900/90 leading-relaxed">
              Below are verified products imported and distributed by Richminds International Limited. Retailers, independent grocers, and wholesalers can confirm current batch availability, case counts, and pallet rates via direct trade enquiry or phone call.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Product Search Results & Grid */}
      {activeTab === 'items' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DFC9] pb-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0B1C38]">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Imported Product Catalogue'}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Showing {filteredProducts.length} imported product lines ready for UK distribution
              </p>
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#8A4F1D] hover:underline font-medium self-start sm:self-auto"
              >
                Reset search
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DFC9] p-8 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="font-display font-bold text-lg text-slate-800">
                No matching products found
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                We couldn't find any items matching "{searchQuery}". Try searching for other terms like garri, egusi, poundo yam, maggi, gino, or derica.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSelectedFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1C38] rounded-md transition-colors"
                >
                  View All 28 Products
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => {
                const isGrains = prod.category === 'Authentic Grains & Staples';
                const isSpices = prod.category === 'Traditional Spices & Seasonings';

                return (
                  <div
                    key={prod.id}
                    className="bg-white border border-[#E8DFC9] rounded-xl p-5 shadow-2xs hover:shadow-md hover:border-[#C98822]/60 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      {/* Top category & unit indicator */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                          {isGrains && <Wheat className="w-3.5 h-3.5 text-[#C98822]" />}
                          {isSpices && <Sparkles className="w-3.5 h-3.5 text-[#8A4F1D]" />}
                          {!isGrains && !isSpices && <Package className="w-3.5 h-3.5 text-[#1E5032]" />}
                          <span className="truncate">{prod.category}</span>
                        </div>
                        {prod.sizeOrPackaging && (
                          <span className="font-mono text-[11px] font-semibold text-[#0B1C38] bg-[#F3ECE0] px-2 py-0.5 rounded border border-[#E0D5C1] whitespace-nowrap shrink-0">
                            {prod.sizeOrPackaging}
                          </span>
                        )}
                      </div>

                      {/* Product Name */}
                      <div>
                        <h3 className="font-display font-bold text-lg text-[#0B1C38] leading-tight">
                          {prod.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                          {prod.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-medium text-slate-500">
                        Wholesale Available
                      </span>
                      <button
                        onClick={() => handleProductEnquire(prod)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-2xs"
                      >
                        <span>Enquire Item</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E7A942]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* 4. Deep-Dive Category Overview Sections */}
      {activeTab === 'categories' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredCategories.map((category) => {
            const visualType =
              category.id === 'grains-staples'
                ? 'grains'
                : category.id === 'spices-seasonings'
                ? 'spices'
                : 'packaged';

            // Find items belonging to this category
            const categoryItems = IMPORTED_PRODUCTS.filter(
              (p) => p.category === category.name
            );

            return (
              <div
                key={category.id}
                id={category.id}
                className="bg-white border border-[#E8DFC9] rounded-2xl overflow-hidden shadow-xs hover:border-[#C98822]/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                  {/* Left Column: Visual Representation (5 cols) */}
                  <div className="lg:col-span-5 space-y-2">
                    <div className="rounded-xl overflow-hidden border border-[#E8DFC9] shadow-inner">
                      <CategoryVisual
                        type={visualType}
                        alt={`${category.name} category photography`}
                        aspect="4/3"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                      <span>Category illustrative imagery</span>
                      <span className="text-[#C98822] font-medium">UK Trade Ready</span>
                    </div>
                  </div>

                  {/* Right Column: Category Details & Enquiry (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#8A4F1D]">
                        Product Category
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B1C38] tracking-tight mt-1">
                        {category.name}
                      </h2>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {category.longDescription}
                    </p>

                    {/* Sourced Highlight Lines from our live inventory */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Imported Lines in this Category ({categoryItems.length} Products):
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {categoryItems.map((prod) => (
                          <button
                            key={prod.id}
                            onClick={() => handleProductEnquire(prod)}
                            className="flex items-center justify-between gap-2 bg-[#FAF8F5] p-2 rounded-md border border-[#EFE8D8] text-left hover:border-[#C98822] transition-colors"
                          >
                            <span className="font-medium text-slate-800 truncate">{prod.name}</span>
                            {prod.sizeOrPackaging && (
                              <span className="text-[10px] text-slate-500 font-mono shrink-0">
                                {prod.sizeOrPackaging}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Culinary Usage & Trade Specs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-slate-100">
                      <div>
                        <span className="font-semibold text-slate-800 block mb-1">
                          Culinary Applications:
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {category.culinaryUsage}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 block mb-1">
                          Wholesale Packaging:
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {category.wholesaleAvailability}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() =>
                          onEnquireCategory(
                            category.name as ProductCategory,
                            `Wholesale inquiry for ${category.name}`
                          )
                        }
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] active:bg-[#071326] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
                      >
                        <span>Enquire About Entire Category</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E7A942]" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedFilter(category.name);
                          setActiveTab('items');
                        }}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-700 bg-[#FAF8F5] hover:bg-[#F2ECE0] border border-[#D5C6AC] rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>View Items ({categoryItems.length})</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* 5. Custom Sourcing Commercial Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8DFC9] rounded-2xl p-8 sm:p-10 text-center space-y-4">
          <h3 className="font-display text-2xl font-bold text-[#0B1C38]">
            Need Pallet Deliveries or Custom African Food Importation?
          </h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            From container loads to mixed-pallet store replenishment, Richminds International Limited works directly with retail owners, wholesalers, and catering groups across the United Kingdom.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C38] hover:bg-[#162D56] rounded-lg transition-colors"
            >
              <span>Speak With Our Commercial Team</span>
              <ArrowRight className="w-4 h-4 text-[#E7A942]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
