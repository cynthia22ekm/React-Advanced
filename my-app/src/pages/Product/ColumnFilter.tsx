import { ColumnInstance } from "react-table";
import { ChangeEvent } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { ProductType } from "../../data/DataType";

type ColumnFilterProps = {
  column: ColumnInstance<ProductType>;
};

const ColumnFilter: React.FC<ColumnFilterProps> = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <TextInput
      inputSize="small"
      value={filterValue ? filterValue : ""}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setFilter(event.target.value)
      }
    />
  );
};

export default ColumnFilter;
