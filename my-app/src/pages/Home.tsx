import ProgressBar from "../components/ProgressBar/ProgressBar";

const Home: React.FC = () => {
  return (
    <ProgressBar
      type="progress"
      value={{ values: [2, 25] }}
      visualizationOptions={{ label: "Test Bar", size: "slim" }}
    />
  );
};

export default Home;
