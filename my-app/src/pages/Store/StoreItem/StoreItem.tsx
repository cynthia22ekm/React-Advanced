import { FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { data } from "../../../Data/data";
import { ItemCategory, Products } from "../../../Data/DataType";
import Popup from "../../../components/Popup/Popup";

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  padding: 40px;
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

  const deleteProductHandler = useCallback(
    (product: Products) => {
      setData(actualData.filter((eachData) => eachData.id !== product.id));
    },
    [actualData]
  );

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

  const deleteItemHandler = useCallback(() => {}, []);

  return (
    <div>
      {actualData.map((item, key) => (
        <div>
          <StyledImage
            key={key}
            src={item.image}
            onClick={() => openProductView(item)}
          />
          <button key={key} onClick={() => deleteProductHandler(item)}>
            Delete Product
          </button>
        </div>
      ))}
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
