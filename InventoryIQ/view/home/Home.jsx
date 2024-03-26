import CardHome from "../../src/components/cards/CardHome"
import { Row, Col, Container } from "react-bootstrap";
import productos from "../../src/components/productos";

const Home = () => {

  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <div className="d-flex justify-content-end">
              <div className="p-4"> {/* Espacio adicional para alinear con el contenido, despues podría poner un buscador */}
                {/* Contenido adicional en la parte izquierda */}
              </div>
            </div>
          </Col>
          <Col md={3}>
            <form action="" className="p-4">
              <select name="categoria" className="form-select">
                <option value="Bebidas">Categorias</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Pastas">Pastas</option>
                <option value="Lacteos">Lacteos</option>
              </select>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="row justify-content-center">

        {productos.length == 0 ? <h3>No hay productos disponibles</h3> :
          productos.map(producto => (
            <CardHome
              id={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              imagenUrl={producto.imagenUrl}
              cantidad={producto.cantidad}
              categoria={producto.categoria}
            />

          ))
        }


      </div>




    </>
  )
}

export default Home
