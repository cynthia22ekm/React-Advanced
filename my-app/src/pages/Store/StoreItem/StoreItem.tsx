import { useCallback, useState } from "react";
import styled from "styled-components";
import { Products } from "../../../data/DataType";
import ViewItem from "../ViewItem/ViewItem";
import { Data } from "../../../data/Data";
import { useDispatch } from "react-redux";

export type StoreItemProps = {
  searchText: string;
  onAdd: (item: Products) => void;
};

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  padding: 40px;
  background: lightgrey;
  margin-top: 40px;
  margin-left: 100px;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledText = styled.div`
  height: 100px;
  width: 300px;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-size: 13px;
`;

const StyledBorder = styled.div`
  border: 2px black;
`;

const StyledButton = styled.button`
  border-radius: 10px;
  font-size: 13px;
  margin: 10px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StoreItem: React.FC<StoreItemProps> = ({ searchText, onAdd }) => {
  const [actualData, setData] = useState<Products[]>(Data);
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemView, setItemView] = useState<Products>({
    id: 0,
    title: "",
    price: 0,
    category: "Food",
    description: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  const openProductView = useCallback(
    (item: Products) => {
      setModalOpen(true);
      setItemView(item);
    },
    [setModalOpen]
  );

  const closePopupHandler = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  const formSubmitHandler = useCallback(
    (id: number, title: string, category: string, description: string) => {
      setModalOpen(false);
      setData(
        actualData.map((data) => {
          if (data.id === id) {
            return {
              ...data,
              title: title,
              category: category,
              description: description,
            };
          } else return data;
        })
      );
    },
    [actualData, setModalOpen]
  );

  const deleteItemHandler = useCallback(
    (imageID: number) => {
      setData(actualData.filter((eachData) => eachData.id !== imageID));
    },
    [actualData]
  );

  return (
    <div>
      <ImageContainer>
        {searchText.length
          ? actualData.map((item, key) =>
              item.title.toLowerCase() === searchText.toLowerCase() ? (
                <StyledBorder key={key}>
                  <StyledImage
                    src={item.image}
                    onClick={() => openProductView(item)}
                  />
                  <StyledText>
                    <StyledButton onClick={() => onAdd(item)}>
                      Add to Cart
                    </StyledButton>
                    <StyledButton onClick={() => openProductView(item)}>
                      View Item
                    </StyledButton>
                    <div>{item.title}</div>
                  </StyledText>
                </StyledBorder>
              ) : null
            )
          : actualData.map((item, key) => (
              <StyledBorder key={key}>
                <StyledImage
                  src={item.image}
                  onClick={() => openProductView(item)}
                />
                <StyledText>
                  <StyledButton onClick={() => onAdd(item)}>
                    Add to Cart
                  </StyledButton>
                  <StyledButton onClick={() => openProductView(item)}>
                    View Item
                  </StyledButton>
                  <div>{item.title}</div>
                </StyledText>
              </StyledBorder>
            ))}
      </ImageContainer>
      {isModalOpen && (
        <ViewItem
          imageID={itemView.id}
          imageURL={itemView.image}
          imageTitle={itemView.title}
          imageCategory={itemView.category}
          imageDescription={itemView.description}
          onClose={closePopupHandler}
          onSubmit={formSubmitHandler}
          onDelete={deleteItemHandler}
        ></ViewItem>
      )}
    </div>
  );
};

export default StoreItem;
