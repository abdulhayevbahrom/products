import React from "react";
import load from "./loader.gif";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      <img src={load} alt="" />
    </div>
  );
}

export default Loader;
