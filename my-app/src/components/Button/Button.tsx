import styled from "styled-components";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "submit" | "button" | "reset";

export type ButtonProps = {
  label: string;
  type: ButtonType;
  size: ButtonSize;
};

const StyledButton = styled.button``;

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  size = "medium",
}) => {
  return (
    <div>
      <StyledButton label={label} type={type} size={size}></StyledButton>
    </div>
  );
};

export default Button;
