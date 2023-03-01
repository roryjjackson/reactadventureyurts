import {useState} from 'react';
import '../styles/components/Design.css';
import '../styles/Globals.css';
import React from 'react';


export default function Process() {
  const [isDiv1, setIsDiv1] = useState(true);
  const [isDiv2, setIsDiv2] = useState(false);
  const [isDiv3, setIsDiv3] = useState(false);
  const [isDiv4, setIsDiv4] = useState(false);
  // const [isShowingPhoto, setIsShowingPhoto] = useState(false);
  // const [isShowingOverview, setIsShowingOverview] = useState(true)

  const handleClick1 = event => {
    // 👇️ toggle visibility
    setIsDiv1(current => true);
    setIsDiv2(current => false);
    setIsDiv3(current => false);
    setIsDiv4(current => false);
  };

  const handleClick2 = event => {
    // 👇️ toggle visibility
    setIsDiv1(current => false);
    setIsDiv2(current => true);
    setIsDiv3(current => false);
    setIsDiv4(current => false);
  };
  const handleClick3 = event => {
    // 👇️ toggle visibility
    setIsDiv1(current => false);
    setIsDiv2(current => false);
    setIsDiv3(current => true);
    setIsDiv4(current => false);
  };
  const handleClick4 = event => {
    // 👇️ toggle visibility
    setIsDiv1(current => false);
    setIsDiv2(current => false);
    setIsDiv3(current => false);
    setIsDiv4(current => true);
  };

  // const handleClick5 = event => {
  //   setIsShowingPhoto(current => !current);
  //   setIsShowingOverview(current => !current);
  // }

  return (
    <div class="design-container">
      <div class="design-list">
        <button onClick={handleClick1} class="design-list-item" id="stage1">
          <div style={{backgroundColor: isDiv1 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}} class="design-list-item">
            <div class="design-list-info">
              <h3>Stage One</h3>
              <p>Basic construction</p>
            </div>
          </div>
        </button>
        <button onClick={handleClick2} class="design-list-item" id="stage2">
          <div style={{backgroundColor: isDiv2 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}} class="design-list-item">
            <div class="design-list-info">
              <h3>Stage Two</h3>
              <p>Choose a finish</p>
            </div>
          </div>
        </button>
        <button  onClick={handleClick3} class="design-list-item" id="stage3">
          <div style={{backgroundColor: isDiv3 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}} class="design-list-item">
            <div class="design-list-info">
              <h3>Stage Three</h3>
              <p>Roof selection</p>
            </div>
          </div>
        </button>
        <button onClick={handleClick4} class="design-list-item" id="stage4">
          <div style={{backgroundColor: isDiv4 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}} class="design-list-item" id="design-list-item4">
            <div class="design-list-info">
              <h3>Stage Four</h3>
              <p>The base</p>
            </div>
          </div>
        </button>
      </div>
      <div>
        <div class="design-overview-container" style={{display: isDiv1 ? 'flex' : 'none'}}>
          <div class="design-info" id="design-info1">
            <div class="design-header">
              <h4>Overview</h4>
              {/* <h4>Photos</h4> */}
            </div>
            <div class="design-data">
              <h5 id="stage-header">The basic construction</h5>
              <br/>
              <h6 id="stage-data">11 curved wall panels, 1 curved door, 12 roof panels</h6>
              < br />
              <p>Wall and roof panels are locked together using stainless steel bolts (easy and quick self assembly)</p>
              < br />
              <p>Each panel has massive strength by bonding the inner and outer surfaces together with injected closed cell polyurethane insulation (exactly the same materials used in freezer cabinets). An 18mm waterproof plywood frame adds rigidity within each panel.</p>
              < br />
              <p>Round structural and insulated floor. The floor (or base) is manufactured using similar techniques to the wall and roof panels, using fully recycled plastic underside for maintenance free long life and typically engineered hardwood on the inside.</p>
              < br />
              <p>Daylight is provided by a 750mm diameter roof dome triple glazed.</p>
            </div>
          </div>
        </div>
        <div class="design-overview-container" style={{display: isDiv2 ? 'flex' : 'none'}}>
          <div class="design-info" id="design-info1">
            <div class="design-header">
              <h4>Overview</h4>
              {/* <h4>Photos</h4> */}
            </div>
            <div class="design-data">
              <h5 id="stage-header">Choose a finish</h5>
              <br/>
              <h6 id="stage-data">Choose the wooden finishes on the inside and outside</h6>
              <br/>
              <p>Each wall, roof and wall panel can be finished in virtually any sheet material or panelling available, on the inside and outside. Your imagination is the limit</p>
              <br/>
              <p>As standard, the yurt is finished with a high performance waterproof plywood (used on Brighton Pier !) with locally sourced douglas fir cladding on the exterior walls.</p>
            </div>
          </div>
        </div>
        <div class="design-overview-container" style={{display: isDiv3 ? 'flex' : 'none'}}>
          <div class="design-info" id="design-info1">
            <div class="design-header">
              <h4>Overview</h4>
              {/* <h4>Photos</h4> */}
            </div>
            <div class="design-data">
              <h5 id="stage-header">Roof selection</h5>
              <br/>
              <h6 id="stage-data">Depending on the use, each Yurt is designed with a choice of roof finish (from high performance rubber to a natural growing roof like Sedum).</h6>
              <br/>
              <p>Heating and ventilation can be controlled easily because each Yurt is so energy efficient. This means a small wood burner keeps it cosy in the winter and a small aircon unit cools it during UK warmer summers.</p>
              <br/>
              <p>Ventilation is provided by intelligent vents which monitor temperature and humidity to provide excellent air quality (crucial in such a small space).</p>
              <br/>
              <p>Wall panels can be fitted with electrical conduit allowing mains and data connections. Off grid power for lighting and charging phones etc can be provided by solar electric panels with battery storage.</p>
            </div>
          </div>
        </div>
        <div class="design-overview-container" style={{display: isDiv4 ? 'flex' : 'none'}}>
          <div class="design-info" id="design-info1">
            <div class="design-header">
              <h4>Overview</h4>
              {/* <h4>Photos</h4> */}
            </div>
            <div class="design-data">
              <h5 id="stage-header">The base</h5>
              <br/>
              <h6 id="stage-data">Depending on the location and use of each Yurt, we have many different solutions for mounting the base onto the ground.</h6>
              <br/>
              <p>Typically we use either ground screws or recycled plastic formers to provide a solid, structural base.</p>
              <br/>
              <p>The basic Yurt design makes self assembly by a couple of people straightforward, although a turnkey supply and install service is available UK wide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
