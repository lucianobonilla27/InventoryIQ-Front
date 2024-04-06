import { useContext, useState } from "react";
import { ProductosProvider } from "../../context/ProductsContext";
import { Button, Table, Modal } from "react-bootstrap";
import FormEditProduct from "../forms/FormEditProduct";
import Swal from 'sweetalert2';

const TablaProductos = () => {
    const { productos, deleteProductos } = useContext(ProductosProvider);
    const [show, setShow] = useState(false);
    const [editProducto, setEditProducto] = useState(null)

    const handleClose = () => setShow(false);


    const handleEdit = (product) => {
        setEditProducto(product)
        setShow(true)
    }

    const handleEliminarClick = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Una vez eliminado, no podrás recuperar este producto.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {

                deleteProductos(id);


                Swal.fire({
                    title: 'Eliminado',
                    text: 'El producto se ha eliminado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    };
    return (
        <>
            {productos.length === 0 ? (
                <h2>No Tenemos productos para mostrarte</h2>
            ) : (
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Cantidad</th>
                                <th>Categoria</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td style={{ position: 'relative', width: '10%', height: '80px' }}>
                                        <img
                                            src={product.imagenUrl}
                                            alt={product.nombre}
                                            variant="top" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '100%', maxHeight: '100%' }}
                                        />
                                    </td>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.cantidad}</td>
                                    <td>{product.categoria}</td>
                                    <td>{product.fecha}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => handleEdit(product)}>Editar</Button>
                                        <Button variant="danger" onClick={() => handleEliminarClick(product.id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <FormEditProduct editProducto={editProducto} handleClose={handleClose} />
                </Modal.Body>

            </Modal>
        </>
    )
}

export default TablaProductos
