import FormProductos from "../../src/components/forms/FormProductos"
import { Container } from "react-bootstrap"
import TablaProductos from "../../src/components/tablas/TablaProductos"
import TablaConsultas from "../../src/components/tablas/TablaConsultas"


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

      <Container>
      
        <div className="p-3 mt-3">
          <h3 className="p-3 mt-3">Tabla de consultas</h3>
          <TablaConsultas/>
        </div>
      </Container>
      
    </>
  )
}

export default admin
