import React, { useState } from "react";
import "./pagesStyle/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [viewMain, setviewMain] = useState(false);
  return (
    <header className="Header__container">
      <div className="Header__buttons">
        {viewMain ? (
          <i className="bx bx-menu" onClick={() => setviewMain(false)}></i>
        ) : (
          <i className="bx bx-x" onClick={() => setviewMain(true)}></i>
        )}
      </div>
      <img src="./logo.jpeg" alt="" />
      <section className={`Header__sectionOne  ${viewMain ? "closeMain" : ""}`}>
        <Link to="/">Inicio</Link>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <Link to="/contactanos">Contáctanos</Link>
        <Link to="/cita">Cita Dental</Link>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Iniciar Sesion
        </a>
      </section>
    </header>
  );
};

export default Header;
