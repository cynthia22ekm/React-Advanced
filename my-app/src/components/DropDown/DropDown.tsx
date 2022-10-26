import styled from "styled-components";
import Icon from "../Icon/Icon";
import DownArrow from "../../imgs/down-arrow.svg";

export type DropDownProps = {
  options: string[];
  label: string;
};

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  background: lightgrey;
  border-radius: 10px;
  border: none;
  padding: 5px;
  width: 300px;
  padding: 10px;
  font-size: 13px;
`;

const LeftContainer = styled.div``;
const RightContainer = styled.div``;

const DropDown: React.FC<DropDownProps> = ({ options, label }) => {
  return (
    <div>
      <StyledButton>
        <LeftContainer>{label}</LeftContainer>
        <RightContainer>
          <Icon imageURL={DownArrow}></Icon>
        </RightContainer>
      </StyledButton>
    </div>
  );
};

export default DropDown;
