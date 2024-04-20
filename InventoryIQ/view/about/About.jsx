import React from 'react'
import { Carousel } from 'react-bootstrap';
import { FaHistory, FaBullseye } from 'react-icons/fa';
import './about.css'

const About = () => {
  return (
    <>
    <div className="container-fluid">
      <h2 className="text-center mb-4">About Us</h2>

      {/* Carrusel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path_to_image1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path_to_image2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Agregar más slides según necesites */}
      </Carousel>

      {/* Descripción */}
      <div className="mt-5">
        <h3><FaHistory /> Our History</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, neque non tempus aliquet, lectus ex dapibus risus, vel consectetur odio nisl id erat.
        </p>

        <h3><FaBullseye /> Our Mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, neque non tempus aliquet, lectus ex dapibus risus, vel consectetur odio nisl id erat.
        </p>
      </div>

      {/* Equipo */}
      <div className="mt-5">
        <h3>Our Team</h3>
        <div className="row justify-content-center mt-4">
          {/* Card para cada integrante */}
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="path_to_member1.jpg" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title">Member 1</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="path_to_member1.jpg" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title">Member 1</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="path_to_member1.jpg" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title">Member 1</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="path_to_member1.jpg" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title">Member 1</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 mb-4">
            <div className="card">
              <img src="path_to_member1.jpg" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title">Member 1</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>

          {/* Agregar más cards para otros integrantes */}
        </div>
      </div>
    </div>
    </>
  );
};

export default About