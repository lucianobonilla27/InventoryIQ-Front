
import { Container, Col, Button, Card, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './about.css';
import CardAbout from '../../components/cards/CardAbout';
import CardServicios from '../../components/cards/CardServicios';
import CardSucursales from '../../components/cards/CardSucursales';

const About = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <Container fluid className="about-container">
        <Col className="text-center p-1">
          <div className="titulo text-uppercase text text-center m-2">
            <h5 className='mb-0' >Nuestra empresa</h5>
          </div>
          <Card style={{ width: '100%' }} className='card-about1'>
            <Card.Body>
              <Card.Img variant="top" src="/img/About.jpg" />
            </Card.Body>
          </Card>

          <Card style={{ width: '100%' }} className='card-about2'>
            <Card.Body>
              <Card.Text>
                Nuestra empresa se especializa en la gestión integral del control de stock de productos alimenticios en una amplia gama de locales comerciales. Con un enfoque multifacético, operamos tanto en nuestras sucursales y depósitos físicos como en el ámbito digital, brindando soluciones efectivas a proveedores y comerciantes en todo el país. En nuestras instalaciones físicas, empleamos tecnología de vanguardia y procesos eficientes para garantizar un seguimiento preciso de los productos alimenticios en stock. Esto nos permite optimizar la logística y asegurar que los clientes tengan acceso a los productos que necesitan en el momento adecuado. Además, nuestras sucursales están estratégicamente ubicadas para facilitar la distribución y la entrega rápida de mercaderías. Por otro lado, nuestra plataforma online ofrece una solución conveniente y accesible para proveedores y comerciantes que buscan gestionar su inventario de manera eficaz. A través de esta plataforma, los usuarios pueden monitorear sus niveles de stock en tiempo real, realizar pedidos y recibir actualizaciones sobre la disponibilidad de productos. Esto no solo simplifica el proceso de gestión de inventario, sino que también mejora la eficiencia y la rentabilidad de sus operaciones comerciales.
              </Card.Text>
            </Card.Body>
          </Card>


          <div className="titulo text-uppercase text text-center m-2">
            <h5 className='mb-0' >Nuestro equipo de trabajo</h5>
          </div>

         <CardAbout/>


          <div className="titulo text-uppercase text text-center m-2">
            <h5 className='mb-0'>Nuestros servicios</h5>
          </div>

         <CardServicios/>

         <div className="titulo text-uppercase text text-center m-2">
            <h5 className='mb-0'>Nuestras sucursales</h5>
          </div>
          
          <CardSucursales/>

          <div className="titulo text-uppercase text text-center m-2">
            <h5 className='mb-0'>Nuestros costos</h5>
          </div>

          <Row className="justify-content-between custom-padding p-1">
  <Col xs={12} md={4} className="mb-2 mb-md-3 d-flex justify-content-center align-items-center">
    <Button variant="primary" block onClick={() => navigate("/contacto")} className="equal-width">Solicitar Cotización</Button>
  </Col>
  <Col xs={12} md={4} className="mb-2 mb-md-3 d-flex justify-content-center align-items-center">
    <Button variant="primary" block onClick={() => navigate("/error404")} className="equal-width">Descuentos para clientes</Button>
  </Col>
  <Col xs={12} md={4} className="mb-2 mb-md-3 d-flex justify-content-center align-items-center">
    <Button variant="primary" block onClick={() => navigate("/error404")} className="equal-width">Planes y precios</Button>
  </Col>
</Row>
      
        </Col>
      </Container>
    </>
  );
}

export default About;