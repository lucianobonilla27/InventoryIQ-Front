import { useContext, useState } from "react";
import { Container, Navbar, Nav, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login.jsx";
import { UsuariosProvider } from "../../context/UsuariosContext.jsx";
import "./style.css";

const Navegador = () => {
  const [showLogin, setShowLogin] = useState(false);

  const { logout } = useContext(UsuariosProvider);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); //como está guardado como string lo traemos como objetos y lo guardamos en la variable user.

  return (
    <>
      <Navbar className="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              src="./logo.jpeg"
              height="30"
              className="d-inline-block align-top rounded-circle"
              alt="Logo"
            />
            {" InventoryIQ"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {" "}
              {/* SI USER ES TRUE ENTRA COMO USUARIO NORMAL, SI ISADMIN ES TRUE MOSTRAME EL ADMIN. */}
              {user?.admin ? (
                <Nav.Link onClick={() => navigate("/admin")}>Admin</Nav.Link>
              ) : null}
              <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
              <Nav.Link onClick={() => navigate("/contacto")}>
                Contacto
              </Nav.Link>
            </Nav>

            {user ? ( //si está registrado, tengo algo en el localstorage aparecerá el boton de cerrar sesion, sino el de login.
              <Button
                className="m-1"
                variant="primary"
                onClick={() => logout()}
              >
                Cerrar Sesion
              </Button>
            ) : (
              <Button
                className="m-1"
                variant="primary"
                onClick={handleShowLogin}
              >
                Ingresar
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header
          style={{
            border: 0,
            mx: 0,
            backgroundColor: "#DDE6ED",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "0",
            
          }}
        >
          <Modal.Title>Iniciar sesión</Modal.Title>
          <button
            className="btn-close"
            onClick={handleCloseLogin}
            style={{
              padding: "10px",
              right: "6px",
              top: "5px",
              position: "absolute",
            }}
          ></button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#DDE6ED", borderRadius: '0 0 8px 8px', margin: 0, padding: "30px" }}>
          <Login handleClose={handleCloseLogin} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navegador;
