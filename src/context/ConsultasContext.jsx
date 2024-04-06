import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ConsContext = createContext();

const ConsultasContext = ({ children }) => {
  const [consultas, setConsultas] = useState([]);

  // GET ---->TRAER CONSULTAS
  const getConsultas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/consultas');
      setConsultas(response.data);
    } catch (error) {
      console.log(error); 
    }
  };

  // POST ---->CREAR CONSULTAS
  const addConsultas = async (consulta) => {
    try {
      const response = await axios.post('http://localhost:8000/consultas', consulta);
      setConsultas(consultas => [...consultas, response.data]);
    } catch (error) {
      console.log(error); 
    }
  };

  // DELETE---->ELIMINAR CONSULTAS
  const deleteConsultas = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/consultas/${id}`);
      setConsultas(consultas => consultas.filter(consulta => consulta.id !== id)); 
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    getConsultas();}, []);
  console.log(consultas, 'Consultas en el contexto');

  return (
    <ConsContext.Provider value={{ consultas, getConsultas, addConsultas, deleteConsultas }}>
      {children}
    </ConsContext.Provider>
  );
};

export default ConsultasContext;
