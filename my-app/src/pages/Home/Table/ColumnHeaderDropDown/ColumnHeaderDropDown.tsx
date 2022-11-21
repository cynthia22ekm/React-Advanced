import { useCallback, useState } from "react";
import { ColumnInstance } from "react-table";
import styled from "styled-components";
import { Products } from "../../../../API/api";
import DropDownItem from "../../../../components/DropDown/DropDownItem";
import Popup from "../../../../components/Popup/Popup";

export type ColumnHeaderDropdownProps = {
  column: ColumnInstance<Products>;
};

const columnOptions = ["Filter Column", "Sort Ascending", "Sort Descending"];

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
    <th {...column.getHeaderProps()}>
      {column.render("Header")}
      <ColContentContainer
        ref={setReferenceElement}
        onClick={openModalHandler}
      ></ColContentContainer>

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
    </th>
  );
};

export default ColumnHeaderDropDown;
