import styled from "styled-components";
import Icon from "../Icon/Icon";
import DownArrow from "../../imgs/down-arrow.svg";
import { useState } from "react";
import Popup from "../Popup/Popup";
import DropDownItem from "./DropDownItem";


export type DropDownProps = {
  options: string[];
  label: string;
  isDropDownOpen: boolean;
  onClick: () => void;
  onSelect: (category: string) => void;
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
              <DropDownItem
                key={key}
                item={item}
                onClick={() => onSelect(item)}
              />
            ))}
          </DropDownContainer>
        </Popup>
      )}
    </div>
  );
};

export default DropDown;
