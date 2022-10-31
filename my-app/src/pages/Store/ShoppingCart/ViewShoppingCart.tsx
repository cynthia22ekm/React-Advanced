import styled from "styled-components";
import Popup from "../../../components/Popup/Popup";
import { CartItemType } from "../Store";

export type ViewShoppingCartProps = {
  cartItems?: CartItemType[];
  cartButtonReference: HTMLButtonElement | null;
};

const CartContainer = styled.div`
  background: grey;
  width: 300px;
  height: 300px;
  margin: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    background: white;
    border-radius: 10px;
  }
`;

const CartItem = styled.div`
  display: flex;
`;

const CartInfo = styled.div`
  margin: 30px;
  font-size: 13px;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px;
`;

const ViewShoppingCart: React.FC<ViewShoppingCartProps> = ({
  cartItems,
  cartButtonReference,
}) => {
  return (
    <Popup
      placement="bottom-start"
      strategy="fixed"
      referenceElement={cartButtonReference}
    >
      <CartContainer>
        {cartItems &&
          cartItems.map((item) => (
            <CartItem>
              <StyledImage src={item.image} alt="No Image" />
              <div>
                <CartInfo>{item.title}</CartInfo>
                <CartInfo>Quantity:{item.quantity}</CartInfo>
              </div>
            </CartItem>
          ))}
      </CartContainer>
    </Popup>
  );
};

export default ViewShoppingCart;
