export interface JewelProduct {
  id: string;
  name: string;
  subtitle: string;
  category: 'necklaces' | 'rings' | 'earrings' | 'bracelets';
  price: number;
  originalPrice?: number;
  image: string;
  metalOptions: string[];
  stone: string;
  description: string;
  story: string;
  dimensions: string;
  edition: string;
  sizes?: string[];
  hallmark: string;
  inStock: boolean;
  featured?: boolean;
  rating: number;
  reviewCount: number;
  tags?: string[];
}

export interface CartItem {
  cartItemId: string;
  product: JewelProduct;
  quantity: number;
  selectedMetal: string;
  selectedSize?: string;
  customInscription?: string;
}

export interface BespokeInquiry {
  jewelType: string;
  metalPreference: string;
  stonePreference: string;
  budgetRange: string;
  timeline: string;
  story: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
}
