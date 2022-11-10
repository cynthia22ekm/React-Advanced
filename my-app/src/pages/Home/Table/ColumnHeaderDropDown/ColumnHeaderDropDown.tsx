import { useCallback, useState } from "react";
import { ColumnInstance } from "react-table";
import styled from "styled-components";
import DropDownItem from "../../../../components/DropDown/DropDownItem";
import Popup from "../../../../components/Popup/Popup";

export type ColumnHeaderDropdownProps = {
  column: ColumnInstance;
};

const columnOptions = ["Filter Column", "Sort Ascending", "Sort Descending"];

const StyledHeader = styled.th`
  display: flex;
  align-item: center;
  justify-content: space-between;
`;

const ColContentContainer = styled.div`
  padding: 5px;
`;

const ColumnHeaderDropDown: React.FC<ColumnHeaderDropdownProps> = ({
  column,
}) => {
  const [openModal, setModalOpen] = useState(false);
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLDivElement | null>(null);

  const openModalHandler = useCallback(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  const columnFunctionsHandler = useCallback(
    () => console.log("columns clicked"),
    []
  );

  return (
    <StyledHeader {...column.getHeaderProps()}>
      <ColContentContainer ref={setReferenceElement} onClick={openModalHandler}>
        {column.render("Header")}
      </ColContentContainer>

      {openModal && (
        <Popup
          referenceElement={referenceElement}
          placement="bottom-start"
          strategy="fixed"
        >
          {columnOptions.map((item, key) => (
            <DropDownItem
              key={key}
              item={item}
              onClick={columnFunctionsHandler}
            ></DropDownItem>
          ))}
        </Popup>
      )}
    </StyledHeader>
  );
};

export default ColumnHeaderDropDown;
