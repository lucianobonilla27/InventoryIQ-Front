import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../img/carrusel1.jpg'; 
import Image2 from '../../img/carrusel2.jpg'; 
import Image3 from '../../img/carrusel3.jpg'; 

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="imagen 1 del carousel" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="imagen 2 del carousel" />
      
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="imagen 3 del carousel" />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
