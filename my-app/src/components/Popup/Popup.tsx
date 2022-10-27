import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { ItemCategory } from "../../Data/DataType";
import DropDown from "../DropDown/DropDown";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";

export type PopupProps = {
  imageID: number;
  imageURL: string;
  imageTitle: string;
  imageCategory: ItemCategory;
  imageDescription: string;
  onClose: () => void;
  onSubmit: (
    id: number,
    title: string,
    category: ItemCategory,
    description: string
  ) => void;
  onDelete: (imageID: number) => void;
};

let optionsValue: ItemCategory[] = [
  "Food",
  "Books",
  "Clothing",
  "Electronics",
  "Home",
];

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

const FullContent = styled.form`
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
  imageID,
  imageURL,
  imageTitle,
  imageCategory,
  imageDescription,
  onClose,
  onSubmit,
  onDelete,
}) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [category, setCategory] = useState(imageCategory);
  const [title, setTitle] = useState(imageTitle);
  const [description, setDescription] = useState(imageDescription);

  const openDropDownContainerHandler = useCallback(() => {
    isDropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true);
  }, [setDropDownOpen, isDropDownOpen]);

  const selectDropDownHandler = useCallback(
    (category: ItemCategory) => {
      setCategory(category);
      setDropDownOpen(false);
    },
    [setCategory, setDropDownOpen]
  );

  const getInputTextHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const getTextAreaInputHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const formSubmitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Hi");
      onSubmit(imageID, title, category, description);
    },
    [imageID, title, category, description, onSubmit]
  );

  return (
    <StyledPopup>
      <FullContent onSubmit={formSubmitHandler}>
        <PopupBody>
          <StyledImage src={imageURL} alt="image" />
          <ImageContent>
            <TextInput value={title} onChange={getInputTextHandler} />
            <DropDown
              label={category}
              options={optionsValue}
              isDropDownOpen={isDropDownOpen}
              onClick={openDropDownContainerHandler}
              onSelect={selectDropDownHandler}
            />
            <TextArea text={description} onChange={getTextAreaInputHandler} />
          </ImageContent>
        </PopupBody>
        <PopupFooter>
          <LeftFooter>
            <StyledButton onClick={() => onDelete(imageID)}>
              Delete
            </StyledButton>
          </LeftFooter>
          <RightFooter>
            <StyledButton onClick={onClose}>Cancel</StyledButton>
            <StyledSaveButton type="submit">Save</StyledSaveButton>
          </RightFooter>
        </PopupFooter>
      </FullContent>
    </StyledPopup>
  );
};

export default Popup;
