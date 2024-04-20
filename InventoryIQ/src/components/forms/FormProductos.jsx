import { Col, Row, Form, Button } from 'react-bootstrap'
import { ProductosProvider } from "../../context/ProductsContext";
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const FormProductos = () => {
    const { addProductos } = useContext(ProductosProvider);

    const [producto, setProducto] = useState(
        {
            _id: crypto.randomUUID(),
            nombre: "",
            descripcion: "",
            imagenUrl: "",
            cantidad: 0,
            categoria: "",
            fecha: new Date().toISOString().slice(0, 10) // Obtener la fecha actual y formatearla como "YYYY-MM-DD"
        }
    )

    const handleChange = (e) => {
        setProducto({
            ...producto, // recuperar los datos que tenemos actualmente en el estado.
            [e.target.name]: e.target.value, // Actualizar el estado con el nuevo valor
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

        // Utiliza la URL de la imagen proporcionada por el producto, o la imagen predeterminada si está en blanco
        const imagen =
            producto.imagenUrl.trim() !== ''
                ? producto.imagenUrl
                : 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

        // Agrega el producto al contexto
        addProductos({
            ...producto,
            _id: crypto.randomUUID(),
            imagenUrl: imagen,
        });

        // Mostrar SweetAlert al agregar producto
        Swal.fire({
            title: 'Producto creado',
            text: 'El producto se ha creado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
        });

        // Reinicia el estado para el próximo producto
        setProducto({
            _id: crypto.randomUUID(),
            nombre: '',
            descripcion: '',
            imagenUrl: '',
            cantidad: 0,
            categoria: '',
            fecha: new Date().toISOString().slice(0, 10), // Obtener la fecha actual y formatearla como "YYYY-MM-DD"
        });
    };


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
                            Agregar
                        </Button>
                    </Col>

                </Row>
            </Form>


        </>
    )
}

export default FormProductos
