import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import AddProductTable from "./AddProductTable";
import ProductForm from "./ProductForm";
import { RootState } from "../../store/ReduxStore";

const Product: React.FC = () => {
  const productData = useSelector((state: RootState) => {
    return state.productData.products;
  });
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
      <AddProductTable data={productData}></AddProductTable>
    </div>
  );
};

export default Product;
