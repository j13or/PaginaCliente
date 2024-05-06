import React from "react";
import "./pagesStyle/Home.css";
import { useNavigate } from "react-router-dom";
import NuestrosServicios from "../components/home/NuestrosServicios";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home_container">
      <section className="Home_sectionOne">
        <img src="./2.jpeg" alt="" className="homeSectionOne_Image" />
        <article className="Home_sectionOne_article">
          <h1>Bolivia Dent, tu clínica de Confianza</h1>
          <h2>
            Inicia todos <br />
            tus días con una
          </h2>
          <div className="Home_sectionOne_article-div">
            <h2 className="Home_sectionOne_article-div-h2">
              Sonrisa <img src="./underline.png" alt="" />
            </h2>
            <h2>hermosa</h2>
          </div>
          <button onClick={() => navigate("/cita")}>Hacer una Cita</button>
        </article>
      </section>
      <section className="Home_sectionTwo">
        <a
          href="https://www.youtube.com/watch?v=NtCb2-YNM1s"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src="./dentist-and-patient-2.jpg" alt="" />
        </a>

        <article className="Home_sectionTwo_artcile">
          <h3>En Bolivia Dent logramos que tengas</h3>
          <h2>Una sonrisa que se adapte a tu estilo de vida</h2>
          <p>
            Ofrecemos una variedad de especialidades para cuidar tu sonrisa y de
            los que más quieres.
          </p>

          <p>Nuestras especialidades son:</p>

          <ul>
            <li>
              <i class="bx bx-check"></i>Odontopediatría
            </li>
            <li>
              <i class="bx bx-check"></i>Ortodoncia
            </li>
            <li>
              <i class="bx bx-check"></i>Implantología
            </li>
            <li>
              <i class="bx bx-check"></i>Estetica Dental
            </li>
          </ul>
          <button onClick={() => navigate("/cita")}>Hacer una Cita</button>
        </article>
      </section>
      <NuestrosServicios />
    </div>
  );
};

export default Home;
