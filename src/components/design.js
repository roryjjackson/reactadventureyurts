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
        < FontAwesomeIcon icon={fa1} class="number-icon"></FontAwesomeIcon>
          <div class="design-list-info">
            <h3>Stage Four</h3>
            <p>This happens</p>
          </div>
        </div>
      </div>
      <div class="design-img">
        <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1669386894/pexels-diana-vorobevaattyakova-8972946_xmaxwo.jpg" alt="pic of a tent"></img>
      </div>
    </div>
  )
}

export default Design
