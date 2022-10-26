import { ChangeEvent } from "react";
import styled from "styled-components";

export type TextInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
  background: lightgrey;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  border: none;
`;

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <StyledInput type="text" value={value} onChange={onChange}></StyledInput>
  );
};

export default TextInput;
