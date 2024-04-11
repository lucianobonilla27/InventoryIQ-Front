import { useContext } from "react";
import { UsuariosProvider } from "../../context/UsuariosContext";
import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  FormGroup,
  FormCheck,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert2";
import "./registro.css";

const RegistroFormulario = ({ editUsuario, handleClose }) => {
  const { addUser, editarUsuario } = useContext(UsuariosProvider);

  const [usuario, setUsuario] = useState({
    id: editUsuario ? editUsuario.id : uuidv4(),
    nombre: editUsuario ? editUsuario.nombre : "",
    email: editUsuario ? editUsuario.email : "",
    password: editUsuario ? editUsuario.password : "",
    confirmPassword: editUsuario ? editUsuario.confirmPassword : "",
    isAdmin: editUsuario ? editUsuario.isAdmin : false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setUsuario({ ...usuario, [name]: checked });
    } else {
      setUsuario({ ...usuario, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario.nombre || !usuario.email || !usuario.password || !usuario.confirmPassword) {
      swal.fire ({
        title: "Error",
        text: "Por favor, complete todos los campos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (usuario.password !== usuario.confirmPassword) {
      swal.fire ({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(usuario.password)) {
      swal.fire ({
        title: "Error",
        text: "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (editUsuario) {
      editarUsuario({...editUsuario, isAdmin: usuario.isAdmin});
      swal.fire({
        title: "Usuario editado",
        text: "Usuario editado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
        timer: 1500,
      });
      handleClose();
      setUsuario({
        id: uuidv4(),
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAdmin: false,
      });
    } else {
      addUser(usuario);
      swal.fire({
        title: "Registro exitoso",
        text: "Usuario registrado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setUsuario({
        id: uuidv4(),
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAdmin: false,
      });
    }
  };

  return (
    <Container className="registro-container">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className="form-registro">
            <h1 className="fs-3 text-center">Formulario de registro</h1>
            <Form.Group className="mt-2" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={usuario.nombre}
                onChange={handleChange}
                name="nombre"
                disabled={editUsuario ? true : false}
              />
            </Form.Group>
            <Form.Group className="mt-2" controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={usuario.email}
                onChange={handleChange}
                name="email"
                disabled={editUsuario ? true : false}
              />
            </Form.Group>
            <Form.Group className="mt-2" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={usuario.password}
                onChange={handleChange}
                name="password"
                disabled={editUsuario ? true : false}
              />
            </Form.Group>
            <Form.Group className="mt-2" controlId="formConfirmPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repite tu contraseña"
                value={usuario.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                disabled={editUsuario ? true : false}
              />
            </Form.Group>
            {editUsuario ? (
              <FormGroup className="mt-3" controlId="formBasicCheckbox">
                <FormCheck
                  type="checkbox"
                  label="Admin"
                  checked={usuario.isAdmin}
                  onChange={handleChange}
                  name="isAdmin"
                />
              </FormGroup>
            ) : null}

            {editUsuario ? (
              <Button className="w-100 mt-3" type="submit" variant="primary">
                Editar usuario
              </Button>
            ) : (
              <Button className="w-100 mt-3" variant="primary" type="submit">
                Registrarse
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistroFormulario;
