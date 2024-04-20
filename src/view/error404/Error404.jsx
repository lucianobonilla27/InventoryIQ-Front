import { Container,Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './error404.css';

const Error404 = () => {
 
    return (
        <Container className="error-container">
            
                <Col className="text-center p-2">

            <div className="titulo text-uppercase text text-center m-3">
            <h5>Ups!...Ésta página no está disponible</h5>
            </div>
                  
                    <img src="./src/img/error.jpg" alt="error"  className="img-error"/>
                    
                </Col>
                <Col className="text-center">
                    <Button type="submit" className="d-block mx-auto m-3" onClick={() => navigate("/")}>Volver a la página principal</Button>
                </Col>
            
        </Container>
    );
}

export default Error404;