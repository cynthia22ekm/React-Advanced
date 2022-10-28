import styled from "styled-components";
import Icon from "../Icon/Icon";
import DownArrow from "../../imgs/down-arrow.svg";
import { ItemCategory } from "../../Data/DataType";
import { useState } from "react";
import Popup from "../Popup/Popup";

export type DropDownProps = {
  options: ItemCategory[];
  label: string;
  isDropDownOpen: boolean;
  onClick: () => void;
  onSelect: (category: ItemCategory) => void;
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

const DropDownItem = styled.div`
  background: grey;
  margin-top: 2px;
  border-radius: 10px;
  padding: 5px;
  font-size: 13px;
  color: white;
  cursor: pointer;
  width: 280px;
`;

const DropDownContainer = styled.div`
  height: 100px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    background: white;
    border-radius: 10px;
  }
`;

const DropDown: React.FC<DropDownProps> = ({
  options,
  label,
  isDropDownOpen,
  onClick,
  onSelect,
}) => {
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLButtonElement | null>(null);

  return (
    <div>
      <StyledButton type="button" onClick={onClick} ref={setReferenceElement}>
        <div>{label}</div>
        <div>
          <Icon imageURL={DownArrow}></Icon>
        </div>
      </StyledButton>
      {isDropDownOpen && (
        <Popup
          referenceElement={referenceElement}
          placement="bottom-start"
          strategy="fixed"
        >
          <DropDownContainer>
            {options.map((item, key) => (
              <DropDownItem key={key} onClick={() => onSelect(item)}>
                {item}
              </DropDownItem>
            ))}
          </DropDownContainer>
        </Popup>
      )}
    </div>
  );
};

export default DropDown;
