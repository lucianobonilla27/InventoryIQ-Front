import { Container, Row, Col, Card } from 'react-bootstrap';
import FormContacto from '../../components/forms/FormContacto';
import './contacto.css';
import DatosContacto from '../../components/datosContacto/DatosContacto';


const Contacto = () => {
    return (
        <>
<Container fluid className="contacto-container">
  <Row className="justify-content-space-between">

    <Col xs={12} md={6} >
    <Col >
      <div className="tituloCol2 text-uppercase text text-center m-3">
        <h5>Envíanos tu consulta</h5>
      </div>
      <FormContacto />
      
    </Col>
  </Col>

<Col xs={12} md={6}>
<div className="tituloCol1 text-uppercase text text-center m-3">
<h5>Canales de contacto</h5></div>
<Row className="justify-content-center">
  <Col>
    <Card className='p-1 m-1'>
      <Card.Body >
      <Card.Title className='text-card m-1'>¿DÓNDE ESTAMOS?</Card.Title>
      <iframe className='map embed-responsive-item m-1' width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1021.7157467252316!2d-65.2068663953605!3d-26.836601080919728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1712000100735!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" />

      <Card.Title className='text-card m-1'>NUESTRAS REDES SOCIALES</Card.Title>

          <div className='text-center m-3'>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="../src/img/square-facebook.svg" className="icon"  fill="currentColor" alt="Facebook" /></a>
            <a href="https://www.google.com/?hl=es" target="_blank" rel="noopener noreferrer"><img src="../src/img/google.svg" className="icon" alt="Google" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="../src/img/square-instagram.svg" className="icon" alt="Instagram" /></a>
            <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer"><img src="../src/img/telegram.svg" className="icon" alt="Telegram" /></a>
            <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer"><img src="../src/img/square-x-twitter.svg" className="icon" alt="Twitter" /></a>
            <a href="https://www.messenger.com/?locale=es_ES" target="_blank" rel="noopener noreferrer"><img src="../src/img/facebook-messenger.svg" className="icon" alt="Messenger" /></a>
          </div>
          <Card.Title className='text-card m-1'>OTROS CANALES</Card.Title>  

          <DatosContacto />
         
      </Card.Body>
    </Card>
  </Col>
</Row>
</Col>
</Row>
</Container>
        </>
    )
}

export default Contacto;