import { Column } from "react-table";
import { Products } from "../../API/api";

export const columns: Column<Products>[] = [
  {
    accessor: "id",
    Header: "Id",
    Footer: "Id",
  },
  {
    accessor: "title",
    Header: "Title",
    Footer: "Title",
  },
  {
    accessor: "price",
    Header: "Price",
    Footer: "Price",
  },
  {
    accessor: "description",
    Header: "Description",
    Footer: "Description",
  },
  {
    accessor: "category",
    Header: "Category",
    Footer: "Category",
  },
  {
    accessor: "image",
    Header: "Image",
    Footer: "Image",
  },
];
