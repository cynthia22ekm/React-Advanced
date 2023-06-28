import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { Contact } from "./Contact";
import { ContactType } from "../../data/DataType";

const ContactSection = styled.div`
  margin-top: 20%;
  margin-left: 30%;
  padding: 10px;
  width: 500px;
  height: 500px;
  background-color: lightblue;
`;

const About: React.FC = () => {
  const onSubmitHandler = (data: ContactType) => console.log(data);
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
      ></Navbar>
      <ContactSection>
        <Contact onSubmit={onSubmitHandler}></Contact>
      </ContactSection>
    </div>
  );
};

export default About;
