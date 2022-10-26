import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { ItemCategory } from "../../Data/DataType";
import DropDown from "../DropDown/DropDown";
import TextInput from "../TextInput/TextInput";

export type PopupProps = {
  imageURL: string;
  imageTitle: string;
  imageCategory: ItemCategory;
  imageDescription: string;
  onClose: () => void;
  onSubmit: () => void;
  onDelete: () => void;
};

let optionsValue = ["Food", "Books", "Clothing", "Electronics", "Home"];

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

const FullContent = styled.div`
  z-index: 999;
  display: block;
  width: 550px;
  height: 350px;
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

const StyledDescription = styled.div`
  background: lightgrey;
  width: 300px;
  height: 150px;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
  font-size: 13px;
`;

const StyledButton = styled.button`
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  width: 70px;
  font-size: 13px;
`;

const StyledSaveButton = styled.button`
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  width: 70px;
  background: blue;
  font-size: 13px;
`;

const ImageContent = styled.div`
  padding: 20px;
  display: block;
`;

const PopupBody = styled.div`
  display: flex;
`;

const PopupFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftFooter = styled.div`
  margin-left: 50px;
`;

const RightFooter = styled.div`
  display: flex;
  margin-right: 55px;
`;

const Popup: React.FC<PopupProps> = ({
  imageURL,
  imageTitle,
  imageCategory,
  imageDescription,
  onClose,
  onSubmit,
  onDelete,
}) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [label, setLabel] = useState("Select Category...");
  const [title, setTitle] = useState(imageTitle);

  const dropDownContainerHandler = useCallback(() => {
    console.log(isDropDownOpen);
    isDropDownOpen && setDropDownOpen(false);
    !isDropDownOpen && setDropDownOpen(true);
  }, [setDropDownOpen, isDropDownOpen]);

  const selectDropDownHandler = useCallback(
    (category: string) => {
      setLabel(category);
      setDropDownOpen(false);
    },
    [setLabel, setDropDownOpen]
  );

  const getInputTextHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  return (
    <StyledPopup>
      <FullContent>
        <PopupBody>
          <StyledImage src={imageURL} alt="image" />
          <ImageContent>
            <TextInput value={title} onChange={getInputTextHandler} />
            <DropDown
              label={label}
              options={optionsValue}
              isDropDownOpen={isDropDownOpen}
              onClick={dropDownContainerHandler}
              onSelect={selectDropDownHandler}
            />
            <StyledDescription>{imageDescription}</StyledDescription>
          </ImageContent>
        </PopupBody>
        <PopupFooter>
          <LeftFooter>
            <StyledButton onClick={onDelete}>Delete</StyledButton>
          </LeftFooter>
          <RightFooter>
            <StyledButton onClick={onClose}>Cancel</StyledButton>
            <StyledSaveButton onClick={onSubmit}>Save</StyledSaveButton>
          </RightFooter>
        </PopupFooter>
      </FullContent>
    </StyledPopup>
  );
};

export default Popup;
