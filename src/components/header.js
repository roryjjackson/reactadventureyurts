// import Link from 'next/link';
import React from 'react';
import '../styles/components/Header.css';
import '../styles/Globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <nav>
          <div id="top" className="header-container">
            <div className="header-logo">
              <p>Adventure Yurts</p>
            </div>
            <ul className="header-items">
              <a href="#top"><li>Home</li></a>
              <a href="#design"><li>The Design</li></a>
              <a href="#gallery"><li>Gallery</li></a>
              <a href="#pricing"><li>Pricing</li></a>
              <a href="#contact"><li>Contact</li></a>
            </ul>
          </div>
          <div class="title-container">
            <div class="title-block">
              <div>
                <h1>Adventure Yurts</h1>
                <h2>Round, insulated and durable.</h2>
              </div>
              <div class="lets-go">
                <a id="lets-go-btn" href="/">Lets Go<FontAwesomeIcon icon={faArrowRight} id="right-arrow1"></FontAwesomeIcon></a>
              </div>
            </div>
            <div class="slogan-container">
              <div class="slogan-block">
                <p id="slogan">We build CAD designed yurts using commercial machinery.</p>
                <p>We build CAD designed yurts using commercial machinery.</p>
              </div>
              <div class="social-media-icons-container">
                <FontAwesomeIcon icon={faInstagram} class="social-media-icons"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFacebook} class="social-media-icons"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faYoutube} class="social-media-icons"></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Header;
