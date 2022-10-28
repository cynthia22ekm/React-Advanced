import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <Navbar
      linkNames={[
        { linkName: "Home", linkPath: "/" },
        { linkName: "Store", linkPath: "/store" },
        { linkName: "About", linkPath: "/about" },
      ]}
      itemCount={0}
    />
  );
};

export default Home;
