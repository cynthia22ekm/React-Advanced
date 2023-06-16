import { ChangeEvent } from "react";
import styled from "styled-components";

type ButtonSize = "small" | "medium" | "large";

export type FileUploadProps = {
  size: ButtonSize;
  uploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input((props) => {
  const { size } = props;
  return `
width: ${size}==="small"? 30px: ${size}==="medium"? 40px:50px
height: ${size}==="small"? 40px: ${size}==="medium"? 50px:60px
`;
});

const FileUpload: React.FC<FileUploadProps> = ({ uploadFile }) => {
  return <StyledInput type="file" onChange={uploadFile} />;
};

export default FileUpload;
