
import { Container, Col, Card, Row, Carousel } from 'react-bootstrap';
import './cardAbout.css';

const CardAbout = () => {
  return (
    <Container fluid>
      <Carousel interval={null} nextLabel="" prevLabel="" className="carousel">
        {/* Primera diapositiva */}
        <Carousel.Item>
          <Row className="justify-content-center">
            {/*CARD 1*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Luciano.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Luciano Bonilla</Card.Title>
                  <Card.Text>
                    Gerente general
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/*CARD 2*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Facundo.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Facundo Medina</Card.Title>
                  <Card.Text>
                    Área comercial
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/*CARD 3*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Lorena.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Lorena Oterino</Card.Title>
                  <Card.Text>
                    Atención al cliente
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Segunda diapositiva */}
        <Carousel.Item>
          <Row className="justify-content-center">
            {/*CARD 4*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Claudio.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Claudio Joaquín</Card.Title>
                  <Card.Text>
                    Encargado de distribución
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/*CARD 5*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Monica.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Mónica Ruíz</Card.Title>
                  <Card.Text>
                    Encargada de personal
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/*CARD 6*/}
            <Col xs={12} sm={6} md={4}>
              <Card className="card-hover mb-3">
                <div className="circle-img">
                  <Card.Img variant="top" src="/img/Equipo.jpg" className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>InventoryIQ</Card.Title>
                  <Card.Text>
                    Al servicio de nuestros clientes
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CardAbout;