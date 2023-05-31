import { ChangeEvent } from "react";

export type CheckBoxProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ onChange }) => {
  return <input onChange={onChange}></input>;
};

export default CheckBox;
