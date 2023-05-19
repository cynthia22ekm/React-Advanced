import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./API/api";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";

function App() {
  return (
    <ApiProvider api={productsApi}>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </ApiProvider>
  );
}

export default App;
