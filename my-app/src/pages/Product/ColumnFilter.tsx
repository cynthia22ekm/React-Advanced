import { ColumnInstance } from "react-table";
import { ChangeEvent } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { ProductType } from "../../data/DataType";
import styled from "styled-components";

type ColumnFilterProps = {
  column: ColumnInstance<ProductType>;
};

const StyledTextInput = styled(TextInput)`
  margin: 10px;
`;

const ColumnFilter: React.FC<ColumnFilterProps> = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <StyledTextInput
      inputSize="small"
      value={filterValue ? filterValue : ""}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setFilter(event.target.value)
      }
    />
  );
};

export default ColumnFilter;
