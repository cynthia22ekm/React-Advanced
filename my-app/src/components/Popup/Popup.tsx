import styled from "styled-components";

export type PopupProps = {
  imageURL: string;
  imageDescription: string;
  onClose: () => void;
};

const StyledPopup = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  z-index: 999;
  display: flex;
  width: 500px;
  height: 200px;
  background: white;
  margin-left: 400px;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  padding: 10px;
  margin-left: 20px;
  margin-top: 20px;
`;
const StyledDiv = styled.div`
  margin-left: 100px;
  margin-top: 20px;
  width: 200px;
`;

const StyledButton = styled.button`
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Popup: React.FC<PopupProps> = ({
  imageURL,
  imageDescription,
  onClose,
}) => {
  return (
    <StyledPopup>
      <Content>
        <StyledImage src={imageURL} alt="image" />
        <StyledDiv>{imageDescription}</StyledDiv>
      </Content>
      <StyledButton onClick={onClose}>Close</StyledButton>
    </StyledPopup>
  );
};

export default Popup;
