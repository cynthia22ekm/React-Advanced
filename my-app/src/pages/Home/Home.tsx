import { useGetProductsQuery } from "../../API/api";
import Navbar from "../../components/Navbar/Navbar";
import ProductsTable from "./Table/ProductsTable";

const Home: React.FC = () => {
  const { data, isFetching } = useGetProductsQuery();
  console.log(data);
  console.log(isFetching);
  return (
    <div>
      <Navbar
        linkNames={[
          { linkName: "Home", linkPath: "/" },
          { linkName: "Store", linkPath: "/store" },
          { linkName: "About", linkPath: "/about" },
        ]}
        itemCount={0}
      />

      <ProductsTable data={data ? data : []} />
    </div>
  );
};

export default Home;
