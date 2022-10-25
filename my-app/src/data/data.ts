import { Products } from "../API/api";
import banana from "../imgs/banana.jpg";
import book from "../imgs/book.jpg";
import computer from "../imgs/computer.jpg";

export const data: Products[] = [
  {
    id: 1,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: banana,
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 2,
    title: "Womens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "women's clothing",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: book,
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
    image: computer,
    rating: { rate: 4.1, count: 259 },
  },
];
