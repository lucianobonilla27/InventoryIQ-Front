import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './formContacto.css';

const FormContacto = () => {
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [rubro, setRubro] = useState('');
    const [observaciones, setObservaciones] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setRubro(e.target.value);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Apellido y nombre</Form.Label>
                    <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Juan Perez" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="juanperez@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label>Teléfono de contacto</Form.Label>
                    <Form.Control type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="3815489665" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRubro">
                    <Form.Label>Rubro de la empresa</Form.Label>
                    <Form.Select value={rubro} onChange={handleChange}>
                        <option value="">Seleccionar rubro...</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Alimentos">Alimentos</option>
                        <option value="Tecnología">Golosinas</option>
                        <option value="Tecnología">Limpieza</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formObservaciones">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control as="textarea" rows={3} value={observaciones} onChange={(e) => setObservaciones(e.target.value)} />
                </Form.Group>

                <Button type="submit" className="d-block mx-auto">Enviar consulta</Button>

            </Form>
        </>
    );
};

export default FormContacto;

