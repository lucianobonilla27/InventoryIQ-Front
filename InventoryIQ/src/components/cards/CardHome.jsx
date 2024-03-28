import { Card, Button } from 'react-bootstrap';

const CardHome = ({ id, nombre, descripcion, imagenUrl, cantidad, categoria }) => {
    const handleEditar = () => {
        // Lógica para editar el producto
    };

    return (
        <Card style={{ width: '18rem', margin: '1em', textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                <Card.Img variant="top" src={imagenUrl} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>{cantidad}</Card.Text>
                <Button variant="primary" onClick={handleEditar}>Editar</Button>
            </Card.Body>
        </Card>
    );
};

export default CardHome;
