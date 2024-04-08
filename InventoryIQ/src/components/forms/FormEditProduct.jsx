import { Col, Row, Form, Button } from 'react-bootstrap'
import { ProductosProvider } from "../../context/ProductsContext";
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const FormEditProduct = ({ editProducto, handleClose }) => {
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

        // Validar el formato de la fecha
        const fechaPattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!fechaPattern.test(producto.fecha)) {
            alert('El formato de la fecha debe ser "YYYY-MM-DD".');
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

    // Función para validar el formato de fecha "YYYY-MM-DD"
    const isValidDate = (dateString) => {
        // Validación del formato de fecha "YYYY-MM-DD"
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(dateString);
    };

    return (
        <>
            <Form onSubmit={handleSubmit} style={{ backgroundColor: '#DDE6ED', padding: '20px', borderRadius: '8px' }}>
                <Row className="text-center">
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                className="text-center"
                                type="text"
                                name="nombre"
                                value={producto.nombre}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>

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
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                className="text-center"
                                type="text"
                                name="fecha"
                                value={producto.fecha}
                                onChange={handleChange}
                                isInvalid={!isValidDate(producto.fecha)}
                                required
                            />
                            {!isValidDate(producto.fecha) && (
                                <Form.Control.Feedback type="invalid">
                                    El formato de fecha debe ser YYYY-MM-DD.
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col md={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control className="text-center"
                                as="select"
                                name="categoria"
                                value={producto.categoria}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona una categoría</option>
                                <option value="Bebidas">Bebidas</option>
                                <option value="Pastas">Pastas</option>
                                <option value="Lacteos">Lácteos</option>
                                <option value="Panadería">Panadería</option>
                                <option value="Granos">Granos</option>
                                <option value="Frutas">Frutas</option>
                                <option value="Verduras">Verduras</option>
                                <option value="Carnes">Carnes</option>
                                <option value="Snacks">Snacks</option>

                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={9}>
                        <Form.Group className="mb-3">
                            <Form.Label>URL de la imagen</Form.Label>
                            <Form.Control
                                className="text-center"
                                type="url"
                                name="imagenUrl"
                                value={producto.imagenUrl}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>

                </Row>

                <Row className="text-center">
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control

                                as="textarea"
                                name="descripcion"
                                value={producto.descripcion}
                                onChange={handleChange}

                            />
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

export default FormEditProduct
