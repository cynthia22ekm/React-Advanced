import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import { ChangeEvent } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import SelectBox, { SelectedItemType } from "../../components/Select/Select";
import { Data } from "../../data/Data";
import styled from "styled-components";

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

const StyledForm = styled.form`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10%;
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
`;

const StyledBorder = styled.div`
  padding: 10px;
  display: flex;
  width: 80%;
  align-items: center;
`;

const StyledTitle = styled.div`
  margin-right: 20px;
`;

const FieldGroups = styled.div`
  display: flex;
  justify-content: space-between;
`;

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

  const handleFileUpload = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    if (event.target.files) {
      onChange(
        "C:\\Users\\Cynthia Joseph\\Desktop\\Web Development\\React-Advanced\\my-app\\src\\imgs\\" +
          event.target.files[0].name
      );
    }
  };

  const onSubmit: SubmitHandler<ProductForm> = (data) => {
    Data.push({
      id: data.id,
      title: data.title,
      price: data.price,
      category: data.category,
      description: data.description,
      image: data.image,
      rating: { rate: data.rate, count: data.count },
    });
    Data.map((eachData) => console.log("Image is " + eachData.id));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FieldGroups>
        <StyledBorder>
          <StyledTitle>Product ID</StyledTitle>
          <Controller
            control={control}
            name="id"
            render={({ field: { onChange } }) => (
              <TextInput onChange={onChange} />
            )}
          />
        </StyledBorder>
        <StyledBorder>
          <StyledTitle>Product Title</StyledTitle>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange } }) => (
              <TextInput onChange={onChange} />
            )}
          />
        </StyledBorder>
      </FieldGroups>
      <FieldGroups>
        <StyledBorder>
          <StyledTitle>Purchase Price</StyledTitle>
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange } }) => (
              <TextInput onChange={(event) => onChange(event.target.value)} />
            )}
          />
        </StyledBorder>
        <StyledBorder>
          <StyledTitle>Product Description</StyledTitle>
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange } }) => (
              <TextInput onChange={onChange} />
            )}
          />
        </StyledBorder>
      </FieldGroups>
      <FieldGroups>
        <StyledBorder>
          <StyledTitle>Category</StyledTitle>
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange } }) => (
              <SelectBox
                options={categories}
                 onChange={(selectedItem: unknown) => {
                  onChange((selectedItem as SelectedItemType).value);
                }}
              />
            )}
          />
        </StyledBorder>
        <StyledBorder>
          <StyledTitle>Profile Photo</StyledTitle>
          <Controller
            control={control}
            name="image"
            render={({ field: { onChange } }) => (
              <FileUpload
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleFileUpload(event, onChange)
                }
              />
            )}
          />
        </StyledBorder>
      </FieldGroups>
      <FieldGroups>
        <StyledBorder>
          <StyledTitle>Sales Price</StyledTitle>
          <Controller
            control={control}
            name="rate"
            render={({ field: { onChange } }) => (
              <TextInput onChange={onChange} />
            )}
          />
        </StyledBorder>
        <StyledBorder>
          <StyledTitle>Quantity</StyledTitle>
          <Controller
            control={control}
            name="count"
            render={({ field: { onChange } }) => (
              <TextInput onChange={onChange} />
            )}
          />
        </StyledBorder>
      </FieldGroups>
      <input type="submit" />
    </StyledForm>
  );
};

export default Product;
