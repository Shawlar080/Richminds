import { ProductCategoryInfo, PartnershipPath, ProductItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'Richminds International Limited',
  tagline: 'Authentic African Foods',
  businessType: 'Import & Redistribution',
  location: 'Kingston upon Hull, United Kingdom',
  address: {
    line1: 'Apartment 8 Charterhouse School',
    line2: '55 Wincolmlee Street',
    city: 'Hull',
    postcode: 'HU2 8AG',
    country: 'United Kingdom'
  },
  phones: [
    { label: 'Telephone 1', number: '07435977209', dial: '+447435977209' },
    { label: 'Telephone 2', number: '+44 7424 276619', dial: '+447424276619' }
  ],
  email: 'admin@richmindsinternational.com.ng',
  vision:
    'To become the leading and most trusted bridge for authentic African food distribution in the United Kingdom, recognized for our unwavering commitment to quality, cultural preservation, and seamless supply chain excellence.',
  mission:
    'To celebrate cultural heritage through food, ensuring that diaspora communities and lovers of African cuisine alike can enjoy the genuine tastes and staples of home.',
  welcomeIntro:
    'Richminds International Limited is a dynamic import and distribution business dedicated to bridging the culinary gap between Africa and the United Kingdom. Based in Kingston upon Hull, we source authentic, high-quality African food products and work to make them accessible to households, retailers, and communities across the UK.'
};

export const PRODUCT_CATEGORIES: ProductCategoryInfo[] = [
  {
    id: 'grains-staples',
    name: 'Authentic Grains & Staples',
    shortDescription:
      'High-quality grains, flours, and staple foods sourced directly from trusted agricultural regions in Africa.',
    longDescription:
      'Covering essential staple foods that form the bedrock of African home cooking and celebratory meals. We partner directly with regional agricultural cooperatives and producers across Africa to source naturally cultivated grains, traditional flours, and premium legumes carefully dried and packaged to retain their authentic nutrient value and flavor.',
    highlightItems: [
      'Ijebu Garri (20kg Wholesale Bags)',
      'Ayoola Poundo Yam (1.8kg Packs)',
      'Golden Penny Semovita (GP 2kg)',
      'Grinded Egusi Melon Seeds (20kg)',
      'Grandiose White Pap & Traditional Yellow Pap'
    ],
    culinaryUsage:
      'Ideal for authentic swallow dishes (eba, iyan, semo), everyday family meals, high-fiber porridges, traditional stews, and cultural ceremonies.',
    wholesaleAvailability:
      'Available for wholesale and independent retail distribution. Batch sizes and custom pallet orders can be confirmed via direct enquiry.',
    imageTag: 'grains'
  },
  {
    id: 'spices-seasonings',
    name: 'Traditional Spices & Seasonings',
    shortDescription:
      'Authentic herbs, seasonings, and condiments that deliver genuine African flavors to every meal.',
    longDescription:
      'Delivering the unmistakable aromatic depth, warmth, and complexity of traditional African culinary traditions. Sourced from indigenous spice cultivators, our selection includes hand-picked seeds, smoked dried chillies, regional barks, and heritage seasoning blends that define beloved West, East, and Central African cuisine.',
    highlightItems: [
      'Knorr Beef & Maggi Star Seasoning Cubes',
      'Gino Seasonings (Asun, Curry, Thyme, Crayfish, Hot Pepper)',
      'Lassour Range (Pepper Soup, Fried Rice, Fish Seasonings)',
      'Party Jollof Seasoning & Traditional Pepper Soup Mix',
      'Spicity & Spicity Derica All-Purpose Blends'
    ],
    culinaryUsage:
      'Essential for authentic Nigerian Jollof, Egusi soup, Pepper soup, Suya marinades, grilled meats, and slow-simmered stews.',
    wholesaleAvailability:
      'Packaged in food-grade airtight catering packs and retail-ready pouches for supermarket and deli shelves.',
    imageTag: 'spices'
  },
  {
    id: 'specialty-packaged-goods',
    name: 'Specialty Packaged Goods',
    shortDescription:
      'Curated grocery items and packaged food products intended for wholesale and retail distribution within the UK.',
    longDescription:
      'Curated packaged goods selected to meet the demanding standards of UK independent grocers, specialty ethnic supermarkets, and institutional foodservice providers. Each packaged product is vetted for ingredient authenticity, tamper-evident packaging integrity, and clear labeling for UK commerce.',
    highlightItems: [
      'Derica Concentrated Tomato Paste Tins',
      'Roasted Peanuts (Large Plastic Bottles & Glass Jars)',
      'Ghana Must Go Bags (Thick Heavy-Duty Polypropylene)',
      'African Formula Coca-Cola (Cane Sugar)',
      'MG Canned Malt Beverage (Malta / Maltina)'
    ],
    culinaryUsage:
      'Convenient, shelf-stable ingredients designed for quick home preparation, commercial restaurants, and retail grocery resale.',
    wholesaleAvailability:
      'Offered in wholesale case packs with competitive volume trade tiers for UK retailers and regional distributors.',
    imageTag: 'packaged'
  }
];

