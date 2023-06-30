import { useSortBy, useTable } from "react-table";
import { ProductType } from "../../data/DataType";
import { columns } from "./Columns";
import styled from "styled-components";

export type AddProductTableProps = {
  data: ProductType[];
};

const StyledTable = styled.table`
  border: 1px solid black;
  margin-left: 20px;
  margin-top: 50px;
  border-collapse: collapse;
`;

const Styledtd = styled.td`
  border: 1px solid black;
`;

const AddProductTable: React.FC<AddProductTableProps> = ({ data }) => {
  const { getTableProps, getTableBodyProps, visibleColumns, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  //   console.log("Get table Props are " + getTableProps);
  //   console.log("Get table body props are " + getTableBodyProps);
  //   console.log("Visible columns are " + visibleColumns);
  //   console.log("Rows are " + rows);
  return (
    <StyledTable {...getTableProps()}>
      <thead>
        <tr>
          {visibleColumns.map((column) => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <Styledtd {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </Styledtd>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default AddProductTable;
