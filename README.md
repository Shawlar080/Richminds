# Richminds International Limited — Official Website

Official corporate website and trade portal for **Richminds International Limited**, an African food importation and redistribution company based in Kingston upon Hull, United Kingdom.

---

## 1. Company Overview

- **Company Name:** Richminds International Limited
- **Tagline:** Authentic African Foods
- **Business Type:** African Food Import & Redistribution
- **Headquarters Address:**
  Apartment 8 Charterhouse School  
  55 Wincolmlee Street  
  Hull, HU2 8AG  
  United Kingdom  
- **Direct Telephone 1:** `07435977209`
- **Direct Telephone 2:** `+44 7424 276619`
- **Official Contact Email:** `admin@richmindsinternational.com.ng`
- **Mission:** To celebrate cultural heritage through food, ensuring that diaspora communities and lovers of African cuisine alike can enjoy the genuine tastes and staples of home.
- **Vision:** *"To become the leading and most trusted bridge for authentic African food distribution in the United Kingdom, recognized for our unwavering commitment to quality, cultural preservation, and seamless supply chain excellence."*

---

## 2. Core Food Sourcing Categories & Verified Imported Lines

### Authentic Grains & Staples
- **Ijebu Garri** (20kg Wholesale Bag)
- **Ayoola Poundo Yam** (1.8kg Pack)
- **Golden Penny Semovita (GP)** (2kg Pack)
- **Grandiose Pap White** (Preserved Fresh Pack)
- **Traditional Yellow Pap** (Preserved Fresh Pack)
- **Grinded Egusi** (20kg Wholesale Bag)

### Traditional Spices & Seasonings
- **Knorr Beef Seasoning Cubes**
- **Maggi Star Seasoning Cubes**
- **Traditional Pepper Soup Mix**
- **Lassour Pepper Soup Seasoning**
- **Lassour Fried Rice Seasoning**
- **Lassour Fish Seasoning**
- **Ground African Hot Pepper**
- **Party Jollof Seasoning Blend**
- **Spicity All-Purpose Seasoning**
- **Spicity Derica Seasoning**
- **Gino Pepper Seasoning**
- **Gino Curry Powder**
- **Gino Dried Thyme**
- **Gino Crayfish Seasoning**
- **Gino Asun Seasoning**
- **Gino Hot Pepper**

### Specialty Packaged Goods
- **Roasted Peanuts** (Large Plastic Bottle)
- **Roasted Peanuts** (Glass Jar)
- **Derica Tomato Paste** (Derica Tin Format)
- **African Formula Coca-Cola** (Cane Sugar)
- **MG Canned Beverage** (Malta Guinness / Maltina)
- **Ghana Must Go Bag** (Thick Heavy-Duty Polypropylene)

---

## 3. Technology Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Lucide React
- **Backend:** Node.js Express server (`server.ts`) with Vite dev middleware
- **Transactional Email:** Resend API integration (`POST /api/enquiries`)
- **Security & Spam Protection:** Honeypot field, in-memory IP rate limiting, server-side payload validation, UK GDPR consent verification.

---

## 4. Configuration & Email Setup

To enable automated email delivery to the business inbox when a visitor submits an enquiry:

1. Create or obtain a free API key from [Resend](https://resend.com).
2. Set the following environment variables in your `.env` file (or cloud hosting dashboard):

```bash
# Recipient email address where customer/B2B enquiries will be sent
CONTACT_EMAIL="director@richminds.co.uk"

# Your Resend transactional API key
RESEND_API_KEY="re_1234567890abcdef..."

# Verified sender address configured in your Resend account
# (For testing, you may use 'onboarding@resend.dev')
CONTACT_FROM_EMAIL="enquiries@richminds.co.uk"
```

> **Note on Missing Configuration:**  
> If `RESEND_API_KEY` or `CONTACT_EMAIL` are not yet set, the server does **not** falsely claim delivery. Instead, it returns a clear configuration notice instructing the visitor to call the business directly at `07435977209` or `+44 7424 276619`, safeguarding business inquiries.

---

## 5. Adding New Products or Modifying Data

All business content, categories, and partnership details are organized in a clean configuration structure:

- Edit `src/data/company.ts` to add new product categories, specific SKUs, trade specifications, or update phone numbers and address.
- When new SKU-level items are confirmed, update `PRODUCT_CATEGORIES` with item names, packaging sizes, and availability status.

---

## 6. Running the Application

### Development
```bash
npm run dev
```
Starts the full-stack server on `http://localhost:3000`.

### Type Checking & Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
npm start
```

---

## 7. Deploying to Vercel

The repository is pre-configured for one-click Vercel deployments:

1. **Automatic Dependency Resolution:**
   - An `.npmrc` file is included in the project root with `legacy-peer-deps=true`.
   - A `vercel.json` configuration is included specifying `installCommand: "npm install --legacy-peer-deps"`.
   - This resolves the npm upstream dependency conflict automatically during Vercel's build step.

2. **Serverless API Routes:**
   - The `/api/enquiries` and `/api/health` endpoints are set up in `/api/*.ts` as Vercel Serverless Functions.

3. **Vercel Project Settings (Optional Environment Variables):**
   - In your Vercel Dashboard -> **Settings** -> **Environment Variables**, you can add:
     - `CONTACT_EMAIL`: `admin@richmindsinternational.com.ng`
     - `RESEND_API_KEY`: *(Your Resend API Key if using live transactional email)*
     - `CONTACT_FROM_EMAIL`: `onboarding@resend.dev` (or your verified domain)

