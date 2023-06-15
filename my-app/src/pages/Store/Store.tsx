import { ChangeEvent, useCallback, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Products } from "../../data/DataType";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import StoreItem from "./StoreItem/StoreItem";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../reduxSlice/ShoppingCarSlice";
import { increment } from "../../reduxSlice/CounterSlice";
import { RootState } from "../../store/ReduxStore";

export type CartItemType = {
  id: number;
  title: string;
  quantity: number;
  image: string;
};

const Store: React.FC = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [searchText, setSearchText] = useState("");
  const shoppingCartItems = useSelector(
    (state: RootState) => state.shoppingcart.cartItems
  );
  const shoppingCartCount = useSelector(
    (state: RootState) => state.counter.count
  );

  const dispatch = useDispatch();

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

  const getSearchTextHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [setSearchText]
  );

  return (
    <div>
      <Navbar
        linkNames={[
          { linkName: "Home", linkPath: "/" },
          { linkName: "Store", linkPath: "/store" },
          { linkName: "About", linkPath: "/about" },
          { linkName: "Product", linkPath: "/product" },
        ]}
        itemCount={shoppingCartCount}
      >
        <ShoppingCart
          itemCount={shoppingCartCount}
          searchText={searchText}
          cartItems={shoppingCartItems}
          onChange={getSearchTextHandler}
        ></ShoppingCart>
      </Navbar>
      <StoreItem
        searchText={searchText}
        onAdd={(item: Products) => {
          dispatch(increment());
          dispatch(addToCart(item));
        }}
      ></StoreItem>
    </div>
  );
};

export default Store;
