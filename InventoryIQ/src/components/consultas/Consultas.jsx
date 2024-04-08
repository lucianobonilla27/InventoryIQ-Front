import { useContext } from "react"
import {ConsContext} from "../../context/ConsultasContext";


const Consultas = () => {

const {consultas} = useContext(ConsContext);
console.log (consultas, "Consultas viniendo desde el contexto");

  return (
    <>
      <h1>Consultas</h1>
    </>
  )
}


export default Consultas
