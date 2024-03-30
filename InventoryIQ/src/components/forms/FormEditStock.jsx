import { Col, Row, Form, Button } from 'react-bootstrap'
import { ProductosProvider } from "../../context/ProductsContext";
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const FormEditStock = ({ editProducto, handleClose }) => {
    const { editarProducto } = useContext(ProductosProvider);
    const [producto, setProducto] = useState(
        {
            id: editProducto.id,
            nombre: editProducto.nombre,
            descripcion: editProducto.descripcion,
            imagenUrl: editProducto.imagenUrl,
            cantidad: editProducto.cantidad,
            categoria: editProducto.categoria,
            fecha: editProducto.fecha
        }
    )

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que la cantidad sea un número positivo
        if (producto.cantidad < 0 || isNaN(producto.cantidad)) {
            alert('La cantidad debe ser un número positivo.');
            return;
        }

        editarProducto(producto)

        handleClose()

        Swal.fire({
            title: 'Producto editado',
            text: 'El producto se ha editado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{ backgroundColor: '#DDE6ED', padding: '20px', borderRadius: '8px' }}>
                <Row className="text-center">
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                className="text-center"
                                type="number"
                                name="cantidad"
                                value={producto.cantidad}
                                onChange={handleChange}
                                isInvalid={producto.cantidad < 0}
                                required
                            />
                            {producto.cantidad < 0 && (
                                <Form.Control.Feedback type="invalid">
                                    La cantidad no puede ser negativa.
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Col>

                </Row>
            </Form>
        </>
    )
}

export default FormEditStock
