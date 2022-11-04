//Reference taken from https://react-table-v7.tanstack.com/docs/api/useTable,//https://github.com/TanStack/table/discussions/2664
//https://www.youtube.com/watch?v=CQ165vFGLVs&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=4

import { useTable, useSortBy } from "react-table";
import styled from "styled-components";
import { columns } from "./Columns";
import { Products } from "../../../API/api";

export type ProductsTableProps = {
  data: Products[];
};

const ProductsTable: React.FC<ProductsTableProps> = ({ data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const StyledTable = styled.table`
    border: 1px solid black;
    margin-left: 20px;
    margin-top: 50px;
    border-collapse: collapse;
  `;

  const Styledth = styled.th`
    border: 1px solid black;
    background: lightgrey;
    text-align: center;
  `;

  const Styledtd = styled.td`
    border: 1px solid black;
  `;

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Styledth
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
              </Styledth>
            ))}
          </tr>
        ))}
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
