import { useState } from "react";
import CardHome from "../../components/cards/CardHome";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useContext } from "react";
import { ProductosProvider } from "../../context/ProductsContext";
import CarouselHome from "../../components/carrusel/CarouselHome";
import CardSucursales from '../../components/cards/CardSucursales';

const Home = () => {
  const { productos } = useContext(ProductosProvider);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); 

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
    setCurrentPage(1); // Reiniciar la página cuando se realiza una nueva búsqueda
  };

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
    setCurrentPage(1); // Reiniciar la página cuando se cambia la categoría
  };

  // Función para filtrar y paginar productos
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

  // Lógica para calcular los índices de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtrarProductos().slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <CarouselHome />
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
          {currentProducts.length === 0 ? (
            <h3>No hay productos disponibles</h3>
          ) : (
            currentProducts.map((producto) => (
              <CardHome
                key={producto._id}
                _id={producto._id}
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

        {/* Agregar paginación */}
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              {[...Array(Math.ceil(filtrarProductos().length / productsPerPage)).keys()].map((number) => (
                <li key={number + 1} className="page-item">
                  <button onClick={() => paginate(number + 1)} className="page-link">
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </>
  );
};

export default Home;
