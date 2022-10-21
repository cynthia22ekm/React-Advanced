import ProductsTable from "../components/Table/ProductsTable";
import { useGetProductsQuery } from "../API/api";

const Store: React.FC = () => {
  const { data: products, isFetching } = useGetProductsQuery();

  return <ProductsTable products={products ? products.data : []} />;
};

export default Store;
