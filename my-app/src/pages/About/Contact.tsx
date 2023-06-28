import styled from "styled-components";
import TextInput from "../../components/TextInput/TextInput";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { ContactType } from "../../data/DataType";

const ErrorMessage = styled.div`
  color: red;
  margin: 10px;
`;

const StyledBorder = styled.div`
  padding: 30px;
  margin: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
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
            placeholder="Enter FirstName"
            {...register("firstName", { required: true })}
          ></TextInput>
          <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
        </StyledBorder>
        <TextInput
          placeholder="Enter LastName"
          {...register("lastName")}
        ></TextInput>
        <TextInput placeholder="Enter Phone" {...register("phone")}></TextInput>
        <TextInput placeholder="Enter Email" {...register("email")}></TextInput>
        {errors.email && <ErrorMessage>Email is Required</ErrorMessage>}
        <TextInput
          placeholder="Enter Message"
          {...register("message")}
        ></TextInput>
        {errors.message && <ErrorMessage>Message is Required</ErrorMessage>}
        <Button label="Submit" type="submit" size="large"></Button>
      </StyledForm>
    </div>
  );
};

export { Contact };
