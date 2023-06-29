import styled from "styled-components";
import TextInput from "../../components/TextInput/TextInput";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { ContactType } from "../../data/DataType";

const ErrorMessage = styled.div`
  color: red;
`;

const StyledBorder = styled.div`
  padding: 10px;
  margin: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export type ContactProps = {
  onSubmit: (contactDetails: ContactType) => void;
};

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>({
    mode: "onSubmit",
  });

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledBorder>
          <TextInput
            inputSize="large"
            placeholder="Enter FirstName"
            {...register("firstName", {
              required: { value: true, message: "FirstName is Required" },
            })}
          ></TextInput>
          <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
        </StyledBorder>
        <StyledBorder>
          <TextInput
            inputSize="large"
            placeholder="Enter LastName"
            {...register("lastName")}
          ></TextInput>
        </StyledBorder>
        <StyledBorder>
          <TextInput
            inputSize="large"
            placeholder="Enter Phone"
            {...register("phone", {
              required: { value: true, message: "Phone Number is Required." },
            })}
          ></TextInput>
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>
        </StyledBorder>
        <StyledBorder>
          <TextInput
            inputSize="large"
            placeholder="Enter Email"
            {...register("email", {
              required: { value: true, message: "Email is Required" },
            })}
          ></TextInput>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </StyledBorder>
        <StyledBorder>
          <TextInput
            inputSize="large"
            placeholder="Enter Message"
            {...register("message")}
          ></TextInput>
        </StyledBorder>
        <Button label="Submit" type="submit" size="medium"></Button>
      </StyledForm>
    </div>
  );
};

export { Contact };
