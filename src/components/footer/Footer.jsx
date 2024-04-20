import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './footer.css';

const Footer = () => {
const navigate = useNavigate();

  return (
    <Container fluid= 'true' className="footer-container container-fluid">
      <Row fluid= 'true' className="justify-content-space-between">
      <Col fluid= 'true'>
          <Card style={{ width: '100%', height: '10rem'}} id="cardFooter">
            <Card.Body>
              <img src="./src/img/logo.jpeg" width= "100" className="rounded-circle" id="img-card-footer" alt="Logo" />
              
              <h5 id="h5">InventoryIQ</h5>
            </Card.Body>
          </Card>
        </Col>

        <Col fluid= 'true'>
          <Card style={{ width: '100%', height: '10rem' }} id="cardFooter">
            <Card.Body>
              <Card.Title>
                <h5 id="h5">Nuestras redes sociales</h5>
              </Card.Title>
              <div className="container-icon-footer d-flex justify-content-between m-1 p-0">
                <img src="../src/img/square-facebook.svg" className="icon-footer" alt="" />
                <img src="../src/img/square-instagram.svg" className="icon-footer" alt="" />
                <img src="../src/img/square-x-twitter.svg" className="icon-footer" alt="" />
                <img src="../src/img/square-whatsapp.svg" className="icon-footer" alt="" />
              </div>
              <div className="container-icon-footer d-flex justify-content-between m-1 p-0">
                <img src="../src/img/facebook-messenger.svg" className="icon-footer" alt="" />
                <img src="../src/img/google.svg" className="icon-footer" alt="" />
                <img src="../src/img/telegram.svg" className="icon-footer" alt="" />
                <img src="../src/img/youtube.svg" className="icon-footer" alt="" />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col fluid= 'true'>
        <Card style={{ width: '100%' }} id="cardFooter">
  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
    <Button id="btn-footer" variant="primary" onClick={() => navigate("/about")} className="mb-0">Quienes somos</Button>
    <Button id="btn-footer" variant="primary" onClick={() => navigate("/error404")} className="mb-0">Preguntas frecuentes</Button>
    <Button id="btn-footer" variant="primary" onClick={() => navigate("/contacto")} className="mb-0">Contacto</Button>
  </Card.Body>
</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;