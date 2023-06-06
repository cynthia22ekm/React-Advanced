import { useState } from "react";

export type CoordinateType = {
  x: number;
  y: number;
};

const Game: React.FC = () => {
  const [coordinates, setCoordinates] = useState<CoordinateType[]>([]);
  const addCircleHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    setCoordinates((previousCoordinates) => [
      ...previousCoordinates,
      { x: event.clientX, y: event.clientY },
    ]);
  };
  return (
    <div onClick={addCircleHandler} style={{ height: "100vh" }}>
      {coordinates.map((coordinate, key) => (
        <div
          key={key}
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            backgroundColor: "blue",
            position: "fixed",
            left: `${coordinate.x}px`,
            top: `${coordinate.y}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Game;
