import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import styled from "styled-components";

type ButtonSize = "small" | "medium" | "large";

export type FileUploadProps = {
  inputSize?: ButtonSize;
  ref?: ForwardedRef<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input<FileUploadProps>((props) => {
  const { size } = props;
  return `
width: ${size}==="small"? 30px: ${size}==="medium"? 40px:50px
height: ${size}==="small"? 40px: ${size}==="medium"? 50px:60px
`;
});

const FileUpload: React.FC<FileUploadProps> = forwardRef<
  HTMLInputElement,
  FileUploadProps
>(({ inputSize, onChange }, ref) => {
  return (
    <StyledInput
      type="file"
      inputSize={inputSize}
      ref={ref}
      onChange={onChange}
    />
  );
});

export default FileUpload;
