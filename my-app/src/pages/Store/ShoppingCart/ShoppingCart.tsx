import { useCallback, useState } from "react";
import styled from "styled-components";
import { CartItemType } from "../Store";
import { ShoppingCartImage } from "./index";
import ViewShoppingCart from "./ViewShoppingCart";

export type ShoppingCartProps = {
  itemCount: number;
  cartItems: CartItemType[];
};

const RightContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const ShoppingCartSection = styled.div`
  margin-right: 10px;
  display: flex;
`;

const ShoppingCartButton = styled.button`
  border-radius: 50%;
`;

const ItemCount = styled.div`
  border-radius: 50%;
  background: red;
  margin-left: -5px;
  margin-top: 15px;
  height: 20px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const StyledSearchButton = styled.button`
  border-radius: 10px;
  font-size: 13px;
`;

const StyledSearchInput = styled.input`
  border-radius: 10px;
  font-size: 13px;
`;

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  itemCount,
  cartItems,
}) => {
  const [
    cartButtonReference,
    setCartButtonReference,
  ] = useState<HTMLButtonElement | null>(null);
  const [isCartOpen, setCartOpen] = useState(false);

  const openCartHandler = useCallback(() => {
    isCartOpen ? setCartOpen(false) : setCartOpen(true);
  }, [isCartOpen, setCartOpen]);

  return (
    <div>
      <RightContainer>
        <ShoppingCartSection>
          <ShoppingCartButton
            ref={setCartButtonReference}
            onClick={openCartHandler}
          >
            <ShoppingCartImage />
          </ShoppingCartButton>
          <ItemCount>{itemCount}</ItemCount>
        </ShoppingCartSection>
        <StyledSearchInput type="text" placeholder="Search..." />
        <StyledSearchButton>Search</StyledSearchButton>
      </RightContainer>
      {isCartOpen && (
        <ViewShoppingCart
          cartItems={cartItems}
          cartButtonReference={cartButtonReference}
        ></ViewShoppingCart>
      )}
    </div>
  );
};

export default ShoppingCart;
