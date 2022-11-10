import styled from "styled-components";

export type DropDownItemProps = {
  key: number;
  item: string;
  onClick: (item: string) => void;
};

const StyledItem = styled.div`
  background: grey;
  margin-top: 2px;
  border-radius: 10px;
  padding: 5px;
  font-size: 13px;
  color: white;
  cursor: pointer;
  width: 280px;
`;

const DropDownItem: React.FC<DropDownItemProps> = ({ key, item, onClick }) => {
  return (
    <StyledItem key={key} onClick={() => onClick(item)}>
      {item}
    </StyledItem>
  );
};

export default DropDownItem;
