import { useCallback, useState } from "react";
import styled from "styled-components";
import { data } from "../../Data/data";
import { Products } from "../../Data/DataType";
import Popup from "../Popup/Popup";

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  padding: 40px;
`;
const StoreItem: React.FC = () => {
  const [actualData, setData] = useState<Products[]>(data);
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [imageDesc, setImageDesc] = useState("");

  const deleteProductHandler = useCallback(
    (product: Products) => {
      setData(actualData.filter((eachData) => eachData.id !== product.id));
    },
    [actualData]
  );

  const openProductView = useCallback(
    (image: string, description: string) => {
      setModalOpen(true);
      setImageURL(image);
      setImageDesc(description);
      document.body.style.overflow = "auto";
    },
    [setModalOpen]
  );

  const closePopupHandler = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  return (
    <div>
      {actualData.map((item, key) => (
        <div>
          <StyledImage
            key={key}
            src={item.image}
            onClick={() => openProductView(item.image, item.description)}
          />
          <button key={key} onClick={() => deleteProductHandler(item)}>
            Delete Product
          </button>
        </div>
      ))}
      {isModalOpen && (
        <Popup
          imageURL={imageURL}
          imageDescription={imageDesc}
          onClose={closePopupHandler}
        ></Popup>
      )}
    </div>
  );
};

export default StoreItem;
