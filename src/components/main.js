import ControlledCarousel from './gallery';
import '../styles/components/Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import BasicExample from './Table';
import Process from './Process';
import React from 'react';
import WhyRound from './WhyRound';

const main = () => {

  return (
    <div>
      <div id="who-we-are" class="subheader-container">
        <h2 id="subheader1">Who we are</h2>
        <br />
        <p>Write a sentence or two here about who we are and what we are trying to do?</p>
        <button className="button">Read more</button>
        {/* <p>Our story</p> */}
      </div>
      <div id="section1">
        <div class="top-section">
          <div class="div1">
            <p>< FontAwesomeIcon icon={faLocationDot} id="location-dot"></FontAwesomeIcon>Under construction, North East</p>
          </div>
          <div class="div2">
            <div>
              <div id="upper-text">
                <h4>Perfectly round wooden yurts,</h4>
                <p>Fully customizable to any finish.</p>
              </div>
              <h4 id="mid-text">Highest quality build, combining the accuracy of CNC machining with hand assembly and finishing</h4>
              <div id="lower-text">
                <p>Small Family run North east business</p>
                <h3>Escape the house into the outdoors</h3>
              </div>
            </div>
          </div>
          <div class="div1-second">
            <p>< FontAwesomeIcon icon={faLocationDot} id="location-dot"></FontAwesomeIcon>Under construction, North East</p>
          </div>
        </div>
        <div class="bottom-section">
          <div class="div3">
          </div>
          <div class="div4">
            <a href="#contact"><h4>Contact us <FontAwesomeIcon icon={faArrowRight} id="right-arrow"></FontAwesomeIcon></h4></a>
          </div>
        </div>
      </div>
      < ControlledCarousel />
      <div id="design" class="subheader-container">
        <h2 id="subheader1">Our process timeline</h2>
        <p>Take a closer look at how we deliver the product</p>
      </div>
      < Process />
      <div id="pricing" class="subheader-container">
        <h3 id="subheader2">Pricing</h3>
        <p>Our guideline pricing table</p>
      </div>

      < BasicExample />
      <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1677670035/pexels-oleksandr-pidvalnyi-345522_mbe3vi.jpg" alt="" id="image1"></img>
      < WhyRound />
      < ContactForm/>
    </div>
  )
}

export default main
