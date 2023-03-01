import '../styles/components/WhyRound.css';
import {useState} from 'react';
import Popup from './Popup';

const WhyRound = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="whyround-container">
      <div className="whyround-left">
        <h3 id="subheader5">So why round?</h3>
      </div>
      <div className="whyround-right">
        <h5>The beauty of the round design runs deep. Trusting in the wisdom of the natural world and ancient and aboriginal cultures, we have chosen to build round for its many benefits including energy and resource efficiency, structural strength and its distinctive aesthetic and acoustic qualities.</h5>
        < br/>
        <button className="button" onClick={ event => {setReadMore(true)}}>Read more</button>
      </div>

      <Popup trigger={readMore} setTrigger={setReadMore} >
        <div className="whyround-popup-container">
          <p>The round shape is a naturally green design. Round homes use less wall, floor and roof materials to enclose the same square footage as a rectangular structure. In fact 15 to 20% less material is used to create the same square foot building compared to a rectangular design! That means less surface area in contact with adverse weather conditions such as high heat, extreme cold, wind and driving rains improving the overall durability and energy efficiency of the home. Comparing the energy efficiency of a rectangular building to a round building of the same size is also revealing. Heat circulates better in a round space and there is less exterior surface area for heat to escape from. To maximize energy efficiency, we always use high spec insulation.</p>
          <br/>
          <p>Another benefit of the round design is its superior structural strength. A testament to round buildings around the globe, they are extremely good at withstanding severe weather includ-ing earth quakes, extreme winds and heavy snowfall. Our Yurts are engineered specially to withstand the seismic, wind and snow loads of your area.</p>
          <br/>
          <p>The acoustics in an Adventure Yurt are exceptional. The round shape softens the sounds inside the building making it the perfect place for rest and reflection or for socializing and listening to and playing music. The shape also prevents noise from penetrating in from the outside. Sound waves dissipate as they wrap around the building, shielding you from out-side noise. This creates a haven of peace away from home even if it’s only at the bottom of the garden.</p>
        </div>
      </Popup>
    </div>
  )
}

export default WhyRound;
