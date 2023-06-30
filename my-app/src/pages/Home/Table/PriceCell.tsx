import { CellProps } from "react-table";
import styled from "styled-components";

type PriceCellProps = {
  cellprops: CellProps<any>;
};

const StyledCell = styled.div`
  padding: 10px;
`;

const PriceCell: React.FC<PriceCellProps> = ({ cellprops: { row } }) => {
  return <StyledCell>{row.original["price"]} </StyledCell>;
};

export default PriceCell;
