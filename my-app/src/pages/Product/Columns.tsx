import { Column } from "react-table";
import { ProductType } from "../../data/DataType";
import styled from "styled-components";
//id is required is accessor is added as a function
const ColumnHeader = styled.div`
  margin: 5px;
`;

export const columns: Column<ProductType>[] = [
  {
    accessor: "id",
    Header: () => {
      return <ColumnHeader>ID</ColumnHeader>;
    },
    Footer: "Id",
  },
  {
    accessor: "title",
    Header: () => {
      return <ColumnHeader>Title</ColumnHeader>;
    },
    Footer: "Title",
  },
  {
    accessor: "purchasePrice",
    Header: () => {
      return <ColumnHeader>Purchase Price</ColumnHeader>;
    },
    Footer: "PurchasePrice",
  },
  {
    accessor: "description",
    Header: () => {
      return <ColumnHeader>Description</ColumnHeader>;
    },
    Footer: "Description",
  },

  {
    accessor: "category",
    Header: () => {
      return <ColumnHeader>Category</ColumnHeader>;
    },
    Footer: "Category",
  },
  {
    accessor: "image",
    Header: () => {
      return <ColumnHeader>Image</ColumnHeader>;
    },
    Footer: "Image",
  },
  {
    accessor: (row) => {
      return row.rating.quantity;
    },
    id: "salesprice",
    Header: () => {
      return <ColumnHeader>Sales Price</ColumnHeader>;
    },
    Footer: "SalesPrice",
  },
  {
    accessor: (row) => {
      return row.rating.quantity;
    },
    id: "quantity",
    Header: () => {
      return <ColumnHeader>Quantity</ColumnHeader>;
    },
    Footer: "Quantity",
  },
];
