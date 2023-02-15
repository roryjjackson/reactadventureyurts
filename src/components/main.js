import Design from './design';
import ControlledCarousel from './gallery';
import '../styles/components/Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const main = () => {
  return (
    <div>
      <div id="section1">
        <div class="top-section">
          <div class="div1">
            {/* <h3>Designed and built in the North East, UK.</h3> */}
            <p>< FontAwesomeIcon icon={faLocationDot} id="location-dot"></FontAwesomeIcon>Millenium bridge, North East</p>
          </div>
          <div class="div2">
            <div>
              <div id="upper-text">
                <h4>Perfectly round,</h4>
                <p>CAD designed wooden yurt</p>
              </div>
              <h4 id="mid-text">FAMILY RUN BUSINESS</h4>
              <div id="lower-text">
                <p>Fully customizable, unique outdoor living</p>
                <h3>Escape the house</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <div class="div3">
          </div>
          <div class="div4">
            <h4>Contact us <FontAwesomeIcon icon={faArrowRight} id="right-arrow"></FontAwesomeIcon></h4>
          </div>
        </div>
      </div>
      < Design/>
      < ControlledCarousel />

      <div class="prices">
        <h3>Prices start from £12'999</h3>
      </div>
      < ControlledCarousel />
    </div>
  )
}

export default main
