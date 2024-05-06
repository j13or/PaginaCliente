import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./pages/Header";
import CitaDental from "./pages/CitaDental";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import QuienesSomos from "./pages/QuienesSomos";
import Contactanos from "./pages/Contactanos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cita" element={<CitaDental />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/sobre-nosotros" element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
