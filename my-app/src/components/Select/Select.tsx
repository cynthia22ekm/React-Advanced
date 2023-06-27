import { forwardRef } from "react";
import Select, { SelectInstance } from "react-select";
import styled from "styled-components";

export type SelectedItemType = {
  value: string;
  label: string;
};

export type SelectProps = {
  classNamePrefix?: string;
  options: SelectedItemType[];
  onChange: (selectedItem: SelectedItemType) => void;
};

const StyledSelect = styled(Select)`
  width: 200px;

  .select__control {
    border-radius: 10px;
  }

  .select__menu {
            padding: 8px;
            border-radius: 12px;
            .select__menu-list {
                padding: 4px;
                border-radius: 12px;
             }
`;

const SelectBox: React.FC<SelectProps> = forwardRef<
  SelectInstance,
  SelectProps
>(({ classNamePrefix, options, onChange }) => {
  return (
    <StyledSelect
      className={"select"}
      classNamePrefix={classNamePrefix}
      options={options}
      onChange={(newValue: unknown) => onChange(newValue as SelectedItemType)}
    />
  );
});

export default SelectBox;
