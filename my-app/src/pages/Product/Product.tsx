import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import { ChangeEvent } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";
import SelectBox, { SelectedItemType } from "../../components/Select/Select";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { addProducts } from "../../reduxSlice/ProductSlice";
import { ProductType } from "../../data/DataType";

let categories = [
  { value: "Food", label: "Food" },
  { value: "Clothing", label: "Clothing" },
  { value: "Electronics", label: "Electronics" },
  { value: "Books", label: "Books" },
];

const StyledForm = styled.form`
  margin-left: 20%;
  margin-right: 20px;
  margin-top: 10%;
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
  width: 60%;
`;

const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBorder = styled.div`
  padding: 10px;
  display: flex;
  width: 80%;
`;

const StyledTitle = styled.div`
  margin-right: 20px;
  margin-top: 5px;
`;

const SubmitButton = styled(Button)`
  margin-left: 40%;
`;

const FieldGroups = styled.div``;

const ErrorMessage = styled.div`
  color: red;
  margin: 10px;
`;

const Product: React.FC = () => {
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProductType>({
    mode: "onSubmit",
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

  const onSubmit: SubmitHandler<ProductType> = (data) => {
    dispatch(addProducts(data));
  };

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
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <FieldGroups>
            <StyledBorder>
              <StyledTitle>Product ID</StyledTitle>
              <div>
                <Controller
                  control={control}
                  name="id"
                  rules={{
                    required: {
                      value: true,
                      message: "Product ID is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3",
                    },
                  }}
                  render={({ field: { onChange } }) => (
                    <TextInput inputSize="large" onChange={onChange} />
                  )}
                />
                <ErrorMessage>{errors.id?.message}</ErrorMessage>
              </div>
            </StyledBorder>
            <StyledBorder>
              <StyledTitle>Purchase Price</StyledTitle>
              <div>
                <Controller
                  control={control}
                  name="purchasePrice"
                  rules={{
                    required: {
                      value: true,
                      message: "Purchase Price is required",
                    },
                  }}
                  render={({ field: { onChange } }) => (
                    <TextInput inputSize="large" onChange={onChange} />
                  )}
                />
                <ErrorMessage>{errors.purchasePrice?.message}</ErrorMessage>
              </div>
            </StyledBorder>
            <StyledBorder>
              <StyledTitle>Category</StyledTitle>
              <div>
                <Controller
                  control={control}
                  name="category"
                  rules={{
                    required: {
                      value: true,
                      message: "Product Category is required",
                    },
                  }}
                  render={({ field: { onChange } }) => (
                    <SelectBox
                      classNamePrefix="select"
                      options={categories}
                      onChange={(selectedItem: unknown) => {
                        onChange((selectedItem as SelectedItemType).value);
                      }}
                    />
                  )}
                />
                <ErrorMessage>{errors.category?.message}</ErrorMessage>
              </div>
            </StyledBorder>
            <StyledBorder>
              <StyledTitle>Sales Price</StyledTitle>
              <div>
                <Controller
                  control={control}
                  name="rating.salesPrice"
                  rules={{
                    required: {
                      value: true,
                      message: "Sales Price is required",
                    },
                  }}
                  render={({ field: { onChange } }) => (
                    <TextInput inputSize="large" onChange={onChange} />
                  )}
                />
                <ErrorMessage>
                  {errors.rating?.salesPrice?.message}
                </ErrorMessage>
              </div>
            </StyledBorder>
          </FieldGroups>
          <FieldGroups>
            <StyledBorder>
              <StyledTitle>Product Title</StyledTitle>
              <div>
                <Controller
                  control={control}
                  name="title"
                  rules={{
                    required: {
                      value: true,
                      message: "Product Title is required",
                    },
                  }}
                  render={({ field: { onChange } }) => (
                    <TextInput inputSize="large" onChange={onChange} />
                  )}
                />
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
              </div>
            </StyledBorder>
            <StyledBorder>
              <StyledTitle>Product Description</StyledTitle>
              <Controller
                control={control}
                name="description"
                render={({ field: { onChange } }) => (
                  <TextInput inputSize="large" onChange={onChange} />
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
            <StyledBorder>
              <StyledTitle>Quantity</StyledTitle>
              <div>
                <Controller
                  control={control}
                  name="rating.quantity"
                  rules={{
                    required: {
                      value: true,
                      message: "Product quantity is required",
                    },
                  }}
                  render={({ field: { onChange } }) => (
                    <TextInput inputSize="large" onChange={onChange} />
                  )}
                />
                <ErrorMessage>{errors.rating?.quantity?.message}</ErrorMessage>
              </div>
            </StyledBorder>
          </FieldGroups>
        </FormSection>
        <SubmitButton
          label="Submit"
          className="submit-button"
          type="submit"
          size="medium"
        />
      </StyledForm>
    </div>
  );
};

export default Product;
