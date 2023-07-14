import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
//forward ref is used to pass the ref to the components inside a functional component

type InputSize = "small" | "large";

export type TextInputProps = {
  value?: string;
  placeholder?: string;
  inputSize?: InputSize;
  color?: string;
  ref?: ForwardedRef<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const width = (props: TextInputProps) =>
  props.inputSize === "small" ? "100px" : "300px";

const StyledInput = styled.input<TextInputProps>((props) => {
  return `
  background-color: ${props.color};
  width: ${width(props)};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  border: none;`;
});

const TextInput: React.FC<TextInputProps> = forwardRef<
  HTMLInputElement,
  TextInputProps
>(({ value, placeholder, inputSize = "small", onChange, ...props }, ref) => {
  return (
    <StyledInput
      type="text"
      inputSize={inputSize}
      value={value}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
      {...props}
    />
  );
});

export default TextInput;
