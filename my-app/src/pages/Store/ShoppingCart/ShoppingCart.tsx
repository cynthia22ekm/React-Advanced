import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { CartItemType } from "../Store";
import { ShoppingCartImage } from "./index";
import ViewShoppingCart from "./ViewShoppingCart";

export type ShoppingCartProps = {
  itemCount: number;
  searchText: string;
  cartItems: CartItemType[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
  margin-left: 5px;
`;

const StyledSearchInput = styled.input`
  border-radius: 10px;
  font-size: 13px;
  padding: 8px;
  box-size: border-box;
`;

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  itemCount,
  searchText,
  cartItems,
  onChange,
}) => {
  const [cartButtonReference, setCartButtonReference] =
    useState<HTMLButtonElement | null>(null);
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
        <StyledSearchInput
          placeholder="Search..."
          value={searchText}
          onChange={onChange}
        />
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
