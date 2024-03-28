import FormProductos from "../../src/components/forms/FormProductos"
import { Container } from "react-bootstrap"

const admin = () => {
  return (
    <>
      <Container>
        <h3 className="p-3 mt-3">Registrar productos</h3>
        <FormProductos />
      </Container>
    </>
  )
}

export default admin
