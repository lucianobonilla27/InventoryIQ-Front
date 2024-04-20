import React, { useContext, useState } from "react";
import { Button, Table, Modal, Form, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { ProductosProvider } from "../../context/ProductsContext";
import FormEditProduct from "../forms/FormEditProduct";

const TablaProductos = () => {
  const { productos, deleteProductos } = useContext(ProductosProvider);
  const [show, setShow] = useState(false);
  const [editProducto, setEditProducto] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const handleClose = () => setShow(false);

  const handleEdit = (product) => {
    setEditProducto(product);
    setShow(true);
  };

  const handleEliminarClick = (_id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este producto.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductos(_id);
        Swal.fire({
          title: "Eliminado",
          text: "El producto se ha eliminado correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      }
    });
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const filtrarProductos = () => {
    let productosFiltrados = productos;

    if (categoriaSeleccionada !== "") {
      productosFiltrados = productosFiltrados.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      );
    }

    if (busqueda.trim() !== "") {
      productosFiltrados = productosFiltrados.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return productosFiltrados;
  };

  return (
    <>
      <Row className="mb-3">
        <Col md={9}>
          <div className="p-4">
            <Form.Control
              type="text"
              placeholder="Buscar producto por nombre..."
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
              <option value="">Categoría</option>
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
      {filtrarProductos().length === 0 ? (
        <h2>No Tenemos productos para mostrarte</h2>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover className="text-center align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Categoría</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtrarProductos().map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td
                    style={{
                      position: "relative",
                      width: "10%",
                      height: "80px",
                    }}
                  >
                    <img
                      src={product.imagenUrl}
                      alt={product.nombre}
                      variant="top"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </td>
                  <td>{product.nombre}</td>
                  <td>{product.descripcion}</td>
                  <td>{product.cantidad}</td>
                  <td>{product.categoria}</td>
                  <td>{product.fecha}</td>
                  <td>
                    <Button
                      variant="primary"
                      style={{ width: "88px", margin: "4px", padding: "4px" }}
                      onClick={() => handleEdit(product)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      style={{ width: "88px", margin: "4px", padding: "4px" }}
                      onClick={() => handleEliminarClick(product._id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            border: 0,
            mx: 0,
            backgroundColor: "#DDE6ED",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "0",
          }}
        >
          <Modal.Title><u>Editar Producto</u></Modal.Title>
          <button
            className="btn-close"
            onClick={handleClose}
            style={{
              padding: "10px",
              right: "6px",
              top: "5px",
              position: "absolute",
            }}
          ></button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#DDE6ED", borderRadius: '0 0 8px 8px' }} >
          <FormEditProduct
            editProducto={editProducto}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaProductos;
