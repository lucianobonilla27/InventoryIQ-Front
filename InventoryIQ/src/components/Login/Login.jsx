import { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsuariosProvider } from "../../context/UsuariosContext";
import Swal from "sweetalert2";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Estado para controlar el estado de carga

  const navigate = useNavigate();
  const { loginUser, usuarioLogeado } = useContext(UsuariosProvider);

  useEffect(() => {
    if (usuarioLogeado) {
      Swal.fire({
        title: "Bienvenido",
        text: "Sesión iniciada con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        navigate(0);
        handleClose();
      });
    }
  }, [usuarioLogeado, navigate, handleClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Evitar múltiples envíos mientras se está procesando la solicitud
    setLoading(true); // Establecer el estado de carga a true

    try {
      await loginUser({ email, password });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Usuario o contraseña incorrectos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false); // Establecer el estado de carga a false después de completar la solicitud
    }
  };

  const registro = () => {
    navigate("./registro");
    handleClose();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su email"
            disabled={loading} // Deshabilitar el input durante la carga
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Ingrese su contraseña"
            disabled={loading} // Deshabilitar el input durante la carga
          />
        </Form.Group>
        <Button className="w-100 border-0" type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar sesión'}
        </Button>
      </Form>
      <Button className="w-100 mt-2 border-0" onClick={registro}>
        Registrarse
      </Button>
    </>
  );
};

export default Login;
