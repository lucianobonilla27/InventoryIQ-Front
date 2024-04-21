import React, { useState, useContext} from "react";
import {Container,Row,Col,Form,Table,Button,Modal,} from "react-bootstrap";
import { ConsContext } from "../../context/ConsultasContext";
import Swal from "sweetalert2";
import FormRespuesta from "../forms/FormRespuesta";
import "./tablaConsultas.css";

const Admin = () => {
  const { consultas, deleteConsultas} = useContext(ConsContext);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [showResponder, setShowResponder] = useState(false);
  const [showConsulta, setShowConsulta] = useState(false);
  const [selectConsulta, setSelectConsulta] = useState(null);

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const filtrarConsultas = () => {
    let consultasFiltradas = consultas;

    if (categoriaSeleccionada !== "") {
      consultasFiltradas = consultasFiltradas.filter(
        (consulta) => consulta.rubro === categoriaSeleccionada
      );
    }

    if (busqueda.trim() !== "") {
      consultasFiltradas = consultasFiltradas.filter((consulta) =>
        consulta.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return consultasFiltradas;
  };

  const handleCloseResponder = () => setShowResponder(false);
  const handleCloseConsulta = () => setShowConsulta(false);

  const handleShowResponder = (consulta) => {
    setSelectConsulta(consulta);
    setShowResponder(true);
  };

  const handleShowConsulta = (consulta) => {
    setSelectConsulta(consulta);
    setShowConsulta(true);
  };

  const handleDelete = (consulta) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres eliminar esta consulta?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteConsultas(consulta);
        Swal.fire(
          "¡Eliminada!",
          "La consulta ha sido eliminada correctamente.",
          "success"
        );
      }
    });
  };

  const handleEnviarRespuesta = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres enviar la respuesta?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, enviar respuesta",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleCloseResponder();
        Swal.fire(
          "¡Respuesta enviada!",
          "La respuesta ha sido enviada correctamente.",
          "success"
        );
      }
    });
  };

  const handleCancelar = () => {
    setShowResponder(false);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <div className="p-4">
              <Form.Control
                type="text"
                placeholder="Buscar consulta por nombre..."
                value={busqueda}
                onChange={handleBusquedaChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <form action="" className="p-4">
              <select
                name="rubro"
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

        <div className="row justify-content-center">
          {filtrarConsultas().length === 0 ? (
            <h3>No hay consultas disponibles</h3>
          ) : (
            <div className="table-responsive-md">
              <Table
                striped
                bordered
                hover
                className="text-center align-middle"
              >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Mail</th>
                    <th>Teléfono</th>
                    <th>Categoría</th>
                    <th>Consulta</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filtrarConsultas().map((consulta) => (
                    <tr key={consulta._id}>
                      <td>{consulta.nombre}</td>
                      <td>{consulta.mail}</td>
                      <td>{consulta.telefono}</td>
                      <td>{consulta.rubro}</td>
                      <td className="text-center">
                        <Button
                          variant="primary"
                          onClick={() => handleShowConsulta(consulta)}
                        >
                          Ver
                        </Button>
                      </td>
                      <td className="text-center">
                        <Button
                          variant="success"
                          style={{
                            width: "88px",
                            margin: "4px",
                            padding: "4px",
                          }}
                          onClick={() => handleShowResponder(consulta)}
                        >
                          Responder
                        </Button>
                        <Button
                          variant="danger"
                          style={{
                            width: "88px",
                            margin: "4px",
                            padding: "4px",
                          }}
                          onClick={() => handleDelete(consulta._id)}
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
        </div>
      </Container>

      {/* Modal para ver la consulta */}
      <Modal
        show={showConsulta}
        onHide={handleCloseConsulta}
        className="custom-modal"
        contentClassName="custom-modal-content"
      >
        <Modal.Header
          className="header-respuesta"
          style={{ display: "flex",
          justifyContent: "center" }}
        >
          <Modal.Title><u>Consulta</u></Modal.Title>
          <button
            className="btn-close"
            onClick={handleCloseConsulta}
            style={{
              padding: "10px",
              right: "6px",
              top: "5px",
              position: "absolute",
            }}
          ></button>
        </Modal.Header>
        <Modal.Body
          className="body-respuesta"
          style={{ overflowWrap: "break-word", wordWrap: "break-word", backgroundColor:"white"  }}
        >
          {selectConsulta && (
            <p style={{ whiteSpace: "pre-wrap", margin: "0" }}>
              {selectConsulta.consulta}
            </p>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal para responder la consulta */}
      <Modal
        show={showResponder}
        onHide={handleCloseResponder}
        className="custom-modal"
        contentClassName="custom-modal-content"
      >
        <Modal.Header className="header-respuesta d-flex flex-column" >
          <Modal.Title><u>Responder consulta</u></Modal.Title>
          <button
            className="btn-close"
            onClick={handleCloseResponder}
            style={{
              padding: "10px",
              right: "6px",
              top: "5px",
              position: "absolute",
            }}
          ></button>
        </Modal.Header>
        <Modal.Body className="body-respuesta">
          {selectConsulta && <FormRespuesta initialValues={selectConsulta} />}
          <div className="buttonConsulta text-center">

            <Button variant="primary" onClick={handleCancelar} className="buttons">
              Cancelar
            </Button>
            <Button
              variant="secondary"
              onClick={handleEnviarRespuesta}
              className="buttons"
            >
              Enviar respuesta
            </Button>

            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Admin;
