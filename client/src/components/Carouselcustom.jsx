// Carouselcustom.js

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carouselcustom.css';



function Carouselcustom({ cardItems }) {

  

  return (
    <Carousel fade className='w-1/2 h-1/2 mx-auto my-5' >
      {cardItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img src={item.imgURL} className="w-3/4 h-3/4 object-contain" alt="" />
          <Carousel.Caption>
            <h3 className='text-5xl'>{item.title}</h3>
            <p className='text-3xl'>{item.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carouselcustom;

