import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactanos = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form submission
    const form = formRef.current;
    console.log(formRef.current); // Verifica si esto imprime el formulario HTML en la consola

    emailjs
      .sendForm(
        "service_6rv1qdl",
        "template_jklu78m",
        form,
        "_3jiepsyN18d8ZuGd"
      )
      .then((result) => {
        form.reset();
        toast("💌 El Correo se envio exitosamente 📩", {
          position: "top-right",
          autoClose: 5001,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <section className="contact__section-three">
        <h3>ENVÍAME UN CORREO ELECTRÓNICO</h3>
        <form ref={formRef} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
            />
          </div>
          <div>
            <label htmlFor="whatssap">Whatssap:</label>
            <input
              type="text"
              name="whatssap"
              id="whatssap"
              placeholder="+51 987654321"
            />
          </div>
          <div>
            <label htmlFor="case">Asunto:</label>
            <input
              type="text"
              name="case"
              id="case"
              placeholder="case"
              required
            />
          </div>
          <div style={{ width: "90%" }}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              placeholder="message"
              required
            />
          </div>
          <div style={{ width: "90%" }}>
            <button className="contactSectionThree__button" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contactanos;
