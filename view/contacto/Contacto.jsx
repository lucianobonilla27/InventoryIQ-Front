import {Container, Row, Col, Card} from 'react-bootstrap'
import FormContacto from '../../src/components/formContacto/FormContacto'
import './contacto.css'
import DatosContacto from '../../src/components/datosContacto/DatosContacto'
import GoogleMap from '../../src/components/googleMap/GoogleMap'

const Contacto = () => {
  return (
    <>
       
    <Container fluid className="contacto-container">
    <Row fluid className="justify-content-space-between "> 
    
   <Col><div class ="text-uppercase fluid text text-center m-3"><h3>Canales de contacto</h3></div>
    <Row fluid className="d-flex justify-content-evenly ">
    <Card style={{ width: '95%'}} className='p-1 m-1'>
    <Card.Title className='text-card p-1'>NUESTRAS REDES SOCIALES</Card.Title>
    <Card.Body className= 'p-1 m-1'>
        <div className='d-flex justify-content-between'>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="../public/square-facebook.svg" className="icon" alt="Facebook" /></a>
      <a href="https://www.google.com/?hl=es" target="_blank" rel="noopener noreferrer"><img src="../public/google.svg" className="icon" alt="Google" /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="../public/square-instagram.svg" className="icon" alt="Instagram" /></a>
      <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer"><img src="../public/telegram.svg" className="icon" alt="Telegram" /></a>
      <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer"><img src="../public/square-x-twitter.svg" className="icon" alt="Twitter" /></a>
      <a href="https://www.messenger.com/?locale=es_ES" target="_blank" rel="noopener noreferrer"><img src="../public/facebook-messenger.svg" className="icon" alt="Messenger" /></a>
      <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank" rel="noopener noreferrer"><img src="../public/square-whatsapp.svg" className="icon" alt="WhatsApp" /></a>
          </div>
        </Card.Body>
  </Card>


    <Card style={{ width: '46%' }} className='p-1 m-2 fluid col-md-6 col-sm-12'>
    <Card.Title className='text-card p-1'>¿DÓNDE ESTAMOS?</Card.Title>
    <Card.Body>
    <GoogleMap/>    
    </Card.Body>       
    </Card>

  
    <Card style={{ width: '46%' }} className='p-1 m-2 fluid'>
      <Card.Img variant="top" src="./public/celular.jpg" />
      <Card.Body>
        <DatosContacto/>
      </Card.Body>
    </Card>




    </Row>
    </Col>


        
{/*COLUMNA 2 */}

    <Col>
    <div class ="text-uppercase  fluid text text-center m-3 "><h3>Envíanos tu consulta</h3>
    </div>
    <FormContacto/>
    </Col>


    </Row>
    </Container>
    
   
    </>
  )
}

export default Contacto