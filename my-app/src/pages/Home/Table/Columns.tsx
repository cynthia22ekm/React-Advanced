import { Column } from "react-table";
import PriceCell from "./PriceCell";
import { CellProps } from "react-table";
import { ProductType } from "../../../data/DataType";

//https://www.bacancytechnology.com/blog/react-table-tutorial

export const columns: Column<ProductType>[] = [
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
    accessor: "purchasePrice",
    Header: "PurchasePrice",
    Footer: "PurchasePrice",
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
