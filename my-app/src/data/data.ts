import banana from "../imgs/banana.jpg";
import book from "../imgs/book.jpg";
import computer from "../imgs/computer.jpg";
import dress from "../imgs/dress.jpg";
import womenClothing from "../imgs/women-clothing.jpg";
import { Products } from "./DataType";

export const Data: Products[] = [
  {
    id: 10,
    title: "Banana",
    price: 1.3,
    category: "Food",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: banana,
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 20,
    title: "Book",
    price: 22.3,
    category: "Books",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: book,
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 30,
    title: "Computer",
    price: 2200.3,
    category: "Electronics",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: computer,
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 40,
    title: "Kids Clothing",
    price: 220.3,
    category: "Clothing",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: dress,
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 50,
    title: "Women's Clothing",
    price: 220.3,
    category: "Clothing",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: womenClothing,
    rating: { rate: 4.1, count: 259 },
  },
];
