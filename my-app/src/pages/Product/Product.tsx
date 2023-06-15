import { useForm } from "react-hook-form";
import DropDown from "../../components/DropDown/DropDown";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

export interface ProductForm {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
}

const Product: React.FC = () => {
  const { register, handleSubmit } = useForm<ProductForm>();
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const selectCategoryHandler = (item: string) =>
    console.log("Selected text is " + item);
  const clickButtonHandler = () => {
    isDropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true);
  };

  return (
    <div>
      <div>Product ID</div>
      <TextInput />
      <div>Product Title</div>
      <TextInput />
      <div>Purchase Price</div>
      <TextInput />
      <div>Product Description</div>
      <TextInput />
      <DropDown
        options={["Food", "Clothing", "Electronics", "Books"]}
        label={"Select Category"}
        isDropDownOpen={isDropDownOpen}
        onClick={clickButtonHandler}
        onSelect={selectCategoryHandler}
      ></DropDown>
      <Button label={"Upload Image"} type={"button"} size={"large"} />
      <div>Sales Price</div>
      <TextInput />
      <div>Quantity</div>
      <TextInput />
    </div>
  );
};

export default Product;
