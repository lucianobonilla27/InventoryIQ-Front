import {Routes, Route} from "react-router-dom"
import Home from "../../../view/home/Home"
import About from "../../../view/about/About"
import Contacto from "../../../view/contacto/Contacto"
import Admin from "../../../view/admin/Admin"

const Rutas = () => {
  return (
    <>
    <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/about" element = {<About/>} />
    <Route path = "/contacto" element = {<Contacto/>} />
    <Route path = "/admin" element = {<Admin/>} />
       
        </Routes> 
    </>
  )
}

export default Rutas