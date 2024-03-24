import {Button, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
import './footer.css'

const Footer = () => {
  const navigate = useNavigate ()
  return (
    < >
    
   <div className="container-fluid">
    <div className="row">

    <div className="col-md-4 col-sm-12">
        <Card style={{ width: '20rem', height: '10rem' }} id="cardFooter">
          <Card.Body>
            <img src="./logo.jpeg" className="rounded-circle" id= "img-card-footer" alt="Logo" />
            <h5 id="h5">InventoryIQ</h5>
          </Card.Body>
        </Card>
        </div>
       

        
    <div className="col-md-4 col-sm-12">
        <Card style={{ width: '20rem', height: '10rem' }} id="cardFooter2">
          <Card.Body>
            <Card.Title>
          <h5 id= "h5" >Nuestras redes sociales</h5>
            </Card.Title>
            <div className="container-icon-footer d-flex justify-content-between m-1 p-0">
              <img src="../public/square-facebook.svg" className="icon-footer" alt="" />
              <img src="../public/square-instagram.svg" className="icon-footer" alt="" />
              <img src="../public/square-x-twitter.svg" className="icon-footer" alt="" />
              <img src="../public/square-whatsapp.svg" className="icon-footer" alt="" />
            </div>
            <div className="container-icon-footer d-flex justify-content-between m-1 p-0">
              <img src="../public/facebook-messenger.svg" className="icon-footer" alt="" />
              <img src="../public/google.svg" className="icon-footer" alt="" />
              <img src="../public/telegram.svg" className="icon-footer" alt="" />
              <img src="../public/youtube.svg" className="icon-footer" alt="" />
            </div>
          </Card.Body>
        </Card>
        </div>
        

       
    <div className="col-md-4 col-sm-12">
        <Card style={{ width: '20rem', height: '10rem' }} id="cardFooter3">
          <Card.Body>
            <Button id="btn-footer" variant="primary" onClick={() => navigate("/about")}>About</Button>
            <Button id="btn-footer" variant="primary" onClick={() => navigate("/")}>Principal</Button>
            <Button id="btn-footer" variant="primary" onClick={() => navigate("/contacto")}>Contacto</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default Footer


