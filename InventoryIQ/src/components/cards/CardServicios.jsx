import { Col, Card, Row, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import './cardServicios.css';

 
const CardServicios = () => {

const [showModal1, setShowModal1] = useState(false);
const handleModalOpen1 = () => setShowModal1(true);
const handleModalClose1 = () => setShowModal1(false);


const [showModal2, setShowModal2] = useState(false);
const handleModalOpen2 = () => setShowModal2(true);
const handleModalClose2 = () => setShowModal2(false);


const [showModal3, setShowModal3] = useState(false);
const handleModalOpen3 = () => setShowModal3(true);
const handleModalClose3 = () => setShowModal3(false);


const [showModal4, setShowModal4] = useState(false);
const handleModalOpen4 = () => setShowModal4(true);
const handleModalClose4 = () => setShowModal4(false);

  return (
    <>
<Row className='p-2'>
  <Col xs={12} md={6} lg={3} className='mb-3'>
    {/* Primer botón con modal */}
    <Card>
      <Card.Img variant="top" src="./src/img/Card 1.jpg" className="img-fluid" />
      <Card.Body>
        <Card.Title className='title'>Rápida puesta en producción</Card.Title>
        <Button variant="primary" onClick={handleModalOpen1}>Ver más</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={12} md={6} lg={3} className='mb-3'>
    {/* Segundo botón con modal */}
    <Card>
      <Card.Img variant="top" src="./src/img/Card 2.jpg" className="img-fluid" />
      <Card.Body>
        <Card.Title className='title'>Adaptaciones a medida</Card.Title>
        <Button variant="primary" onClick={handleModalOpen2}>Ver más</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={12} md={6} lg={3} className='mb-3'>
    {/* Tercer botón con modal */}
    <Card>
      <Card.Img variant="top" src="./src/img/Card 3.jpg" className="img-fluid" />
      <Card.Body>
        <Card.Title className='title'>Reportes y alertas detallados</Card.Title>
      
        <Button variant="primary" onClick={handleModalOpen3}>Ver más</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={12} md={6} lg={3} className='mb-3'>
    {/* Cuarto botón con modal */}
    <Card>
      <Card.Img variant="top" src="./src/img/Card 4.jpg" className="img-fluid" />
      <Card.Body>
        <Card.Title className='title'>Soporte técnico y asesoramiento</Card.Title>
      
        <Button variant="primary" onClick={handleModalOpen4}>Ver más</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>

         {/* Modal 1 */}
<Modal show={showModal1} onHide={handleModalClose1} size="md" dialogClassName="custom-modal" >
  <Modal.Header>
    <Modal.Title className="mx-auto text-center">Rápida puesta en producción</Modal.Title>
  </Modal.Header>
  <Modal.Body className="text-center">
  A diferencia de otros productos disponibles en el mercado, InventoryIQ se destaca por ser una solución especializada exclusivamente en el control de stock. Esta especialización permite que InventoryIQ ofrezca un enfoque más enfocado y completo para gestionar eficazmente el inventario de tu negocio. Además, su interfaz intuitiva y fácil de usar hace que sea extremadamente sencillo para cualquier usuario empezar a utilizar el sistema rápidamente y sacar el máximo provecho de todas sus funcionalidades. Con InventoryIQ, puedes optimizar la gestión de tu inventario de manera eficiente y efectiva, ahorrando tiempo y recursos mientras mantienes un control total sobre tus productos y existencias.
  </Modal.Body>
  <Modal.Footer className="justify-content-center">
    <Button variant="secondary" onClick={handleModalClose1}>Cerrar</Button>
  </Modal.Footer>
</Modal>

          {/* Modal 2 */}
          <Modal show={showModal2} onHide={handleModalClose2}size="md" dialogClassName="custom-modal" >
            <Modal.Header>
              <Modal.Title className="mx-auto text-center">Adaptaciones a medida</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
            Estamos comprometidos a brindarle un servicio personalizado que se ajuste perfectamente a las necesidades específicas de su empresa. Si en algún momento necesita realizar modificaciones o ajustes en el sistema para adaptarlo a los procesos y requerimientos particulares de su negocio, estamos aquí para ayudarlo. Nuestro equipo de expertos está disponible para colaborar estrechamente con usted y desarrollar soluciones personalizadas que cumplan con sus expectativas. No dude en comunicarse con nosotros para discutir sus necesidades y solicitar un presupuesto para cualquier adaptación o personalización que requiera. Estamos comprometidos a brindarle la mejor experiencia posible y garantizar que el sistema funcione de manera óptima para su empresa.
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
              <Button variant="secondary" onClick={handleModalClose2}>Cerrar</Button>
            </Modal.Footer>
          </Modal>

          {/* Modal 3 */}
          <Modal show={showModal3} onHide={handleModalClose3}size="md" dialogClassName="custom-modal"  >
            <Modal.Header >
              <Modal.Title className="mx-auto text-center">Reportes y alertas detallados</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
            Nuestro sistema ofrece una variedad de reportes especializados para proporcionarle un control detallado sobre su inventario. Estos informes incluyen productos debajo del stock mínimo, trazabilidad, movimientos de inventario y productos próximos a vencer. Estos reportes le permiten tomar decisiones informadas y estratégicas para gestionar su inventario de manera efectiva. Además, ofrecemos herramientas adicionales diseñadas para mejorar la eficiencia de su negocio y satisfacer sus necesidades específicas de gestión de inventario.
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
              <Button variant="secondary" onClick={handleModalClose3}>Cerrar</Button>
            </Modal.Footer>
          </Modal>

          {/* Modal 4 */}
          <Modal show={showModal4} onHide={handleModalClose4} size="md"  dialogClassName="custom-modal" >
            <Modal.Header>
              <Modal.Title className="mx-auto text-center">Soporte técnico y asesoramiento</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
            Disponemos de varios canales de atención para su mayor comodidad. Ofrecemos la opción de contacto a través de chat en vivo, donde puede obtener respuestas rápidas a sus preguntas y asistencia inmediata. También estamos disponibles por correo electrónico, brindando la posibilidad de enviar consultas detalladas o comentarios. Además, contamos con un sistema de tickets que le permite realizar un seguimiento de sus solicitudes y recibir actualizaciones sobre su progreso. Estos diversos canales están diseñados para adaptarse a sus necesidades y brindarle un servicio de atención al cliente eficiente y completo.
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
              <Button variant="secondary" onClick={handleModalClose4}>Cerrar</Button>
            </Modal.Footer>
          </Modal>

      
    </>
  )
}

export default CardServicios
