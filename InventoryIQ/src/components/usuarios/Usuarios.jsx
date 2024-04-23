import PropTypes from 'prop-types';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import  { UsuariosProvider }  from "../../context/UsuariosContext";

const Usuarios = ({users}) => {

  // console.log(users, "usuarios desde usuarios")
  const { usuarios } = useContext(UsuariosProvider);

  return (
     <>
    <div>usuarios</div>

    <Container>
        {usuarios.lenght === 0 ? (
          <h1>No hay Usuarios</h1>
        ) : (
          <Row>
            {usuarios.map((users) => (
              <Col key={users.id} xs={12} md={4} sm={6} lg={3}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{users.nombre}</Card.Title>
                    <Card.Text>Precio: {users.precio}</Card.Text>
                    <Button variant="success">Comprar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

Usuarios.propTypes = {
    users: PropTypes.array,
};

// Usuarios.propTypes = {
//     nom
// }

export default Usuarios;