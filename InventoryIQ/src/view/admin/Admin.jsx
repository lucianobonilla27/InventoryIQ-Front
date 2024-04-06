import { Container, Row, Col } from "react-bootstrap";
import TableUsuarios from "../../components/table/TableUsuarios.jsx";
import FormProductos from "../../components/forms/FormProductos";
import TablaProductos from "../../components/tablas/TablaProductos";

const Admin = () => {
  return (
    <>
      <Container>

        <h3 className="p-3 mt-3">Registrar productos</h3>
        <FormProductos />

        <div className="p-3 mt-3">
          <h3 className="p-3 mt-3">Tabla de productos:</h3>
          <TablaProductos />
        </div>
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
