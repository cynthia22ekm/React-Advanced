import { ForwardedRef, forwardRef } from "react";
import Select, { SelectInstance } from "react-select";

export type SelectedItemType = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectedItemType[];
  ref?: ForwardedRef<SelectInstance>;
  onChange: (selectedItem: SelectedItemType) => void;
};

const SelectBox: React.FC<SelectProps> = forwardRef<
  SelectInstance,
  SelectProps
>(({ options, onChange, ...props }, ref) => {
  return (
    <Select
      options={options}
      ref={ref}
      onChange={(newValue: unknown) => onChange(newValue as SelectedItemType)}
      {...props}
    />
  );
});

export default SelectBox;
