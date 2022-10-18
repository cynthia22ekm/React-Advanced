import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const Home: React.FC = () => {
  return (
    <Navbar
      linkNames={[
        { linkName: "Home", linkPath: "/" },
        { linkName: "Store", linkPath: "/store" },
        { linkName: "About", linkPath: "/about" },
      ]}
      searchable={true}
    />
  );
};

export default Home;
