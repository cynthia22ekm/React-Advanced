import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import { productsApi } from "./API/api";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Game from "./pages/Game/Game";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/store" element={<Store />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Container>
      </ApiProvider>
    </Provider>
  );
}

export default App;
