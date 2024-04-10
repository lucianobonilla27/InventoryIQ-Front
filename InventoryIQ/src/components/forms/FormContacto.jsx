import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ConsContext } from '../../context/ConsultasContext';
import { v4 as uuidv4 } from "uuid";
import Swal from 'sweetalert2';
import './formContacto.css';

const FormContacto = () => {
const { addConsultas } = useContext(ConsContext);
const [consultas, setConsultas] = useState({
        id: uuidv4(),
        nombre: "",
        mail: "",
        telefono: "",
        rubro: "",
        consulta: ""
    });

const [errors, setErrors] = useState({});

const handleChange = (e) => {
        setConsultas({
        ...consultas,
        [e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

const formErrors = {};
        if (consultas.nombre.trim() === '') {
            formErrors.nombre = "Por favor, ingrese su nombre";
        }
        if (consultas.mail.trim() === '') {
            formErrors.mail = "Por favor, ingrese su correo electrónico";
        }
        if (consultas.telefono.trim() === '') {
            formErrors.telefono = "Por favor, ingrese su teléfono de contacto";
        }
        if (consultas.rubro.trim() === '') {
            formErrors.rubro = "Por favor, seleccione el rubro de la empresa";
        }
        if (consultas.consulta.trim() === '') {
            formErrors.consulta = "Por favor, escriba su consulta";
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
           
            Swal.fire({
                icon: "error",
                title: "Atención",
                text: "Todos los campos del formulario son obligatorios",
                timer: 1500
            });
        } else {
           
            addConsultas(consultas);
            setConsultas({
                id: uuidv4(),
                nombre: "",
                mail: "",
                telefono: "",
                rubro: "",
                consulta: ""
            });
            Swal.fire({
                icon: "success",
                title: "Consulta enviada",
                text: "Su consulta ha sido enviada correctamente",
                timer: 1500
            });
         
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Apellido y nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={consultas.nombre}
                        name="nombre"
                        onChange={handleChange}
                        placeholder="Juan Perez"
                        isInvalid={!!errors.nombre}
                        pattern="[A-Za-zÁÉÍÓÚáéíóúÜüÑñ' ]{1,}"
                        maxlength="50"
                        minlength="2"
                    />
                    
                    <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        value={consultas.mail}
                        name="mail"
                        onChange={handleChange}
                        placeholder="juanperez@example.com"
                        isInvalid={!!errors.mail}
                    />
                    <Form.Control.Feedback type="invalid">{errors.mail}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label>Teléfono de contacto</Form.Label>
                    <Form.Control
                        type="text"
                        inputMode="numeric"
                        value={consultas.telefono}
                        name="telefono"
                        onChange={handleChange}
                        placeholder="3815489665"
                        isInvalid={!!errors.telefono}
                        pattern="^[0-9]+$"
                        minlength="6"
                        maxlength="15"
                    />
                    <Form.Control.Feedback type="invalid">{errors.telefono}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRubro">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select
                        value={consultas.rubro}
                        name="rubro"
                        onChange={handleChange}
                        isInvalid={!!errors.rubro}
                    >
                        <option value="">Seleccionar categoría...</option>
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
                    <Form.Control.Feedback type="invalid">{errors.rubro}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConsulta">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={consultas.consulta}
                        name="consulta"
                        onChange={handleChange}
                        isInvalid={!!errors.consulta}
                        maxLength={500}
                    />
                    <Form.Control.Feedback type="invalid">{errors.consulta}</Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="d-block mx-auto">Enviar consulta</Button>
            </Form>
        </>
    );
};

export default FormContacto;