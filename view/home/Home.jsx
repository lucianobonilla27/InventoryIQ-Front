import { useState } from "react";
import CardHome from "../../src/components/cards/CardHome";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useContext } from "react";
import { ProductosProvider } from "../../src/context/ProductsContext";


const Home = () => {
  const { productos } = useContext(ProductosProvider);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [busqueda, setBusqueda] = useState("");


  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  // Función para filtrar productos
  const filtrarProductos = () => {
    let productosFiltrados = productos;

    // Filtrar por categoría si está seleccionada
    if (categoriaSeleccionada !== "") {
      productosFiltrados = productosFiltrados.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      );
    }

    // Filtrar por búsqueda si hay texto en el input
    if (busqueda.trim() !== "") {
      productosFiltrados = productosFiltrados.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return productosFiltrados;
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <div className="p-4">
              <Form.Control
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={handleBusquedaChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <form action="" className="p-4">
              <select
                name="categoria"
                className="form-select"
                value={categoriaSeleccionada}
                onChange={handleCategoriaChange}
              >
                <option value="">Categorías</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Pastas">Pastas</option>
                <option value="Lácteos">Lácteos</option>
                <option value="Panadería">Panadería</option>
                <option value="Granos">Granos</option>
                <option value="Frutas">Frutas</option>
                <option value="Verduras">Verduras</option>
                <option value="Carnes">Carnes</option>
                <option value="Snacks">Snacks</option>




              </select>
            </form>
          </Col>
        </Row>

        <div className="row justify-content-center">
          {filtrarProductos().length === 0 ? (
            <h3>No hay productos disponibles</h3>
          ) : (
            filtrarProductos().map((producto) => (
              <CardHome
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                imagenUrl={producto.imagenUrl}
                cantidad={producto.cantidad}
                categoria={producto.categoria}
                fecha={producto.fecha}
              />
            ))
          )}
        </div>
      </Container>


    </>
  );
};

export default Home;
