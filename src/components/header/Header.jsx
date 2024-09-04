import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to={"/"}>
        <h1>Logo</h1>
      </NavLink>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </nav>
    </header>
  );
}

export default Header;
