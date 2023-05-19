import styled from "styled-components";
import TextInput from "../../components/TextInput/TextInput";
import { ContactDetails } from "./ContactDetails";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";

const ErrorMessage = styled.div`
color: red
`;

const StyledForm = styled.form`
display: flex;
flex-direction: column;
`;

export type ContactProps = {
  onSubmit: (contactDetails: ContactDetails) => void;
};

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholder="Enter FirstName"
          {...(register("firstName"), { required: true })}
        ></TextInput>
        {errors.firstName && <ErrorMessage>FirstName is required</ErrorMessage>}
        <TextInput
          placeholder="Enter LastName"
          {...register("lastName")}
        ></TextInput>
        <TextInput placeholder="Enter Phone" {...register("phone")}></TextInput>
        <TextInput
          placeholder="Enter Email"
          {...(register("email"), { required: true })}
        ></TextInput>
        {errors.email && <ErrorMessage>Email is Required</ErrorMessage>}
        <TextInput
          placeholder="Enter Message"
          {...(register("message"), { required: true })}
        ></TextInput>
        {errors.message && <ErrorMessage>Message is Required</ErrorMessage>}
        <Button label="Submit" type="submit" size="large"></Button>
      </StyledForm>
    </div>
  );
};

export { Contact };
