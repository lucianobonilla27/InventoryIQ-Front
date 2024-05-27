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
            fecha: new Date().toISOString().slice(0, 10)
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: name === "cantidad" ? parseInt(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const cantidadNumber = parseInt(producto.cantidad);
        if (cantidadNumber < 0 || isNaN(cantidadNumber)) {
            alert('La cantidad debe ser un número positivo.');
            return;
        }   
    
        

        const fechaPattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!fechaPattern.test(producto.fecha)) {
            alert('El formato de la fecha debe ser "YYYY-MM-DD".');
            return;
        }

        const imagen =
            producto.imagenUrl.trim() !== ''
                ? producto.imagenUrl
                : 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

        const productoConCantidadNumerica = { ...producto, cantidad: cantidadNumber }; // realizo esto ya que react los campos de formulario en React se manejan como cadenas de texto por defecto

        try {
            const response = await addProductos({
                ...productoConCantidadNumerica,
                _id: crypto.randomUUID(),
                imagenUrl: imagen,
            });

            console.log("Respuesta del backend:", response);

            // Mostrar SweetAlert solo si la respuesta del backend es exitosa
            Swal.fire({
                title: 'Producto creado',
                text: 'El producto se ha creado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });

            setProducto({
                _id: crypto.randomUUID(),
                nombre: '',
                descripcion: '',
                imagenUrl: '',
                cantidad: 0,
                categoria: '',
                fecha: new Date().toISOString().slice(0, 10),
            });

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error("Error al agregar producto:", error);
            // Mostrar SweetAlert con el mensaje de error si ocurre un problema al agregar el producto
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al agregar el producto.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    const isValidDate = (dateString) => {
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
