import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import { ChangeEvent } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import SelectBox, { SelectedItemType } from "../../components/Select/Select";

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

let categories = [
  { value: "Food", label: "Food" },
  { value: "Clothing", label: "Clothing" },
  { value: "Electronics", label: "Electronics" },
  { value: "Books", label: "Books" },
];

const Product: React.FC = () => {
  const { control, handleSubmit } = useForm<ProductForm>({
    defaultValues: {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rate: 0,
      count: 0,
    },
  });

  const uploadFileHandler = (event: ChangeEvent<HTMLInputElement>) =>
    console.log(event.target.files);

  const onSubmit: SubmitHandler<ProductForm> = (data) => {
    console.log("Category is " + data.category);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Product ID</div>
      <Controller
        control={control}
        name="id"
        render={({ field: { ref, onChange } }) => (
          <TextInput ref={ref} onChange={onChange} />
        )}
      />

      <div>Product Title</div>
      <Controller
        control={control}
        name="title"
        render={({ field: { ref, onChange } }) => (
          <TextInput ref={ref} onChange={onChange} />
        )}
      />
      <div>Purchase Price</div>
      <Controller
        control={control}
        name="price"
        render={({ field: { ref, onChange } }) => (
          <TextInput
            ref={ref}
            onChange={(event) => onChange(event.target.value)}
          />
        )}
      />
      <div>Product Description</div>
      <Controller
        control={control}
        name="description"
        render={({ field: { ref, onChange } }) => (
          <TextInput ref={ref} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="category"
        render={({ field: { ref, onChange } }) => (
          <SelectBox
            options={categories}
            ref={ref}
            onChange={(selectedItem: unknown) => {
              onChange((selectedItem as SelectedItemType).value);
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="image"
        render={({ field: { ref, onChange } }) => (
          <FileUpload ref={ref} onChange={onChange} />
        )}
      />

      <div>Sales Price</div>
      <Controller
        control={control}
        name="rate"
        render={({ field: { ref, onChange } }) => (
          <TextInput ref={ref} onChange={onChange} />
        )}
      />
      <div>Quantity</div>
      <Controller
        control={control}
        name="count"
        render={({ field: { ref, onChange } }) => (
          <TextInput ref={ref} onChange={onChange} />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default Product;
