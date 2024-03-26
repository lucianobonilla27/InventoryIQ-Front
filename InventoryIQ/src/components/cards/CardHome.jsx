import { Card, Button } from 'react-bootstrap';

const CardHome = ({ id, nombre, descripcion, imagenUrl, cantidad, categoria }) => {
    const handleEditar = () => {
        // Lógica para editar el producto
    };

    return (
        <>
            <Card style={{ width: '18rem', margin: '1em', textAlign: 'center' }}>
                <Card.Img className='mt-1' variant="top" src={imagenUrl} />
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Card.Text>{cantidad}</Card.Text>
                    <Button variant="primary" onClick={handleEditar}>Editar</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardHome
