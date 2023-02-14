import '../styles/components/Design.css';
import '../styles/Globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';


const Design = () => {
  return (
    <div class="design-container">
      <div class="design-list">
        <div class="design-list-item">
        < FontAwesomeIcon icon={fa1} class="number-icon"></FontAwesomeIcon>
            <div class="design-list-info">
              <h3>Stage One</h3>
              <p>This happens</p>
            </div>
        </div>
        <div class="design-list-item">
        < FontAwesomeIcon icon={fa2} class="number-icon"></FontAwesomeIcon>
            <div class="design-list-info">
              <h3>Stage Two</h3>
              <p>This happens</p>
            </div>
        </div>
        <div class="design-list-item">
        < FontAwesomeIcon icon={fa3} class="number-icon"></FontAwesomeIcon>
            <div class="design-list-info">
              <h3>Stage Three</h3>
              <p>This happens</p>
            </div>
        </div>
        <div class="design-list-item">
        < FontAwesomeIcon icon={fa4} class="number-icon"></FontAwesomeIcon>
          <div class="design-list-info">
            <h3>Stage Four</h3>
            <p>This happens</p>
          </div>
        </div>
      </div>
      <div class="design-info">
        <div class="design-header">
          <h4>Overview</h4>
          <h4>Gallery</h4>
          <h4>Maps</h4>
        </div>
        <div class="design-data">
          <h5>This is something lovely</h5>
          <br/>
          <h6>some more text here about something</h6>
        </div>
        <div class="design-links">
          {/* <a href="/">A button</a> */}
          {/* <img src="/" alt="/"></img> */}
        </div>
      </div>
    </div>
  )
}

export default Design
