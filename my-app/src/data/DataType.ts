export type Products = {
  id: number;
  title: string;
  purchasePrice: number;
  description: string;
  category: string;
  image: string;
  rating: { salesPrice: number; quantity: number };
};
