export type PageRoute = 'home' | 'about' | 'products' | 'partnerships' | 'contact';

export type EnquiryType =
  | 'General Enquiry'
  | 'Product Enquiry'
  | 'Wholesale Enquiry'
  | 'Retail Partnership'
  | 'Supplier Partnership'
  | 'Distribution Enquiry'
  | 'Other';

export type ProductCategory =
  | 'Authentic Grains & Staples'
  | 'Traditional Spices & Seasonings'
  | 'Specialty Packaged Goods'
  | 'Multiple Categories'
  | 'Not Sure Yet';

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  enquiryType: EnquiryType;
  productCategory: ProductCategory;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ProductCategoryInfo {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  highlightItems: string[];
  culinaryUsage: string;
  wholesaleAvailability: string;
  imageTag: string;
}

export interface PartnershipPath {
  id: string;
  title: string;
  audience: string;
  description: string;
  requirements: string[];
  ctaText: string;
  enquiryType: EnquiryType;
}

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  sizeOrPackaging?: string;
  description: string;
  tags: string[];
}

