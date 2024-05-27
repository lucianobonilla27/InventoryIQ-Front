import { Container, Col, Card, Row } from 'react-bootstrap';
import './cardSucursales.css'; // Asegúrate de importar tu archivo CSS si es necesario.

const CardSucursales = () => {
  return (
    <Container fluid className="suc-container">
      <Row className='p-2'>
        <Col xs={12} md={4} className='mb-3'>
          <Card className='card-sucursales'>
            <Card.Img variant="top" src="/img/Sucursal 1.jpg" className="img-fluid" />
            <Card.Body>
              <Card.Title className='title'>Casa Central</Card.Title>
              <Card.Text>General Paz Nº584</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className='mb-3'>
          <Card className='card-sucursales'>
            <Card.Img variant="top" src="/img/Sucursal 2.jpg" className="img-fluid" />
            <Card.Body>
              <Card.Title className='title'>Anexo Store Nº1</Card.Title>
              <Card.Text>Av. Perón 1545</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className='mb-3'>
          <Card className='card-sucursales'>
            <Card.Img variant="top" src="/img/Sucursal 3.jpg" className="img-fluid" />
            <Card.Body>
              <Card.Title className='title'>Anexo Store Nº2</Card.Title>
              <Card.Text>Salta Nº 1657</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardSucursales;