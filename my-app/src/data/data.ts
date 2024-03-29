import banana from "../imgs/banana.jpg";
import book from "../imgs/book.jpg";
import computer from "../imgs/computer.jpg";
import dress from "../imgs/dress.jpg";
import womenClothing from "../imgs/women-clothing.jpg";
import { ProductType } from "./DataType";

export const Data: ProductType[] = [
  {
    id: 10,
    title: "Banana",
    purchasePrice: 1.3,
    category: "Food",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: banana,
    rating: { salesPrice: 4.1, quantity: 259 },
  },
  {
    id: 20,
    title: "Book",
    purchasePrice: 22.3,
    category: "Books",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: book,
    rating: { salesPrice: 4.1, quantity: 259 },
  },
  {
    id: 30,
    title: "Computer",
    purchasePrice: 2200.3,
    category: "Electronics",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: computer,
    rating: { salesPrice: 4.1, quantity: 259 },
  },
  {
    id: 40,
    title: "Kids Clothing",
    purchasePrice: 220.3,
    category: "Clothing",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: dress,
    rating: { salesPrice: 4.1, quantity: 259 },
  },
  {
    id: 50,
    title: "Women's Clothing",
    purchasePrice: 220.3,
    category: "Clothing",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: womenClothing,
    rating: { salesPrice: 4.1, quantity: 259 },
  },
];
