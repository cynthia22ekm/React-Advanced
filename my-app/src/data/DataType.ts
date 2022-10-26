export type ItemCategory =
  | "Food"
  | "Books"
  | "Clothing"
  | "Electronics"
  | "Home";

export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ItemCategory;
  image: string;
  rating: { rate: number; count: number };
};
