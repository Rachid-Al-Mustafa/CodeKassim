
export interface AddToCartButtonProps {
    disabled?: boolean;
    onClick?: () => void;
  }
  
  export interface ProductPostProps {
    _id?:string,
    name?: string;
    description?: string;
    price?: number;
    currency?: string;
    category?: string;
    imageUrl?: string;
    isAvailable?: boolean;
    onAddToCart?: () => void;
  }
  
  export interface ProductData {
    _id?:string,
    name: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    imageUrl?: string;
    isAvailable: boolean;
  }
  
  export interface ProductPostProps {
    _id?:string;
    name?: string;
    description?: string;
    price?: number;
    currency?: string;
    category?: string;
    imageUrl?: string;
    isAvailable?: boolean;
    onAddToCart?: () => void;
  }
  
  export interface ProductData {
    _id?:string,
    name: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    imageUrl?: string;
    isAvailable: boolean;
  }