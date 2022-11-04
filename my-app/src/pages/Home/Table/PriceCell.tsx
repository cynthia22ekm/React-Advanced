import { CellProps } from "react-table";

type PriceCellProps = {
  cellprops: CellProps<any>;
};

const PriceCell: React.FC<PriceCellProps> = ({ cellprops: { row } }) => {
  return <div>{row.original["price"]}</div>;
};

export default PriceCell;
