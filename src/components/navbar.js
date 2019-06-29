import React from "react";
import logo from "../logo.png";
import { AddButton } from "./add-button";
import { Router, Switch, Route, Link } from "react-router-dom";

const Navbar = ({ onChange }) => (
  <nav className="navbar">
    <figure className="navbar--logo-container">
      <Link to="/" >
        <img src={logo} alt="Uma imagem impressionante" />
      </Link>
    </figure>
    <div className="navbar--center-container">
      <input
        role="search"
        placeholder="Procure uma receita"
        aria-labelledby="search"
        onChange={onChange}

      />
    </div>
    <div className="navbar--right-container">
      <Link to={"/register"}>
        <AddButton />
      </Link>
    </div>
  </nav>
);

export { Navbar };
