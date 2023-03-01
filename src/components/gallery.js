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
            <h3>Inspired by nature</h3>
            <p>Outdoor living and fresh air soothes the mind</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfipoufmj/image/upload/v1669386894/pexels-diana-vorobevaattyakova-8972946_xmaxwo.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Traditional</h3>
            <p>Keeping our design similar to the traditional shape is integral</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfipoufmj/image/upload/v1677668749/pexels-matej-716661_pfv04a.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Design</h3>
            <p>We've spent years tinkering with the design until it works seamlessly</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default ControlledCarousel
