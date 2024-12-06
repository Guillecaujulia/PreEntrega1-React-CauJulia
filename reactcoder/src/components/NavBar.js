import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import GuilsoftLogo from "./img/LOGO GUILSOFT.png"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="www.guilsoft.com" url={GuilsoftLogo}>
        Guilsoft
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              {" "}
              Sobre Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              Catalogo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contacto
            </a>
          </li>
          <li className="nav-item"></li>
        </ul>
      </div>
      <CartWidget /> {}
    </nav>
  );
}

export default NavBar;
