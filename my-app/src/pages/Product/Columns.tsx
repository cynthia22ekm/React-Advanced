import { CellProps, Column } from "react-table";
import { ProductType } from "../../data/DataType";
import styled from "styled-components";
//id is required is accessor is added as a function
//Reference: https://www.material-react-table.com/docs/guides/data-columns
const ColumnHeader = styled.div`
  margin: 10px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
`;

const StyledCell = styled.div`
  background-color: white;
  margin: 5px;
  border-radius: 10px;
  padding: 5px;
`;

export const columns: Column<ProductType>[] = [
  {
    accessor: "id",
    Header: () => {
      return <ColumnHeader>ID</ColumnHeader>;
    },
    Cell: (cellProps) => {
      return <StyledCell>{cellProps.cell.value}</StyledCell>;
    },
    Footer: "Id",
  },
  {
    accessor: "title",
    Header: () => {
      return <ColumnHeader>Title</ColumnHeader>;
    },
    Cell: (cellProps) => {
      return <StyledCell>{cellProps.cell.value}</StyledCell>;
    },
    Footer: "Title",
  },
  {
    accessor: "purchasePrice",
    Header: () => {
      return <ColumnHeader>Purchase Price</ColumnHeader>;
    },
    Cell: (cellProps) => {
      return <StyledCell>{cellProps.cell.value}</StyledCell>;
    },
    Footer: "PurchasePrice",
  },
  {
    accessor: "description",
    Header: () => {
      return <ColumnHeader>Description</ColumnHeader>;
    },
    Cell: (cellProps) => {
      return <StyledCell>{cellProps.cell.value}</StyledCell>;
    },
    Footer: "Description",
  },

  {
    accessor: "category",
    Header: () => {
      return <ColumnHeader>Category</ColumnHeader>;
    },
    Cell: (cellProps) => {
      return <StyledCell>{cellProps.cell.value}</StyledCell>;
    },
    Footer: "Category",
  },
  {
    accessor: "image",
    Header: () => {
      return <ColumnHeader>Image</ColumnHeader>;
    },
    Cell: (cellProps) => {
      return <StyledCell>{cellProps.cell.value}</StyledCell>;
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
    Cell: (cellProps: CellProps<ProductType>) => {
      return <StyledCell>{cellProps.cell.value}</StyledCell>;
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
    Cell: (cellProps: CellProps<ProductType>) => {
      return <StyledCell>{cellProps.cell.value}</StyledCell>;
    },
    Footer: "Quantity",
  },
];
