import styled from "styled-components";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "submit" | "button" | "reset";

export type ButtonProps = {
  label: string;
  type: ButtonType;
  size: ButtonSize;
};

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
`;

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  size = "medium",
}) => {
  return (
    <div>
      <StyledButton type={type}>{label}</StyledButton>
    </div>
  );
};

export default Button;
