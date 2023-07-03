import { useSortBy, useTable } from "react-table";
import { ProductType } from "../../data/DataType";
import { columns } from "./Columns";
import styled from "styled-components";

export type AddProductTableProps = {
  data: ProductType[];
};

const StyledTable = styled.table`
  margin-top: 50px;
  width: 90%;
  margin-left: 5%;
  border-radius: 20px;
  background-color: lightblue;
  box-sizing: content-box;
`;

const Styledtd = styled.td`
  text-align: center;
  padding: 10px;
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
