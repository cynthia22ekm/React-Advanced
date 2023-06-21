import styled from "styled-components";

export type DropDownItemProps = {
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

const DropDownItem: React.FC<DropDownItemProps> = ({ item, onClick }) => {
  return <StyledItem onClick={() => onClick(item)}>{item}</StyledItem>;
};

export default DropDownItem;
