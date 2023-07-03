import styled from "styled-components";
import TextInput from "../../components/TextInput/TextInput";
import { ChangeEvent } from "react";

export type GlobalFilterProps = {
  globalFilter: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FilterInput = styled.div`
  margin: 40px;
  display: flex;
  align-items: center;
  background-color: lightblue;
  width: 30%;
  margin-left: 38%;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
`;

const StyledTextInput = styled(TextInput)`
  margin-left: 5%;
  background-color: white;
`;
const StyledText = styled.div`
  font-weight: bold;
`;

const GlobalFilter: React.FC<GlobalFilterProps> = ({
  globalFilter,
  onChange,
}) => {
  return (
    <FilterInput>
      <StyledText>Search Text </StyledText>
      <StyledTextInput
        inputSize="large"
        value={globalFilter ? globalFilter : ""}
        onChange={onChange}
      />
    </FilterInput>
  );
};

export default GlobalFilter;
