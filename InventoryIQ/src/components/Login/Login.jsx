import { useState, useContext } from "react";
import {Form ,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsuariosProvider } from "../../context/UsuariosContext";
import Swal from "sweetalert2";


const Login = ({ handleClose }) => {


  const [email, setEmail] = useState(""); //con el onChange del input ingreso datos que son guardados en el estado.
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { usuarios } = useContext(UsuariosProvider); //son los usuarios que me traigo de la db.
  // console.log(usuarios, "usuarios desde el login");


  const handleSubmit = (e) => {
    e.preventDefault();
    try { //usuarios.find son los usuarios que me traigo de la db.
      const user = usuarios.find((user) => user.email === email && user.password === password); //recorre el array de usuarios, los guarda en user y compara los datos ingresados con los de la db.
      if (user) {
        Swal.fire({
          title: "Bienvenido",
          text: "Sesión iniciada con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 2000,
        });
        localStorage.setItem("user", JSON.stringify(user)); //pasamos los datos del usuario como string para guardarlos en el localstorage.
        navigate("/"); //una vez registrado nos lleva al home
        window.location.reload();
        handleClose();

      } else {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
          timer: 2000,
        })
      }


    } catch (error) {
      console.log(error)
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
            
          />
        </Form.Group>
      <Button className="w-100" type="submit"> Iniciar sesión </Button>
      </Form>
      <Button className="w-100 mt-2 bg-danger border-0" onClick={registro}>
      Registrarse
      </Button>

    </>
  );
};

export default Login;



