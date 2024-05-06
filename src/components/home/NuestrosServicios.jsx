import React from "react";
import "./homeStyle/NuestrosServicios.css";

const NuestrosServicios = () => {
  return (
    <section className="NuestrosServicios_container">
      <h3>Algunos de</h3>
      <h2>Nuestros Servicios</h2>
      <div className="NuestrosServicios_articlesContainer">
        <article className="NuestrosServicios_article">
          <img src="./at-dentist-with-smile-scale.jpg" alt="" />
          <h4>Estetica Dental</h4>
          <p>
            La estética dental es una rama de la odontología dedicada a resolver
            problemas relacionados con la armonía bucal, el objetivo principal
            es conseguir la sonrisa perfecta. El tratamiento que se aplica a las
            personas que presentan asimetrías en la cavidad bucal.
          </p>
        </article>
        <article className="NuestrosServicios_article">
          <img
            src="./girl-with-braces-during-routine-dental-examination-scaled.jpeg"
            alt=""
          />
          <h4>Ortodoncia</h4>
          <p>
            La ortodoncia es la rama de la odontología que se encarga de los
            problemas de los dientes y la mandíbula. La atención dental con
            ortodoncia incluye el uso de dispositivos, tales como los llamados
            (frenos), para: Enderezar los dientes y corregir problemas con la
            mordida.
          </p>
        </article>{" "}
        <article className="NuestrosServicios_article">
          <img src="./implantologia.jpeg" alt="" />
          <h4>Implantología</h4>
          <p>
            La implantología dental es una disciplina odontológica que se dedica
            al reemplazo de dientes perdidos mediante la colocación quirúrgica
            de un implante dental en el maxilar o la mandíbula. A día de hoy se
            considera una de las técnicas más eficaces de rehabilitación dental.
          </p>
        </article>{" "}
        <article className="NuestrosServicios_article">
          <img src="./odontopediatria.jpeg" alt="" />
          <h4>Odontopediatría</h4>
          <p>
            La Odontopediatría, es una especialidad de la Odontología que se
            encarga en cuidado de los dientes de los infantes, desde su
            nacimiento hasta la pubertad. Los profesionales en esta área se
            encargan de brindar todo el asesoramiento y tratamientos adecuados
            para cada pacientito.
          </p>
        </article>
      </div>
    </section>
  );
};

export default NuestrosServicios;
