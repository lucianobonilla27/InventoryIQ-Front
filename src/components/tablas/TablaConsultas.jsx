import React, { useContext, useState} from "react";
import { ConsContext } from "../../context/ConsultasContext";
import { Button, Table, Modal } from "react-bootstrap";
import FormRespuesta from "../formRespuesta/FormRespuesta";
import Swal from 'sweetalert2';
import "./tablaConsulta.css";

const TablaConsultas = () => {
  const { consultas, deleteConsultas} = useContext(ConsContext);

  const [showResponder, setShowResponder] = useState(false);
  const [showConsulta, setShowConsulta] = useState(false);
  const [selectConsulta, setSelectConsulta] = useState(null);

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

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres eliminar esta consulta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteConsultas(id);
        Swal.fire(
          '¡Eliminada!',
          'La consulta ha sido eliminada correctamente.',
          'success'
        );
      }
    });
  };

  const handleEnviarRespuesta = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres enviar la respuesta?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar respuesta',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        handleCloseResponder();
        Swal.fire(
          '¡Respuesta enviada!',
          'La respuesta ha sido enviada correctamente.',
          'success'
        );
      }
    });
  };

  const handleCancelar = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cancelar la respuesta?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        handleCloseResponder();
      }
    });
  };



  return (
    <>
      {consultas.length === 0 ? (
        <h2>No tenemos consultas ingresadas</h2>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">Nombre y apellido</th>
                <th className="text-center">Correo</th>
                <th className="text-center">Teléfono</th>
                <th className="text-center">Rubro</th>
                <th className="text-center">Consulta</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((consulta) => (
                <tr key={consulta.id}>
                  <td className="text-center">{consulta.nombre}</td>
                  <td className="text-center">{consulta.mail}</td>
                  <td className="text-center">{consulta.telefono}</td>
                  <td className="text-center">{consulta.rubro}</td>
                  <td className="text-center">
                    <Button variant="primary" onClick={() => handleShowConsulta(consulta)}>Ver</Button>
                  </td>
                  <td className="text-center">
                    <Button variant="success" onClick={() => handleShowResponder(consulta)}>Responder</Button>
                    <Button variant="danger" onClick={() => handleDelete(consulta.id)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {/* Modal para ver la consulta */}
      <Modal
        show={showConsulta}
        onHide={handleCloseConsulta}
        className="custom-modal"
        contentClassName="custom-modal-content"
      >
        <Modal.Header closeButton className="header-respuesta">
          <Modal.Title>Consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-respuesta" style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          {selectConsulta && <p style={{ whiteSpace: 'pre-wrap', margin: '0' }}>{selectConsulta.consulta}</p>}
        </Modal.Body>
      </Modal>

      {/* Modal para responder la consulta */}
      <Modal
        show={showResponder}
        onHide={handleCloseResponder}
        className="custom-modal"
        contentClassName="custom-modal-content"
      >
        <Modal.Header closeButton className="header-respuesta">
          <Modal.Title>Responder consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-respuesta">
          {selectConsulta && <FormRespuesta initialValues={selectConsulta} />}
          <div className="text-center">
            <Button variant="secondary" onClick={handleEnviarRespuesta} className="mr-2">
              Enviar respuesta
            </Button>
            <Button variant="primary" onClick={handleCancelar} className="mr-2">
              Cancelar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaConsultas;