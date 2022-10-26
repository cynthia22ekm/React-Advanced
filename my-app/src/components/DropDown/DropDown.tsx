import styled from "styled-components";
import Icon from "../Icon/Icon";
import DownArrow from "../../imgs/down-arrow.svg";
import { useState } from "react";

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
  height: 170px;
  width: 300px;
  background: rgba(0, 0, 0, 0.7);
  z-index: 4;
  border-radius: 10px;
  padding: 3px;
  text-overflow: scroll;
  position: absolute;
  top: 290px; ;
`;
const DropDownItem = styled.div`
  background: grey;
  margin-top: 2px;
  border-radius: 10px;
  padding: 5px;
  font-size: 13px;
  color: white;
`;

const DropDown: React.FC<DropDownProps> = ({
  options,
  label,
  isDropDownOpen,
  onClick,
  onSelect,
}) => {
  return (
    <div>
      <StyledButton onClick={onClick}>
        <div>{label}</div>
        <div>
          <Icon imageURL={DownArrow}></Icon>
        </div>
      </StyledButton>
      {isDropDownOpen && (
        <DropDownContainer>
          {options.map((item, key) => (
            <DropDownItem key={key} onClick={() => onSelect(item)}>
              {item}
            </DropDownItem>
          ))}
        </DropDownContainer>
      )}
    </div>
  );
};

export default DropDown;
