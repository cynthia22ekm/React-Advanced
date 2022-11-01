import { Column } from "react-table";
import { Products } from "../../../API/api";

export const columns: Column<Products>[] = [
  {
    accessor: "category",
    Header: "Category",
    Footer: "Category",
  },
  {
    accessor: "id",
    Header: "Id",
    Footer: "Id",
  },
  {
    accessor: "image",
    Header: "Image",
    Footer: "Image",
  },
  {
    accessor: "price",
    Header: "Price",
    Footer: "Price",
  },
  {
    accessor: "title",
    Header: "Title",
    Footer: "Title",
  },
];
