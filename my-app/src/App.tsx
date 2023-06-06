import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Game from "./pages/Game/Game";
import { ReduxStore } from "./store/ReduxStore";
import Store from "./pages/Store/Store";

function App() {
  return (
    <Provider store={ReduxStore}>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;
