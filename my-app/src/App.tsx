import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./API/api";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

function App() {
  return (
    <ApiProvider api={productsApi}>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </ApiProvider>
  );
}

export default App;
