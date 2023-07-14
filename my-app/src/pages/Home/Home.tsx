import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../API/api";
import Navbar from "../../components/Navbar/Navbar";
import ProductsTable from "./Table/ProductsTable";
import { RootState } from "../../store/ReduxStore";

const Home: React.FC = () => {
  const { data } = useGetProductsQuery();
  const productData = useSelector((state: RootState) => {
    return state.productApiData.productApiData;
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

      <ProductsTable data={productData ? productData : []} />
    </div>
  );
};

export default Home;
