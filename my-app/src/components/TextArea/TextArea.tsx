import { ChangeEvent } from "react";
import styled from "styled-components";

export type TextAreaProps = {
  text: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const StyledTextArea = styled.textarea`
  background: lightgrey;
  width: 300px;
  height: 150px;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
  font-size: 13px;
`;

const TextArea: React.FC<TextAreaProps> = ({ text, onChange }) => {
  return <StyledTextArea onChange={onChange}>{text}</StyledTextArea>;
};

export default TextArea;
