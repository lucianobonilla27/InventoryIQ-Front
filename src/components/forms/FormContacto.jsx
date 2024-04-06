import {useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ConsContext } from '../../context/ConsultasContext';
import { v4 as uuidv4} from "uuid";
import './formContacto.css';

const FormContacto = () => {

    const {addConsultas} = useContext(ConsContext);

     // ESTADO INICIAL DEL FORMULARIO

    const [consultas, setConsultas] = useState({
    id: uuidv4 (),
    nombre: "",
    mail: "",
    telefono: "",
    rubro: "",
    consulta: ""
    })

  const handleChange = (e) => {
   setConsultas({
    ...consultas,
    [e.target.name] : e.target.value,

   });

};


  const handleSubmit = (e) => {
    e.preventDefault();
    addConsultas(consultas);
    setConsultas({
        id: uuidv4 (),
        nombre: "",
        mail: "",
        telefono: "",
        rubro: "",
        consulta: ""
    });
      
    };

  
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Apellido y nombre</Form.Label>
                    <Form.Control
                    type="text"
                    value={consultas.nombre}
                    name= "nombre"
                    onChange={handleChange}
                    placeholder="Juan Perez" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email"
                    value={consultas.mail}
                    name= "mail"
                    onChange= {handleChange}
                    placeholder="juanperez@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label>Teléfono de contacto</Form.Label>
                    <Form.Control type="number"
                    value={consultas.telefono}
                    name= "telefono"
                    onChange= {handleChange}
                    placeholder="3815489665" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRubro">
                    <Form.Label>Rubro de la empresa</Form.Label>
                    <Form.Select value={consultas.rubro}
                    name= "rubro"
                    onChange={handleChange}>
                        <option value="">Seleccionar rubro...</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Pastas">Pastas</option>
                        <option value="Lácteos">Lácteos</option>
                        <option value="Panadería">Panadería</option>
                        <option value="Granos">Granos</option>
                        <option value="Frutas">Frutas</option>
                        <option value="Verduras">Verduras</option>
                        <option value="Carnes">Carnes</option>
                        <option value="Snacks">Snacks</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formObservaciones">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    value={consultas.consulta}
                    name="consulta"
                    onChange= {handleChange} />
                </Form.Group>

                <Button type="submit" className="d-block mx-auto">Enviar consulta</Button>

            </Form>
        </>
    );
};

export default FormContacto;

