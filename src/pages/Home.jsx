import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./pagesStyle/Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const { register, handleSubmit, reset } = useForm();

  const [fecha, setFecha] = useState("");
  const [allConsultorios, setallConsultorios] = useState();
  const [selectConsultorio, setselectConsultorio] = useState();

  console.log(selectConsultorio);
  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/consultorio`;
    axios

      .get(url)
      .then((res) => {
        setallConsultorios(res.data.consultorios);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = (data) => {
    const url = `${
      import.meta.env.VITE_URL_API
    }/cita-linea/${selectConsultorio}`;

    const fechaSeleccionada = new Date(fecha);
    const fechaActual = new Date();

    if (fechaSeleccionada >= fechaActual) {
      axios
        .post(url, data)
        .then((res) => {
          toast.success("La cita se envió exitosamente");
          reset();
        })
        .catch((err) => {
          console.error(err);
          toast.error("Hubo un error al enviar la cita");
        });
    } else {
      toast.error(
        "La fecha seleccionada no puede ser anterior a la fecha actual"
      );
    }
  };

  function soloLetrasYEspacios(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      !(charCode >= 65 && charCode <= 90) && // Letras mayúsculas
      !(charCode >= 97 && charCode <= 122) && // Letras minúsculas
      charCode !== 32 && // Espacio
      charCode !== 8 // Tecla de retroceso
    ) {
      event.preventDefault();
    }
  }

  return (
    <div className="Home_comtainer">
      <img src="./1.jpg" alt="" className="Home_image1" />
      <h1>Solicita Una Cita</h1>
      <form className="Home_form" onSubmit={handleSubmit(submit)}>
        <h2>Completa el formulario y nos comunicaremos contigo ¡Gracias!</h2>
        <section className="HomeForm_sectionOne">
          <div className="crearCita__div">
            <label htmlFor="nombresApellidos">Nombre y Apellidos*</label>
            <input
              {...register("nombresApellidos")}
              id="nombresApellidos"
              type="text"
              onKeyPress={soloLetrasYEspacios}
              required
            />
          </div>
          <div className="crearCita__div">
            <label htmlFor="correo">Correo Electronico*</label>
            <input {...register("correo")} id="correo" type="email" required />
          </div>
          <div className="crearCita__div">
            <label htmlFor="telefono">Telefono*</label>
            <input
              {...register("telefono")}
              id="telefono"
              type="number"
              required
            />
          </div>
          <div className="crearCita__div">
            <label htmlFor="fecha">Fecha*</label>
            <input
              {...register("fecha")}
              id="fecha"
              type="date"
              required
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="crearCita__div">
            <label htmlFor="hora">Hora*</label>
            <input {...register("hora")} id="hora" type="time" required />
          </div>
          <div className="crearCita__div">
            <label htmlFor="comentario">comentario*</label>
            <textarea
              {...register("comentario")}
              id="comentario"
              type="text"
              rows={5}
              required
            />
          </div>

          <div className="crearCita__div">
            <label htmlFor="consultorioID">Seleccione un Consultorio*</label>
            <select
              id="consultorioID"
              onChange={(e) => setselectConsultorio(e.target.value)}
              value={selectConsultorio}
            >
              <option value="0">Seleccionar</option>
              {allConsultorios?.map((consultorio) => (
                <option key={consultorio.id} value={consultorio.id}>
                  {consultorio.nombreConsultorio}, {consultorio.direccion}
                </option>
              ))}
            </select>
            {selectConsultorio &&
            allConsultorios.find(
              (consultorio) => consultorio.id === parseInt(selectConsultorio)
            ) ? (
              <a
                href={
                  allConsultorios.find(
                    (consultorio) =>
                      consultorio.id === parseInt(selectConsultorio)
                  ).linkGoogleMaps
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver consultorio en el mapa
              </a>
            ) : null}
          </div>
        </section>
        <button type="submit">Enviar</button>
      </form>{" "}
    </div>
  );
};

export default Home;
