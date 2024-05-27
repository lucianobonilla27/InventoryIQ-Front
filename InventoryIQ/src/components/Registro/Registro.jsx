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
    _id: editUsuario ? editUsuario._id : uuidv4(),
    name: editUsuario ? editUsuario.name : "",
    email: editUsuario ? editUsuario.email : "",
    password: "",
    repeatPassword: "",
    admin: editUsuario ? editUsuario.admin : false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setUsuario({ ...usuario, [name]: checked });
    } else {
      setUsuario({ ...usuario, [name]: value });
    }
  };

  const handleSubmit = async (e) => { // Ahora es una función asíncrona
    e.preventDefault();

    if (editUsuario && (!usuario.password || !usuario.repeatPassword)) {
      enviarFormulario();
      return;
    }

    if (!usuario.name || !usuario.email || !usuario.password || !usuario.repeatPassword) {
      swal.fire ({
        title: "Error",
        text: "Por favor, complete todos los campos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (usuario.password !== usuario.repeatPassword) {
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
        text: "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial (@,$,!,%,*,?,&)",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    enviarFormulario(); // Llama a la función enviarFormulario
  };

  const enviarFormulario = async () => {
    try {
      let response;
      if (editUsuario) {
        response = await editarUsuario({ ...editUsuario, admin: usuario.admin });
      } else {
        response = await addUser(usuario);
      }
  
      if (response.status === 201 || response.status === 200) {
        swal.fire({
          title: "Operación exitosa",
          text: editUsuario ? "Usuario editado con éxito" : "Usuario registrado correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        setUsuario({
          _id: uuidv4(),
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
          admin: false,
        });
      } else {
        // Intenta leer el cuerpo de la respuesta como JSON para obtener detalles adicionales sobre el error.
        const errorData = await response.json();
        throw new Error(errorData.message || "Hubo un problema al procesar la solicitud");
      }
    } catch (error) {
      console.error("Error:", error);
      swal.fire({
        title: "Error",
        text: error.response?.data?.message || error.message || "Hubo un problema al procesar la solicitud",
        icon: "error",
        confirmButtonText: "Aceptar",
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
                value={usuario.name}
                onChange={handleChange}
                name="name"
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
                value={usuario.repeatPassword}
                onChange={handleChange}
                name="repeatPassword"
                disabled={editUsuario ? true : false}
              />
            </Form.Group>
            {editUsuario ? (
              <FormGroup className="mt-3" controlId="formBasicCheckbox">
                <FormCheck
                  type="checkbox"
                  label="Admin"
                  checked={usuario.admin}
                  onChange={handleChange}
                  name="admin"
                />
              </FormGroup>
            ) : null}

            {editUsuario ? (
              <Button className="w-100 mt-3" type="submit" variant="primary">
                Editar usuario
              </Button>
            ) : (
              <Button className="w-100 mt-3 border-0" variant="primary" type="submit">
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
