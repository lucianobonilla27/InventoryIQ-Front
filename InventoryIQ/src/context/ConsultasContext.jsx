import { createContext ,useEffect, useState } from 'react';
import axios from 'axios';

export const ConsContext = createContext();

const ConsultasContext = ({ children }) => {
  const [consultas, setConsultas] = useState([]);
  

  //GET CONSULTAS
  const getConsultas = async () => {
    try {
      const response = await axios.get('https://inventoryiq.onrender.com/api/contact');
      setConsultas(response.data);
    } catch (error) {
      console.log(error); 
    }
  };
  //ADD CONSULTAS
  const addConsultas = async (consulta) => {
    try {
      const response = await axios.post('https://inventoryiq.onrender.com/api/newConsulta', consulta);
        setConsultas(response.data);
    } catch (error) {
      console.log(error); 
    }
  };
  
  // DELETE CONSULTAS
  const deleteConsultas = async (id) => {
    try {
      await axios.delete(`https://inventoryiq.onrender.com/api/deleteConsulta/${id}`);
      setConsultas(consultas => consultas.filter(consulta => consulta._id !== String(id))); 
    } catch (error) {
      console.log(error); 
    }
  };
  useEffect(() => {
    getConsultas();
  }, []);

 

  return (
    <ConsContext.Provider value={{ consultas, getConsultas, addConsultas, deleteConsultas}}>
      {children}
    </ConsContext.Provider>
  );
};

export default ConsultasContext;