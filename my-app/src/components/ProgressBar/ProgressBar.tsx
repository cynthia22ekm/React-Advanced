import styled from "styled-components";

export type ProgressVisualizationConfig = {
  type: "progress";
  // value field represents how value passed by aggregation function should be formed
  value: {
    values: [number, number]; // 1st number represents completed, 2nd number total steps
  };
  visualizationOptions: {
    label: string;
    size: "slim" | "medium" | "thick";
  };
};
const height = ({ visualizationOptions }: ProgressVisualizationConfig) =>
  visualizationOptions.size === "slim"
    ? "40px"
    : visualizationOptions.size === "medium"
    ? "80px"
    : "120px";

const width = ({ visualizationOptions }: ProgressVisualizationConfig) =>
  visualizationOptions.size === "slim"
    ? "500px"
    : visualizationOptions.size === "medium"
    ? "700px"
    : "800px";

const progresswidth = ({ value }: ProgressVisualizationConfig) =>
  value.values[1] - value.values[0] === 50
    ? "100px"
    : value.values[1] - value.values[0] <= 50
    ? "200px"
    : "400px";

const StyledProgressBar = styled.div<ProgressVisualizationConfig>((props) => {
  return `
height: ${height(props)};
width: ${width(props)};
background:grey;
display: flex;
align-items:center;
padding:5px;
box-size: border-box;
`;
});

const ProgressIndicator = styled.div<ProgressVisualizationConfig>((props) => {
  return `
    background:white;
    width: ${progresswidth(props)};
    padding:10px;
    height:20px; 
    `;
});

const ProgressBar: React.FC<ProgressVisualizationConfig> = ({
  type,
  value,
  visualizationOptions,
}) => {
  return (
    <div>
      <StyledProgressBar
        type={type}
        value={value}
        visualizationOptions={visualizationOptions}
      >
        <ProgressIndicator
          type={type}
          value={value}
          visualizationOptions={visualizationOptions}
        ></ProgressIndicator>
      </StyledProgressBar>
      <div>
        {value.values[0]}/{value.values[1]}
      </div>
    </div>
  );
};

export default ProgressBar;
