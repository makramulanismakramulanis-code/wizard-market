export interface Product {
  id: string;
  name: string;
  category: string;
  priceCad: number;
  rating: number;
  reviewCount: number;
  image: string;
  shortDescription: string;
  longDescription: string;
  inStock: boolean;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemsCount: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  quote: string;
  date: string;
}

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
}
