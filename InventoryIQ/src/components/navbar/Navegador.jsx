
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style.css'; 


const Navegador = () => {
  return (
    <Navbar className="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#link">Admin</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegador;
