import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import AddProductTable from "./AddProductTable";
import ProductForm from "./ProductForm";
import { RootState } from "../../store/ReduxStore";
import { useProductStore } from "../../reduxSlice/ZustandProducts";

const Product: React.FC = () => {
  //Will be kept for reference
  const productData = useSelector((state: RootState) => {
    return state.productData.products;
  });

  const productList = useProductStore((state) => state.products);
  return (
    <div>
      <Navbar
        linkNames={[
          { linkName: "Home", linkPath: "/" },
          { linkName: "Store", linkPath: "/store" },
          { linkName: "About", linkPath: "/about" },
          { linkName: "Product", linkPath: "/product" },
        ]}
        itemCount={0}
      />
      <ProductForm></ProductForm>
      <AddProductTable data={productList}></AddProductTable>
    </div>
  );
};

export default Product;
