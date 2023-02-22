import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/components/Carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect} id="gallery">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfipoufmj/image/upload/v1669387106/pexels-zh-xrong-3733588_g07t4y.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Stage one</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfipoufmj/image/upload/v1669281728/pexels-quintin-gellar-313776_dpapc6.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Stage two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfipoufmj/image/upload/v1669281726/pexels-pixabay-277696_jjhe6d.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Stage three</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default ControlledCarousel
