import { useCallback, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Products } from "../../Data/DataType";
import StoreItem from "./StoreItem/StoreItem";

const Store: React.FC = () => {
  const [itemCount, setItemCount] = useState(0);
  const addToCartHandler = useCallback(
    (item: Products) => {
      setItemCount(itemCount + 1);
    },
    [itemCount, setItemCount]
  );

  return (
    <div>
      <Navbar
        linkNames={[
          { linkName: "Home", linkPath: "/" },
          { linkName: "Store", linkPath: "/store" },
          { linkName: "About", linkPath: "/about" },
        ]}
        searchable={true}
        itemCount={itemCount}
      />
      <StoreItem onAdd={addToCartHandler}></StoreItem>
    </div>
  );
};

export default Store;
