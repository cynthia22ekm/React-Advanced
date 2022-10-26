import styled from "styled-components";

export type IconProps = {
  imageURL: string;
};

const IconContainer = styled.div`
height:10px;
width:10px;
border-radius:50%;
display: "flex",
justify-content: "center"
`;

const Icon: React.FC<IconProps> = ({ imageURL }) => {
  return (
    <IconContainer>
      <img src={imageURL} alt="Image loading..." />
    </IconContainer>
  );
};

export default Icon;
