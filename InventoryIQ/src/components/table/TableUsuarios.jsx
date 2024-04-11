import React, { useContext, useState } from "react";
import { Button, Table, Modal, Form, Row, Col } from "react-bootstrap";
import { UsuariosProvider } from "../../context/UsuariosContext";
import RegistroFormulario from "../Registro/Registro";
import swal from "sweetalert2";

const TableUsuarios = () => {
  const { usuarios, deleteUsuarios } = useContext(UsuariosProvider);
  const [show, setShow] = useState(false);
  const [editUsuario, setEditUsuario] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [rolSeleccionado, setRolSeleccionado] = useState("");

  const handleClose = () => setShow(false);

  const handleEdit = (user) => {
    if (user.email === "admin@admin.com" && user.password === "Admin159@") {
      swal.fire({
        title: "Acción no permitida",
        text: "No puedes editar el usuario administrador.",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    } else {
      setEditUsuario(user);
      setShow(true);
    }
  };

  const handleDelete = (user) => {
    if (user.email === "admin@admin.com" && user.password === "Admin159@") {
      swal.fire({
        title: "Acción no permitida",
        text: "No puedes eliminar el usuario administrador.",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    } else {
      swal
        .fire({
          title: "¿Estás seguro?",
          text: "Una vez eliminado, no podrás recuperar este usuario",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            deleteUsuarios(user.id);
            swal.fire({
              title: "Eliminado",
              text: "El usuario ha sido eliminado exitosamente",
              icon: "success",
              timer: 1500,
            });
          }
        });
    }
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleRolChange = (event) => {
    setRolSeleccionado(event.target.value);
  };

  const filtrarUsuarios = () => {
    let usuariosFiltrados = usuarios;

    if (rolSeleccionado !== "") {
      usuariosFiltrados = usuariosFiltrados.filter(
        (usuario) =>
          (rolSeleccionado === "admin" && usuario.isAdmin) ||
          (rolSeleccionado === "no-admin" && !usuario.isAdmin)
      );
    }

    if (busqueda.trim() !== "") {
      usuariosFiltrados = usuariosFiltrados.filter((usuario) =>
        usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return usuariosFiltrados;
  };

  return (
    <>
      <Row className="mb-3">
  <Col md={9}>
    <div className="p-4">
      <Form.Control
        type="text"
        placeholder="Buscar usuario por nombre..."
        value={busqueda}
        onChange={handleBusquedaChange}
        style={{ marginBottom: "0px" }}
      />
    </div>
  </Col>
  <Col md={3}>
    <form action="" className="p-4" style={{ marginBottom: "0px" }}>
      <select
        name="rol"
        className="form-select"
        value={rolSeleccionado}
        onChange={handleRolChange}
      >
        <option value="">Filtrar por Rol</option>
        <option value="admin">Administrador</option>
        <option value="no-admin">No Administrador</option>
      </select>
    </form>
  </Col>
</Row>

    
      {filtrarUsuarios().length === 0 ? (
        <h3 className="p-3 mt-3">No Tenemos usuarios para mostrarte</h3>
      ) : (
        <div className="table-responsive">
        <Table striped bordered hover className="text-center align-middle">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Mail</th>
              <th>Admin</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {filtrarUsuarios().map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "Si" : "No"}</td>
                <td>
                  <Button
                    variant="primary"
                    style={{ width: "68px", margin: "4px", padding: "4px" }}
                    onClick={() => handleEdit(user)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    style={{ width: "68px", margin: "4px", padding: "4px" }}
                    onClick={() => handleDelete(user)}
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
        <Modal.Header className="border-0" closeButton>
          <Modal.Title style={{ textAlign: "center", flex: "1", fontSize: "30px" }}>
            Editar Usuario
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistroFormulario editUsuario={editUsuario} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableUsuarios;
