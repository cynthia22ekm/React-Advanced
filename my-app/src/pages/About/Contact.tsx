import { ContactDetails } from "./ContactDetails";
import { useForm } from "react-hook-form";

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
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default Contact;
