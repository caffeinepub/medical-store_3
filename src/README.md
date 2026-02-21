# MediCare Plus - Medical Store Website

A professional medical store website built with React, TypeScript, and the Internet Computer Protocol (ICP). Browse medical products, view details, and contact the store.

## Features

### 🏠 Homepage
- Professional hero section with medical store branding
- Product categories showcase (Prescription Drugs, Over-the-Counter, Medical Equipment, Wellness Products)
- Featured products display
- Key features highlight (Licensed Pharmacists, Quality Assurance, Fast Delivery)
- Contact information footer

### 🛒 Products Catalog
- Browse all available medical products
- Search products by name or description
- Filter products by category
- Product cards with images, descriptions, prices, and stock status
- Responsive grid layout

### 📦 Product Details
- Comprehensive product information
- Large product images
- Detailed descriptions
- Price and availability status
- Trust indicators (Quality Assured, Fast Delivery)
- Related product information

### 📞 Contact Page
- Store address and location
- Phone numbers and email
- Business hours
- Contact form for inquiries
- Emergency notice

### 👨‍💼 Admin Panel (Hidden)
- Initialize the store with 20 sample products
- Progress tracking during initialization
- Categories: Prescription Drugs, Over-the-Counter, Medical Equipment, Wellness Products

## Setup & Initialization

### First Time Setup

1. **Start the application**
   The application will deploy automatically.

2. **Initialize Sample Products**
   Navigate to `/admin` in your browser to access the admin panel.
   Click "Initialize Sample Products" to add 20 pre-configured products to your store.

3. **Browse Products**
   Once initialized, navigate to the Products page to see the complete catalog.

## Design System

### Color Palette
- **Primary (Teal)**: Medical trust and professionalism
- **Accent (Coral)**: Care and vitality
- **Success (Green)**: In-stock indicators
- **Warning (Amber)**: Alerts and notices

### Typography
- **Headings**: Crimson Text (serif) - warm and professional
- **Body**: Work Sans (sans-serif) - clean and readable

### Key Design Principles
- Clean, spacious layouts with generous white space
- Subtle animations and transitions for polish
- Professional medical aesthetic with approachable warmth
- Fully responsive for mobile and desktop

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: TanStack Router
- **State Management**: TanStack React Query
- **Backend**: Motoko (Internet Computer)
- **Fonts**: Google Fonts (Crimson Text, Work Sans)

## Project Structure

```
src/frontend/src/
├── pages/
│   ├── HomePage.tsx          # Landing page
│   ├── ProductsPage.tsx      # Product catalog with filters
│   ├── ProductDetailPage.tsx # Individual product details
│   ├── ContactPage.tsx       # Contact information and form
│   └── AdminPage.tsx         # Admin initialization panel
├── hooks/
│   └── useQueries.ts         # React Query hooks for backend
├── utils/
│   └── sampleData.ts         # Sample product data
├── components/ui/            # shadcn/ui components (read-only)
└── App.tsx                   # Router and layout

src/backend/
└── main.mo                   # Motoko backend canister
```

## Backend API

### Query Methods (Read-only, Fast)
- `getAllProducts()` - Get all products
- `getProductById(id)` - Get product by ID
- `getProductsByCategory(category)` - Filter products by category
- `getAllCategories()` - Get unique categories

### Update Methods (State-changing)
- `addProduct(...)` - Add new product
- `updateProduct(...)` - Update existing product
- `deleteProduct(id)` - Remove product

## Usage Tips

1. **Initial Product Setup**: Use the admin panel at `/admin` to initialize sample products
2. **Category Filtering**: Use the dropdown on the Products page to filter by category
3. **Search**: Type in the search bar to find products by name or description
4. **Product Details**: Click any product card to view full details
5. **Contact Form**: Submit inquiries through the contact page

## Development

### Running Locally
The application is automatically deployed on Caffeine. Changes to the code will trigger a rebuild.

### Adding Custom Products
After initialization, you can modify the backend to add your own products through the `addProduct` API or by modifying `sampleData.ts`.

### Customizing Design
- Edit `/src/frontend/index.css` for color tokens
- Modify `/src/frontend/tailwind.config.js` for Tailwind customization
- Update component styles using Tailwind classes

## Notes

- All products include placeholder images from Unsplash
- The contact form is a demonstration - integrate with your email service for production
- Admin panel is accessible at `/admin` (consider adding authentication for production use)
- Sample data includes 20 products across 4 categories

## Support

For questions or support, please use the contact form or reach out through the store's contact information.

---

**Built with ❤️ using [caffeine.ai](https://caffeine.ai)**
