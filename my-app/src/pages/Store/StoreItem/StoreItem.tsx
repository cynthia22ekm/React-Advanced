import { useCallback, useState } from "react";
import styled from "styled-components";
import { data } from "../../../Data/data";
import { ItemCategory, Products } from "../../../Data/DataType";
import Popup from "../../../components/Popup/Popup";

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

const StoreItem: React.FC = () => {
  const [actualData, setData] = useState<Products[]>(data);
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

  const addToCartProductHandler = useCallback((item: Products) => {}, []);

  const openProductView = useCallback(
    (item: Products) => {
      setModalOpen(true);
      setItemView(item);
      document.body.style.overflow = "auto";
    },
    [setModalOpen]
  );

  const closePopupHandler = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  const formSubmitHandler = useCallback(
    (
      id: number,
      title: string,
      category: ItemCategory,
      description: string
    ) => {
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
        {actualData.map((item, key) => (
          <StyledBorder>
            <StyledImage
              key={key}
              src={item.image}
              onClick={() => openProductView(item)}
            />
            <StyledText>
              <StyledButton
                key={key}
                onClick={() => addToCartProductHandler(item)}
              >
                Add to Cart
              </StyledButton>
              <StyledButton key={key} onClick={() => openProductView(item)}>
                View Item
              </StyledButton>
              <div>{item.title}</div>
            </StyledText>
          </StyledBorder>
        ))}
      </ImageContainer>
      {isModalOpen && (
        <Popup
          imageID={itemView.id}
          imageURL={itemView.image}
          imageTitle={itemView.title}
          imageCategory={itemView.category}
          imageDescription={itemView.description}
          onClose={closePopupHandler}
          onSubmit={formSubmitHandler}
          onDelete={deleteItemHandler}
        ></Popup>
      )}
    </div>
  );
};

export default StoreItem;
