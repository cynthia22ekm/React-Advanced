//Reference taken from https://react-table-v7.tanstack.com/docs/api/useTable,//https://github.com/TanStack/table/discussions/2664
//https://www.youtube.com/watch?v=CQ165vFGLVs&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=4

import { useTable, useSortBy } from "react-table";
import styled from "styled-components";
import { columns } from "./Columns";
import ColumnHeaderDropDown from "./ColumnHeaderDropDown/ColumnHeaderDropDown";
import { APIProductType } from "../../../data/DataType";

export type ProductsTableProps = {
  data: APIProductType[];
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

const ProductsTable: React.FC<ProductsTableProps> = ({ data }) => {
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
            <ColumnHeaderDropDown column={column} />
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

export default ProductsTable;
