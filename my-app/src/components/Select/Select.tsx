import { ForwardedRef, forwardRef } from "react";
import Select, { SelectInstance } from "react-select";

export type SelectProps = {
  options: { value: string; label: string }[];
  ref?: ForwardedRef<SelectInstance>;
};

const SelectBox: React.FC<SelectProps> = forwardRef<
  SelectInstance,
  SelectProps
>(({ options, ...props }, ref) => {
  return <Select options={options} ref={ref} {...props} />;
});

export default SelectBox;
