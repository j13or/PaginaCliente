import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <ToastContainer />
      <Home />
    </>
  );
}

export default App;
