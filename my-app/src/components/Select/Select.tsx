import Select from "react-select";

export type SelectProps = {
  options: { value: string; label: string }[];
};

const SelectBox: React.FC<SelectProps> = ({ options }) => {
  return <Select options={options}></Select>;
};