export const DISTRIBUTION_STEPS = [
  {
    step: '01',
    title: 'Source',
    summary: 'Direct Producer Relationships',
    description:
      'We work directly with trusted producers, farmers, and food processors across key agricultural zones in Africa, ensuring authentic origins, fair trade partnerships, and high harvest standards.'
  },
  {
    step: '02',
    title: 'Import',
    summary: 'UK Importation Operations',
    description:
      'We handle the importation process into the United Kingdom, coordinating regulatory compliance, border transit, and secure customs arrival through authorized UK ports of entry.'
  },
  {
    step: '03',
    title: 'Redistribute',
    summary: 'Nationwide Connecting Network',
    description:
      'Operating from our Kingston upon Hull hub, we organize streamlined redistribution to supermarkets, ethnic food stores, independent retailers, and foodservice clients across the UK.'
  },
  {
    step: '04',
    title: 'Build Partnerships',
    summary: 'Collaborative Growth',
    description:
      'We establish long-term commercial relationships with wholesale buyers, retailers, and African agricultural producers to scale sustainable access to authentic African foods.'
  }
];

export const PARTNERSHIP_PATHS: PartnershipPath[] = [
  {
    id: 'retailers',
    title: 'Independent Grocers & Supermarkets',
    audience: 'UK Retailers & Ethnic Food Outlets',
    description:
      'Enhance your store shelves with authentic African staples, high-demand spices, and specialty packaged groceries your customers trust. We provide dependable delivery schedules and transparent trade terms.',
    requirements: [
      'Regular wholesale replenishment',
      'Clean retail-ready packaging and clear labelling',
      'Flexible minimum order quantities (MOQ)',
      'Dedicated account support'
    ],
    ctaText: 'Enquire for Retail Supply',
    enquiryType: 'Retail Partnership'
  },
  {
    id: 'wholesalers',
    title: 'Wholesale Buyers & Food Distributors',
    audience: 'Regional UK Wholesalers & Cash-and-Carries',
    description:
      'Partner with Richminds for pallet-level and multi-category wholesale distribution. We bridge the gap between African agricultural harvests and UK regional supply channels.',
    requirements: [
      'Pallet and multi-case volume pricing',
      'Reliable container-arrival planning',
      'Consistent product specifications and quality checks',
      'Consolidated freight options'
    ],
    ctaText: 'Discuss Wholesale Volumes',
    enquiryType: 'Wholesale Enquiry'
  },
  {
    id: 'producers',
    title: 'African Food Producers & Farmers',
    audience: 'Growers, Cooperatives & Food Processors in Africa',
    description:
      'Expand your export market into the United Kingdom. Richminds provides a professional, respectful gateway for African farmers and agricultural processors seeking direct access to UK buyers.',
    requirements: [
      'Direct, fair commercial partnerships',
      'Guidance on UK import standards and packaging',
      'Sustainable volume commitments',
      'Long-term relationship building'
    ],
    ctaText: 'Partner as a Supplier',
    enquiryType: 'Supplier Partnership'
  },
  {
    id: 'foodservice',
    title: 'Commercial Caterers & Restaurants',
    audience: 'African Restaurants, Event Caterers & Hospitality',
    description:
      'Secure consistent bulk supplies of authentic African spices, grains, and specialty flours essential for high-volume commercial catering and restaurant service across the UK.',
    requirements: [
      'Bulk catering pack availability',
      'Predictable stock continuity for menu planning',
      'Fast enquiry response time',
      'Convenient dispatch'
    ],
    ctaText: 'Enquire for Foodservice',
    enquiryType: 'Product Enquiry'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Authentic African Sourcing',
    description:
      'Genuine origin matters. We prioritize authentic varieties grown in traditional agricultural regions across Africa, preserving true cultural recipes and flavor.'
  },
  {
    title: 'Direct Producer Relationships',
    description:
      'By working directly with trusted farmers, cooperatives, and processors, we cut out unnecessary middlemen and ensure fair value for African producers.'
  },
  {
    title: 'Quality-Focused Importation',
    description:
      'Every product is evaluated for clean processing, proper moisture content, tamper-resistant packaging, and full compliance with UK standards.'
  },
  {
    title: 'Hull-Based Redistribution',
    description:
      'Strategically based in Kingston upon Hull, our logistics network provides an agile launchpad for distribution across northern, central, and nationwide UK markets.'
  },
  {
    title: 'Wholesale & Retail Collaboration',
    description:
      'Whether you run a community grocery store or manage multi-branch food retail, we offer flexible trade models tailored to your business scale.'
  },
  {
    title: 'Cultural Heritage & Trust',
    description:
      'Food is identity. Our purpose is to keep diaspora communities connected to home while inviting broader UK food lovers to discover Africa’s culinary richness.'
  }
];

