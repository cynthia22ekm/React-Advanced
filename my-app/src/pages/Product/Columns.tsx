import { Column } from "react-table";
import { ProductType } from "../../data/DataType";

export const columns: Column<ProductType>[] = [
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
    accessor: "purchasePrice",
    Header: "PurchasePrice",
    Footer: "PurchasePrice",
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
  {
    accessor: (product) => {
      return product.rating.salesPrice;
    },
    Header: "SalesPrice",
    Footer: "SalesPrice",
  },
  {
    accessor: (product) => {
      return product.rating.quantity;
    },
    Header: "Quantity",
    Footer: "Quantity",
  },
];
