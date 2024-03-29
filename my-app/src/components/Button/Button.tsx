import styled from "styled-components";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "submit" | "button" | "reset";
//className is added to give styling for the Button component when used in another component like Product-Form
export type ButtonProps = {
  label?: string;
  className?: string;
  type: ButtonType;
  size: ButtonSize;
};

const StyledButton = styled.button<ButtonProps>((props) => {
  const { size } = props;
  return `
  width:${size === "small" ? "100px" : size === "medium" ? "200px" : "300px"} ;
  height: 30px;
  border-radius: 5px;
`;
});

const Button: React.FC<ButtonProps> = ({ label, className, type, size }) => {
  return (
    <StyledButton label={label} className={className} type={type} size={size}>
      {label}
    </StyledButton>
  );
};

export default Button;
