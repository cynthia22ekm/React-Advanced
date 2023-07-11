import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import { ProductType } from "../../data/DataType";
import { columns } from "./Columns";
import styled from "styled-components";
import GlobalFilter from "./GlobalFilter";
import { ChangeEvent, useMemo } from "react";
import ColumnFilter from "./ColumnFilter";

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
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    visibleColumns,
    rows,
    state,
    setGlobalFilter,
    getTableProps,
    getTableBodyProps,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  const getSearchTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <div>
      <GlobalFilter
        globalFilter={globalFilter}
        onChange={getSearchTextHandler}
      ></GlobalFilter>
      <StyledTable {...getTableProps()}>
        <thead>
          <tr>
            {visibleColumns.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
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
    </div>
  );
};

export default AddProductTable;
