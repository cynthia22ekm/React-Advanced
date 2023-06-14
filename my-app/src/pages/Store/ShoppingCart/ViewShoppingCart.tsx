import styled from "styled-components";
import Popup from "../../../components/Popup/Popup";
import { CartItemType } from "../Store";
import { useDispatch } from "react-redux";
import {
  addMoreQuantity,
  removeFromCart,
} from "../../../reduxSlice/ShoppingCarSlice";
import { decrement, increment } from "../../../reduxSlice/CounterSlice";

export type ViewShoppingCartProps = {
  cartItems: CartItemType[];
  cartButtonReference: HTMLButtonElement | null;
};

const CartContainer = styled.div`
  background: grey;
  width: 300px;
  height: 300px;
  margin: 10px;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    background: white;
    border-radius: 10px;
  }
`;

const CartItem = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 275px;
`;

const CartInfo = styled.div`
  margin-top: 20px;
  font-size: 13px;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;
const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 1px;
  height: 30px;
  width: 40px;
  font-size: 13px;
  margin-top: 20px;
  margin-left: 10px;
`;

const ButtonBorder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ViewShoppingCart: React.FC<ViewShoppingCartProps> = ({
  cartItems,
  cartButtonReference,
}) => {
  const dispatch = useDispatch();

  return (
    <Popup
      placement="bottom-start"
      strategy="fixed"
      referenceElement={cartButtonReference}
    >
      <CartContainer>
        {cartItems.length ? (
          cartItems.map((item, key) => (
            <CartItem key={key}>
              <StyledImage src={item.image} alt="No Image" />
              <div>
                <CartInfo>{item.title}</CartInfo>
                <CartInfo>Quantity:{item.quantity}</CartInfo>
              </div>
              <ButtonBorder>
                <StyledButton
                  onClick={() => {
                    dispatch(removeFromCart(item));
                    dispatch(decrement());
                  }}
                >
                  -
                </StyledButton>
                <StyledButton
                  onClick={() => {
                    dispatch(addMoreQuantity(item));
                    dispatch(increment());
                  }}
                >
                  +
                </StyledButton>
              </ButtonBorder>
            </CartItem>
          ))
        ) : (
          <div>No Items Added</div>
        )}
      </CartContainer>
    </Popup>
  );
};

export default ViewShoppingCart;
