import React from 'react'
import { Carousel } from 'react-bootstrap';
import { FaHistory, FaBullseye } from 'react-icons/fa';
import './about.css'

const About = () => {
  return (
    <>
    <div className="container-fluid">
      <h2 className="text-center my-3">Quienes somos</h2>

      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mecaluxar.cdnwm.com/blog/img/control-de-stock-deposito.1.1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.il-latam.com/wp-content/uploads/2023/06/Control-del-Inventario-vs.-Optimizacion-del-Inventario-e1687813689818.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cms.ar-racking.com/uploads/2021/03/tipos-stock-almacen-1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="mt-5">
        <h3><FaHistory /> Nuestra Historia</h3>
        <p>
          Todo empezó con una idea simple pero poderosa: ayudar a los comerciantes locales a gestionar mejor su inventario y a maximizar sus ventas.
        </p>
        <p>Nuestro fundador, Luciano, había trabajado en el sector del comercio durante años y había experimentado de primera mano los desafíos de mantener un control eficiente del stock. decidió crear una solución innovadora: un sistema de control de stock fácil de usar, flexible y adaptado a las necesidades de los pequeños y medianos comerciantes.</p>
        <p>Con el apoyo de un pequeño equipo de desarrolladores y expertos en negocios, lanzamos nuestra primera versión del software de control de stock. A medida que los comerciantes comenzaron a utilizar nuestra plataforma, nos dimos cuenta de que estábamos en algo grande. Con el tiempo, hemos crecido y evolucionado, pero nuestra misión sigue siendo la misma: ofrecer herramientas poderosas y fáciles de usar que permitan a los comerciantes gestionar su inventario de manera eficiente, aumentar sus ventas y hacer crecer sus negocios. Hoy en día, estamos orgullosos de haber ayudado a miles de comerciantes a tener éxito.</p>
        <h3><FaBullseye /> Nuestra mision</h3>
        <p>
        Facilitar el éxito de los comerciantes ofreciendo un control de stock inteligente, intuitivo y personalizado que les permita optimizar sus operaciones, aumentar sus ventas y crecer de manera sostenible.
        </p>
      </div>

      <div className="mt-5">
        <h3 className="row justify-content-center mt-4">Nuestro equipo</h3>
        <div className="row justify-content-center mt-4">
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title text-truncate">Luciano Bonilla</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title text-truncate">Lorena Oterino</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title text-truncate">Facundo Medina</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title text-truncate">Monica Ruiz</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title text-truncate">Claudio Armando</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About