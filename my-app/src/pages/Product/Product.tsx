import { useForm } from "react-hook-form";
import DropDown from "../../components/DropDown/DropDown";
import TextInput from "../../components/TextInput/TextInput";
import { ChangeEvent, useState } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";

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

  const uploadFileHandler = (event: ChangeEvent<HTMLInputElement>) =>
    console.log(event.target.files);

  return (
    <div>
      <div>Product ID</div>
      <TextInput {...register("id")} />
      <div>Product Title</div>
      <TextInput {...register("title")} />
      <div>Purchase Price</div>
      <TextInput {...register("price")} />
      <div>Product Description</div>
      <TextInput {...register("description")} />
      <DropDown
        options={["Food", "Clothing", "Electronics", "Books"]}
        label={"Select Category"}
        isDropDownOpen={isDropDownOpen}
        onClick={clickButtonHandler}
        onSelect={selectCategoryHandler}
        {...register("category")}
      />
      <FileUpload
        inputSize="large"
        {...register("image")}
        onChange={uploadFileHandler}
      />
      <div>Sales Price</div>
      <TextInput {...register("rate")} />
      <div>Quantity</div>
      <TextInput {...register("count")} />
    </div>
  );
};

export default Product;
