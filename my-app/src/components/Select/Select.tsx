import { forwardRef } from "react";
import Select, { SelectInstance } from "react-select";
import styled from "styled-components";

export type SelectedItemType = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectedItemType[];
  onChange: (selectedItem: SelectedItemType) => void;
};

const StyledSelect = styled(Select)`
  border-radius: 10px;
`;

const SelectBox: React.FC<SelectProps> = forwardRef<
  SelectInstance,
  SelectProps
>(({ options, onChange }) => {
  return (
    <StyledSelect
      options={options}
      onChange={(newValue: unknown) => onChange(newValue as SelectedItemType)}
    />
  );
});

export default SelectBox;
