import React from "react";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import About from "./router/about/About";
import SinglePage from "./router/singlepage/SinglePage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/single-page/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default App;
