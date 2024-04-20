import { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { ConsContext } from '../../context/ConsultasContext';
import { v4 as uuidv4 } from "uuid";
import './formRespuesta.css';

const FormRespuesta = ({ initialValues }) => {
  const { addConsultas } = useContext(ConsContext);

 
  const [consultas, setConsultas] = useState({
    id: uuidv4(),
    nombre: "",
    mail: "",
    respuesta: ""
  });

  
  useEffect(() => {
    if (initialValues) {
      setConsultas({
        id: initialValues.id || uuidv4(), 
        nombre: initialValues.nombre || "",
        mail: initialValues.mail || "",
        respuesta: "" 
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    setConsultas({
      ...consultas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addConsultas(consultas);
    setConsultas({
      id: uuidv4(),
      nombre: "",
      respuesta: ""
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Destinatario</Form.Label>
          <Form.Control
            type="text"
            value={consultas.nombre}
            name="nombre"
            onChange={handleChange}
            placeholder="Juan Perez" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            value={consultas.mail}
            name="mail"
            onChange={handleChange}
            placeholder="juanperez@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formObservaciones">
          <Form.Label>Respuesta</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={consultas.respuesta}
            name="respuesta"
            onChange={handleChange} />
        </Form.Group>
      </Form>
    </>
  );
};

export default FormRespuesta;