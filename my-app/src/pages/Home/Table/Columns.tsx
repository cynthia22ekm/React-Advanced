import { Column } from "react-table";
import { Products } from "../../../API/api";
import PriceCell from "./PriceCell";
import { CellProps } from "react-table";

//https://www.bacancytechnology.com/blog/react-table-tutorial

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
    Cell: (cellprops) => {
      return <PriceCell cellprops={cellprops} />;
    },
  },
  {
    accessor: "title",
    Header: "Title",
    Footer: "Title",
  },
];
