import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pagesStyle/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="Footer_container">
      <div className="Footer_sectionsContainer">
        <section className="Footer_sectionOne">
          <h4>Contactos</h4>
          <ul>
            <li>
              <i className="bx bxs-phone-call"></i>
              <p>La Paz - 62537828</p>
            </li>
            <li>
              <i className="bx bxs-envelope"></i>{" "}
              <p>odontomedicspa13@gmail.com</p>
            </li>
            <li>
              <i className="bx bxs-map-pin"></i>{" "}
              <p>
                Calle Abdón Saavedra y Landaeta, Edificio Albacete n° 1920,a
              </p>
            </li>
          </ul>
        </section>
        <section className="Footer_sectionTwo">
          <h4>Menu</h4>
          <div>
            <Link to="/">Inicio</Link>
            <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            <Link to="/contactanos">Contáctanos</Link>
            <Link to="/cita">Cita Dental</Link>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Iniciar Sesion
            </a>
          </div>
        </section>
        <section className="Footer_sectionThree">
          <h4>Cita</h4>
          <button onClick={() => navigate("/cita")}>Hacer una Cita</button>
        </section>
      </div>
      <div className="Footer_byContainer">
        <i class="bx bx-copyright"></i>
        <p>Creador por Jorge Galvez</p>
      </div>
    </div>
  );
};

export default Footer;
