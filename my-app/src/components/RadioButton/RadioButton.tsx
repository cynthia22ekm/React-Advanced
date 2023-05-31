import { ChangeEvent } from "react";

export type RadioButtonProps = {
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ name, onChange }) => {
  return (
    <div>
      <input type="radio" name={name} onChange={onChange} />
    </div>
  );
};

export default RadioButton;
