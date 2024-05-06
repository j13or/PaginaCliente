import React from "react";
import "./pagesStyle/QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div className="QuienesSomos_container">
      <section className="QuienesSomos_sectionOne">
        <article className="QuienesSomos_sectionOne_article">
          <h1>Quienes Somos</h1>
        </article>
        <img src="./man-working.jpeg" alt="" />
      </section>
      <section className="QuienesSomos_sectionTwo">
        <div className="QuienesSomos_sectionTwo_div">
          <article className="QuienesSomos_sectionTwo_div-article">
            <img src="./WhatsApp1.jpeg" alt="" />
            <h3>Conozca sobre nosotros</h3>
            <h2>¿Que es Bolivia Dent?</h2>
          </article>
          <img
            src="./WhatsApp2.jpeg"
            alt=""
            className="QuienesSomos_sectionTwo_div-img"
          />
        </div>
        <p>
          Somos una clínica dental conformada por profesionales especialistas y
          comprometidos en brindar a nuestros pacientes la más alta calidad de
          atención. Ofrecemos una amplia gama de servicios dentales, desde
          odontología general hasta tratamientos más especializados, y siempre
          estamos actualizados con los últimos avances en tecnología dental.
          Creemos que todos merecen tener una sonrisa hermosa y saludable, y
          estamos dedicados a ayudar a nuestros pacientes a lograrlo. Ofrecemos
          un ambiente cálido y acogedor, y tratamos a cada paciente con
          compasión y respeto. Si está buscando una clínica dental que le brinde
          la mejor atención posible, ¡no busque más allá de Somos Bolivia Dent!
        </p>
      </section>
      <section className="QuienesSomos_sectionThree">
        <article className="QuienesSomos_sectionThree_articleOne">
          <h3>Preguntas frecuentes</h3>
          <h2>Tiene alguna ¿Preguntas?</h2>
          <p>
            Aqui podrás encontrar algunas preguntas frecuentes que nos dejan
            nuestros pacientes, si no encuentras la respuesta que estabas
            buscando puedes escibirnos al WhatsApp.
          </p>
        </article>
        <article className="QuienesSomos_sectionThree_articleTwo">
          <h4>¿Cuáles son, los horarios de atención?</h4>
          <p style={{ paddingTop: "20px" }}>Lunes a Viernes</p>
          <p>09:00 a 13:00 y 14:00 a 20:00.</p>
          <p style={{ paddingTop: "20px" }}>Sabado</p>
          <p>9:00am – 13:00pm</p>
        </article>
      </section>
    </div>
  );
};

export default QuienesSomos;