export const IMPORTED_PRODUCTS: ProductItem[] = [
  // --- AUTHENTIC GRAINS & STAPLES ---
  {
    id: 'ijebu-garri-20kg',
    name: 'Ijebu Garri',
    category: 'Authentic Grains & Staples',
    sizeOrPackaging: '20kg Wholesale Bag',
    description: 'Authentic premium sour, crisp, and fine-grain cassava Ijebu garri. Perfect for drinking with cold water and groundnuts or preparing traditional eba.',
    tags: ['ijebu garri', 'garri', 'cassava', 'swallow', 'eba', '20kg', 'staple', 'grain']
  },
  {
    id: 'ayoola-poundo-yam-1-8kg',
    name: 'Ayoola Poundo Yam',
    category: 'Authentic Grains & Staples',
    sizeOrPackaging: '1.8kg Retail Pack',
    description: 'Premier brand of dehydrated yam flour for preparing smooth, authentic, lump-free pounded yam (iyan) in minutes.',
    tags: ['ayoola', 'poundo yam', 'pounded yam', 'iyan', 'yam flour', '1.8kg', 'swallow']
  },
  {
    id: 'semovita-gp-2kg',
    name: 'Golden Penny Semovita (GP)',
    category: 'Authentic Grains & Staples',
    sizeOrPackaging: '2kg Pack',
    description: 'Premium quality fortified wheat semolina swallow with smooth texture and elasticity, suitable for all traditional African soups.',
    tags: ['semovita', 'gp', 'golden penny', 'semo', 'wheat semolina', '2kg', 'swallow']
  },
  {
    id: 'grandiose-pap-white',
    name: 'Grandiose Pap (White)',
    category: 'Authentic Grains & Staples',
    sizeOrPackaging: 'Preserved Fresh Pack',
    description: 'Traditional fermented white corn pudding (ogi / akamu), smooth breakfast staple rich in comforting heritage flavor.',
    tags: ['grandiose pap', 'grandiose pap white', 'white pap', 'ogi', 'akamu', 'corn porridge', 'breakfast']
  },
  {
    id: 'yellow-pap',
    name: 'Traditional Yellow Pap',
    category: 'Authentic Grains & Staples',
    sizeOrPackaging: 'Preserved Fresh Pack',
    description: 'Naturally fermented yellow maize pap (ogi / akamu), wholesome breakfast favorite traditionally paired with akara, moin moin, or evaporated milk.',
    tags: ['yellow pap', 'pap', 'ogi', 'akamu', 'yellow maize', 'corn', 'breakfast']
  },
  {
    id: 'grinded-egusi-20kg',
    name: 'Grinded Egusi (Melon Seeds)',
    category: 'Authentic Grains & Staples',
    sizeOrPackaging: '20kg Wholesale Bag',
    description: 'Finely milled premium African melon seeds (egusi) ready for commercial kitchens, catering, and preparation of authentic Egusi soup.',
    tags: ['grinded egusi', 'egusi', 'melon seeds', 'egusi soup', '20kg', 'catering', 'bulk']
  },

  // --- TRADITIONAL SPICES & SEASONINGS ---
  {
    id: 'knoor-beef',
    name: 'Knorr Beef Seasoning Cubes',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Catering / Retail Pack',
    description: 'Rich, savory beef bouillon seasoning cubes providing deep umami flavor and color to Nigerian stews, jollof, and soups.',
    tags: ['knoor beef', 'knoor', 'knorr', 'beef cubes', 'bouillon', 'seasoning', 'cubes']
  },
  {
    id: 'maggi-star',
    name: 'Maggi Star Seasoning Cubes',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Classic Pack',
    description: 'The classic West African seasoning star cubes, delivering essential savory depth and aromatic heritage to everyday cooking.',
    tags: ['maggi star', 'maggi', 'star cubes', 'seasoning', 'bouillon', 'soup spice']
  },
  {
    id: 'pepper-soup-mix',
    name: 'Traditional Pepper Soup Mix',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Seasoning Blend Pouch',
    description: 'Authentic aromatic spice blend including uda (grains of selim), ehuru (calabash nutmeg), and native herbs for hot pepper soup broth.',
    tags: ['pepper soup mix', 'pepper soup', 'spices', 'uda', 'ehuru', 'aromatic blend']
  },
  {
    id: 'lassour-pepper-soup',
    name: 'Lassour Pepper Soup Seasoning',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Specialty Pack',
    description: 'Lassour brand dedicated pepper soup seasoning with aromatic spices and intense warming heat for meat, goat, or fish pepper soup.',
    tags: ['lassour pepper soup', 'lassour', 'pepper soup', 'spices', 'seasoning']
  },
  {
    id: 'lassour-fried-rice',
    name: 'Lassour Fried Rice Seasoning',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Specialty Pack',
    description: 'Specialized spice and herb mix formulated to give Nigerian fried rice its iconic savoury aroma, signature golden color, and herbal notes.',
    tags: ['lassour fried rice', 'lassour', 'fried rice', 'rice seasoning', 'curry thyme blend']
  },
  {
    id: 'lassour-fish',
    name: 'Lassour Fish Seasoning',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Specialty Pack',
    description: 'Specially formulated seasoning blend for fresh and smoked fish, enhancing natural seafood sweetness and eliminating raw odors.',
    tags: ['lassour fish', 'lassour', 'fish seasoning', 'seafood seasoning', 'spices']
  },
  {
    id: 'hot-pepper',
    name: 'Ground African Hot Pepper',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Dry Spice Pouch',
    description: 'Sun-dried, finely milled fiery red chilli pepper (ata gbigbe) delivering intense authentic African heat to stews, sauces, and marinades.',
    tags: ['hot pepper', 'pepper', 'chilli', 'dry pepper', 'ata gbigbe', 'spicy']
  },
  {
    id: 'party-jollof',
    name: 'Party Jollof Seasoning Blend',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Specialty Blend Pack',
    description: 'Celebrated spice blend created to replicate the authentic smoky firewood party jollof flavor in commercial and domestic cooking.',
    tags: ['party jollof', 'jollof', 'smoky jollof', 'rice seasoning', 'party rice']
  },
  {
    id: 'spicity',
    name: 'Spicity All-Purpose Seasoning',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Retail Pouch',
    description: 'Versatile and bold African seasoning blend packed with zesty herbs and spices for seasoning chicken, beef, fish, and rich stews.',
    tags: ['spicity', 'all-purpose seasoning', 'spices', 'marinade', 'rub']
  },
  {
    id: 'spicity-derica',
    name: 'Spicity Derica Seasoning',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Derica Bulk Format',
    description: 'High-volume derica-sized pack of Spicity seasoning, tailored for commercial caterers, bulk food prep, and busy African kitchens.',
    tags: ['spicity derica', 'spicity', 'derica', 'bulk spices', 'catering size']
  },
  {
    id: 'gino-pepper',
    name: 'Gino Pepper Seasoning',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Retail Pack',
    description: 'Gino brand finely balanced pepper seasoning, delivering smooth consistent heat and flavor to everyday sauces and gravies.',
    tags: ['gino pepper', 'gino', 'pepper', 'seasoning', 'spices']
  },
  {
    id: 'gino-curry',
    name: 'Gino Curry Powder',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Aroma Pouch / Tin',
    description: 'Bright golden, highly aromatic African curry powder crafted to infuse distinct warming flavor into jollof rice, curries, and meat marinades.',
    tags: ['gino curry', 'gino', 'curry powder', 'curry', 'aromatic spices']
  },
  {
    id: 'gino-thyme',
    name: 'Gino Dried Thyme',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Retail Pouch',
    description: 'Pure dried and rubbed fragrant thyme leaves, an essential aromatic cornerstone for authentic Nigerian rice dishes and beef broths.',
    tags: ['gino thyme', 'gino', 'thyme', 'dried thyme', 'herbs', 'seasoning']
  },
  {
    id: 'gino-crayfish',
    name: 'Gino Crayfish Seasoning',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Retail Pouch',
    description: 'Intense authentic crayfish seasoning powder capturing the concentrated umami and rich coastal seafood aroma essential for traditional soups.',
    tags: ['gino crayfish', 'gino', 'crayfish', 'dried crayfish', 'seafood seasoning', 'egusi']
  },
  {
    id: 'gino-asun',
    name: 'Gino Asun Seasoning',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Specialty Blend Pack',
    description: 'Spicy and smoky seasoning formulation created specifically for authentic Nigerian peppered roast goat meat (Asun).',
    tags: ['gino asun', 'gino', 'asun', 'goat meat', 'peppered meat', 'bbq', 'spicy']
  },
  {
    id: 'gino-hot-pepper',
    name: 'Gino Hot Pepper',
    category: 'Traditional Spices & Seasonings',
    sizeOrPackaging: 'Extra Fiery Pack',
    description: 'Concentrated extra-hot milled pepper blend from Gino, providing rapid intense heat to pepper soups, stews, and roasted meats.',
    tags: ['gino hot pepper', 'gino', 'hot pepper', 'extra hot', 'chilli', 'spices']
  },

  // --- SPECIALTY PACKAGED GOODS ---
  {
    id: 'peanut-plastic-bottle-big',
    name: 'Roasted Peanuts (Big Plastic Bottle)',
    category: 'Specialty Packaged Goods',
    sizeOrPackaging: 'Big Plastic Bottle',
    description: 'Crunchy golden-roasted African groundnuts (epa) packed in an airtight large plastic container to preserve peak crispness. Classic garri accompaniment.',
    tags: ['peanut plastic bottle big', 'peanut', 'groundnut', 'epa', 'roasted peanuts', 'plastic bottle', 'snack']
  },
  {
    id: 'peanut-glass',
    name: 'Roasted Peanuts (Glass Jar)',
    category: 'Specialty Packaged Goods',
    sizeOrPackaging: 'Sealed Glass Jar',
    description: 'Selected premium slow-roasted African groundnuts hermetically sealed in a quality glass jar for superior shelf life and premium retail display.',
    tags: ['peanut glass', 'peanut', 'groundnut', 'glass jar', 'roasted peanuts', 'snack']
  },
  {
    id: 'derica-tomatoes',
    name: 'Derica Tomato Paste',
    category: 'Specialty Packaged Goods',
    sizeOrPackaging: 'Derica Tin Format',
    description: 'Thick, rich double-concentrated African tomato puree tin, the essential base ingredient for authentic Nigerian jollof rice and rich tomato stew.',
    tags: ['derica tomatoes', 'derica', 'tomatoes', 'tomato paste', 'tomato puree', 'tin', 'jollof base']
  },
  {
    id: 'cocacola',
    name: 'African Formula Coca-Cola',
    category: 'Specialty Packaged Goods',
    sizeOrPackaging: 'Bottle / Canned',
    description: 'Authentic imported African Coca-Cola prepared with pure cane sugar, offering the crisp original taste cherished by diaspora consumers.',
    tags: ['cocacola', 'coca cola', 'coke', 'soft drink', 'beverage', 'cane sugar']
  },
  {
    id: 'mg-can',
    name: 'MG Canned Beverage (Malta / Maltina)',
    category: 'Specialty Packaged Goods',
    sizeOrPackaging: '330ml Can Pack',
    description: 'Rich, nourishing non-alcoholic African malt drink in convenient cans, packed with B-vitamins and natural malt refreshment.',
    tags: ['mg can', 'mg', 'malta guinness', 'maltina', 'malt', 'malt drink', 'canned beverage']
  },
  {
    id: 'ghana-must-go-bag-thick',
    name: 'Ghana Must Go Bag (Thick Heavy-Duty)',
    category: 'Specialty Packaged Goods',
    sizeOrPackaging: 'Thick / Heavy Duty Large',
    description: 'Heavy-gauge reinforced checkered woven travel and food distribution bag. Renowned for incredible tear resistance, waterproof durability, and large volume capacity.',
    tags: ['ghana must go bag', 'ghana must go bag (thick)', 'ghana must go', 'bag', 'storage bag', 'carrier', 'wholesale packaging']
  }
];

