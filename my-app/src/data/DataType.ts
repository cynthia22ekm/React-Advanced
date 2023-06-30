export type ProductType = {
  id: number;
  title: string;
  purchasePrice: number;
  description: string;
  category: string;
  image: string;
  rating: { salesPrice: number; quantity: number };
};

export type ContactType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

export type APIProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};
