import Navbar from "../components/ProgressBar/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const Home: React.FC = () => {
  return (
    <Navbar
      linkNames={[
        { linkName: "Home", linkPath: "/" },
        { linkName: "Store", linkPath: "/store" },
        { linkName: "About", linkPath: "/about" },
      ]}
      buttonsAvailable={false}
    />
  );
};

export default Home;
