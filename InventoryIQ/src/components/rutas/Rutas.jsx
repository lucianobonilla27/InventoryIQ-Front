
import { Routes, Route } from "react-router-dom";
import Home from "../../view/home/Home.jsx";
import About from "../../view/about/About.jsx";
import Contacto from "../../view/contacto/Contacto.jsx";
import Admin from "../../view/admin/Admin.jsx";
import Registro from "../../components/Registro/Registro.jsx";


const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default Rutas;
