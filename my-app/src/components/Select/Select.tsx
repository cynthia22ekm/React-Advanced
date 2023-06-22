import { ForwardedRef, forwardRef } from "react";
import Select, { SelectInstance } from "react-select";

export type SelectedItemType = {
  value: string;
  label: string;
};

export type SelectProps = {
  value?: string;
  options: SelectedItemType[];
  ref?: ForwardedRef<SelectInstance>;
  onChange: (selectedItem: SelectedItemType) => void;
};

const SelectBox: React.FC<SelectProps> = forwardRef<
  SelectInstance,
  SelectProps
>(({ value, options, onChange, ...props }, ref) => {
  return (
    <Select
      options={options}
      value={
        options.find((option) => option.value === value) as SelectedItemType
      }
      ref={ref}
      onChange={(newValue: unknown) => onChange(newValue as SelectedItemType)}
      {...props}
    />
  );
});

export default SelectBox;
