import FormProductos from "../../components/forms/FormProductos"
import { Container } from "react-bootstrap"
import TablaProductos from "../../components/tablas/TablaProductos"

const admin = () => {
  return (
    <>
      <Container>
        <h3 className="p-3 mt-3">Registrar productos</h3>
        <FormProductos />

        <div className="p-3 mt-3">
          <h3 className="p-3 mt-3">Tabla de productos:</h3>
          <TablaProductos />
        </div>
      </Container>
    </>
  )
}

export default admin
