import { useCallback, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Products } from "../../Data/DataType";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import StoreItem from "./StoreItem/StoreItem";

export type CartItemType = {
  id: number;
  title: string;
  quantity: number;
  image: string;
};

const Store: React.FC = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCartHandler = useCallback(
    (item: Products) => {
      setItemCount(itemCount + 1);
      cartItems.length
        ? cartItems.filter((cartItem) => cartItem.id === item.id).length
          ? setCartItems(
              cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                  return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                  };
                } else return cartItem;
              })
            )
          : setCartItems([
              ...cartItems,
              {
                id: item.id,
                title: item.title,
                quantity: 1,
                image: item.image,
              },
            ])
        : setCartItems([
            ...cartItems,
            { id: item.id, title: item.title, quantity: 1, image: item.image },
          ]);
    },
    [itemCount, cartItems, setItemCount, setCartItems]
  );

  return (
    <div>
      <Navbar
        linkNames={[
          { linkName: "Home", linkPath: "/" },
          { linkName: "Store", linkPath: "/store" },
          { linkName: "About", linkPath: "/about" },
        ]}
        itemCount={itemCount}
      >
        <ShoppingCart
          itemCount={itemCount}
          cartItems={cartItems}
        ></ShoppingCart>
      </Navbar>
      <StoreItem onAdd={addToCartHandler}></StoreItem>
    </div>
  );
};

export default Store;
