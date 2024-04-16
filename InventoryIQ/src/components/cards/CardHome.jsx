import { Card, Button, Modal } from "react-bootstrap";
import FormEditStock from "../forms/FormEditStock";
import { useState, useEffect } from "react";

const CardHome = ({
  id,
  nombre,
  descripcion,
  imagenUrl,
  cantidad,
  categoria,
  fecha,
}) => {
  const [product, setProduct] = useState({
    id,
    nombre,
    descripcion,
    imagenUrl,
    cantidad,
    categoria,
    fecha,
  });

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [show, setShow] = useState(false);
  const [editProducto, setEditProducto] = useState(null);

  const handleClose = () => setShow(false);

  const handleEdit = (product) => {
    setEditProducto(product);
    setShow(true);
  };

  return (
    <>
      <Card style={{ width: "18rem", margin: "1em", textAlign: "center" }}>
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <Card.Img
            variant="top"
            src={imagenUrl}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>Stock: {cantidad}</Card.Text>
          {user ? (
            <Button variant="primary" onClick={() => handleEdit(product)}>
              Editar
            </Button>
          ) : null}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{
            border: 0,
            mx: 0,
            backgroundColor: "#DDE6ED",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "0",
          }}>
          <Modal.Title>Editar Stock</Modal.Title>
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
        <Modal.Body style={{ backgroundColor: '#DDE6ED', borderRadius: '8px', padding: '0'}}>
          <FormEditStock
            editProducto={editProducto}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardHome;
