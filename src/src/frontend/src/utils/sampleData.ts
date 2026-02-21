/**
 * Sample product data for MediCare Plus medical store
 * This data can be used to populate the backend with initial products
 */

export const SAMPLE_PRODUCTS = [
  // Prescription Drugs
  {
    name: "Amoxicillin 500mg",
    description: "Antibiotic medication used to treat bacterial infections. Take as prescribed by your physician.",
    category: "Prescription Drugs",
    price: 24.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
  },
  {
    name: "Lisinopril 10mg",
    description: "ACE inhibitor for high blood pressure management. Requires prescription.",
    category: "Prescription Drugs",
    price: 32.50,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
  },
  {
    name: "Metformin 850mg",
    description: "Oral diabetes medication to control blood sugar levels. Extended-release formula.",
    category: "Prescription Drugs",
    price: 28.75,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1550572017-4396dd2eef57?w=400&h=400&fit=crop",
  },
  {
    name: "Omeprazole 20mg",
    description: "Proton pump inhibitor for acid reflux and GERD treatment.",
    category: "Prescription Drugs",
    price: 19.99,
    inStock: false,
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
  },

  // Over-the-Counter
  {
    name: "Ibuprofen 200mg",
    description: "Fast-acting pain reliever and fever reducer. 100 tablets per bottle.",
    category: "Over-the-Counter",
    price: 12.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
  },
  {
    name: "Acetaminophen Extra Strength",
    description: "500mg pain relief tablets. Effective for headaches, muscle aches, and fever.",
    category: "Over-the-Counter",
    price: 9.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
  },
  {
    name: "Allergy Relief 24hr",
    description: "Non-drowsy antihistamine for seasonal allergies. 30 tablets.",
    category: "Over-the-Counter",
    price: 16.50,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1550572017-4396dd2eef57?w=400&h=400&fit=crop",
  },
  {
    name: "Cough Syrup DM",
    description: "Dextromethorphan-based cough suppressant. Grape flavor, 8oz bottle.",
    category: "Over-the-Counter",
    price: 11.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
  },
  {
    name: "Antacid Tablets",
    description: "Fast relief from heartburn and indigestion. Assorted flavors, 72 tablets.",
    category: "Over-the-Counter",
    price: 8.49,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
  },

  // Medical Equipment
  {
    name: "Digital Blood Pressure Monitor",
    description: "Automatic upper arm blood pressure monitor with large LCD display. Includes carry case.",
    category: "Medical Equipment",
    price: 54.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=400&fit=crop",
  },
  {
    name: "Infrared Thermometer",
    description: "Contactless forehead thermometer with instant readings. Medical-grade accuracy.",
    category: "Medical Equipment",
    price: 39.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=400&fit=crop",
  },
  {
    name: "Pulse Oximeter",
    description: "Fingertip pulse oximeter for oxygen saturation and heart rate monitoring.",
    category: "Medical Equipment",
    price: 29.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
  },
  {
    name: "Glucose Meter Kit",
    description: "Complete blood glucose monitoring system with 50 test strips and lancets.",
    category: "Medical Equipment",
    price: 45.00,
    inStock: false,
    imageUrl: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop",
  },
  {
    name: "Nebulizer Machine",
    description: "Compact medical-grade nebulizer for respiratory treatment. Includes accessories.",
    category: "Medical Equipment",
    price: 89.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400&h=400&fit=crop",
  },

  // Wellness Products
  {
    name: "Multivitamin Complex",
    description: "Complete daily multivitamin with essential nutrients. 120 capsules.",
    category: "Wellness Products",
    price: 22.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1550572017-4396dd2eef57?w=400&h=400&fit=crop",
  },
  {
    name: "Omega-3 Fish Oil 1000mg",
    description: "Heart and brain health supplement. 180 softgels, mercury-free.",
    category: "Wellness Products",
    price: 26.50,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
  },
  {
    name: "Vitamin D3 5000 IU",
    description: "High-potency vitamin D for bone and immune support. 90 softgels.",
    category: "Wellness Products",
    price: 15.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
  },
  {
    name: "Probiotic 50 Billion CFU",
    description: "Advanced digestive health formula with 10 probiotic strains. 60 capsules.",
    category: "Wellness Products",
    price: 34.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
  },
  {
    name: "Calcium + Magnesium + Zinc",
    description: "Bone health mineral complex. Easy-to-swallow tablets, 100 count.",
    category: "Wellness Products",
    price: 18.75,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1550572017-4396dd2eef57?w=400&h=400&fit=crop",
  },
  {
    name: "Melatonin 5mg",
    description: "Natural sleep support supplement. Non-habit forming, 90 tablets.",
    category: "Wellness Products",
    price: 12.99,
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
  },
];

/**
 * Helper function to initialize products in the backend
 * Call this function once when the application first loads
 */
export async function initializeSampleProducts(addProductFn: (
  name: string,
  description: string,
  category: string,
  price: number,
  inStock: boolean,
  imageUrl: string
) => Promise<bigint>) {
  console.log("Initializing sample products...");
  
  for (const product of SAMPLE_PRODUCTS) {
    try {
      await addProductFn(
        product.name,
        product.description,
        product.category,
        product.price,
        product.inStock,
        product.imageUrl
      );
      console.log(`Added: ${product.name}`);
    } catch (error) {
      console.error(`Failed to add ${product.name}:`, error);
    }
  }
  
  console.log("Sample products initialization complete!");
}
