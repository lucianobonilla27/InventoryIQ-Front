
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style.css';
import { useNavigate} from 'react-router-dom';


const Navegador = () => {
  const navigate = useNavigate ()

  return (
    <Navbar className="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick = {() =>navigate ("/")}>
          <img
            src="./logo.jpeg"
            height="30"
            className="d-inline-block align-top rounded-circle"
            alt="Logo"
          />
          {' InventoryIQ'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Alineación a la derecha */}
            <Nav.Link onClick = {() =>navigate ("/admin")}>Admin</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/about")}>About</Nav.Link>
            <Nav.Link onClick = {() =>navigate ("/contacto")}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegador;
