import { Container, Row, Col } from "react-bootstrap";
import TableUsuarios from "../../components/table/TableUsuarios.jsx";

const Admin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
              <TableUsuarios />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;