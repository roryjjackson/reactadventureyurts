import {useState} from 'react';
import '../styles/components/Design.css';
import '../styles/Globals.css';

export default function Process() {
  const [isDiv1, setIsDiv1] = useState(true);
  const [isDiv2, setIsDiv2] = useState(false);
  const [isDiv3, setIsDiv3] = useState(false);
  const [isDiv4, setIsDiv4] = useState(false);
  const [isShowingPhoto, setIsShowingPhoto] = useState(false);
  const [isShowingOverview, setIsShowingOverview] = useState(true)

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

  const handleClick5 = event => {
    setIsShowingPhoto(current => !current);
    setIsShowingOverview(current => !current);
  }

  return (
    <div class="design-container">
      <div class="design-list">
        <button onClick={handleClick1} class="design-list-item" id="stage1">
          <div style={{backgroundColor: isDiv1 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}} class="design-list-item">
            <div class="design-list-info">
              <h3>Stage One</h3>
              <p>This happens</p>
            </div>
          </div>
        </button>
        <button onClick={handleClick2} class="design-list-item" id="stage2">
          <div style={{backgroundColor: isDiv2 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}} class="design-list-item">
            <div class="design-list-info">
              <h3>Stage Two</h3>
              <p>This happens</p>
            </div>
          </div>
        </button>
        <button  onClick={handleClick3} class="design-list-item" id="stage3">
          <div style={{backgroundColor: isDiv3 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}} class="design-list-item">
            <div class="design-list-info">
              <h3>Stage Three</h3>
              <p>This happens</p>
            </div>
          </div>
        </button>
        <button onClick={handleClick4} class="design-list-item" id="stage4">
          <div style={{backgroundColor: isDiv4 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}} class="design-list-item" id="design-list-item4">
            <div class="design-list-info">
              <h3>Stage Four</h3>
              <p>This happens</p>
            </div>
          </div>
        </button>
      </div>
      <div>
        <div style={{display: isDiv1 ? 'flex' : 'none'}}>
          <div class="design-info" id="design-info1">
            <div class="design-header">
              <h4>Overview</h4>
              <h4>Photos</h4>
            </div>
            <div class="design-data">
              <h5 id="stage-header">Stage one, the CAD design</h5>
              <br/>
              <h6 id="stage-data">some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
            </div>
          </div>
        </div>
        <div style={{display: isDiv2 ? 'flex' : 'none'}}>
          <div class="design-info" id="design-info1">
            <div class="design-header">
              <h4>Overview</h4>
              <h4>Photos</h4>
            </div>
            <div class="design-data">
              <h5 id="stage-header">Stage two, CNC machine?</h5>
              <br/>
              <h6 id="stage-data">some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
            </div>
          </div>
        </div>
        <div style={{display: isDiv3 ? 'flex' : 'none'}}>
          <div class="design-info" id="design-info1">
            <div class="design-header">
              <h4>Overview</h4>
              <h4>Photos</h4>
            </div>
            <div class="design-data">
              <h5 id="stage-header">Stage three, construction with foam?</h5>
              <br/>
              <h6 id="stage-data">some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
            </div>
          </div>
        </div>
        <div style={{display: isDiv4 ? 'flex' : 'none'}}>
          <div class="design-info" id="design-info1">
            <div class="design-header">
              <h4>Overview</h4>
              <h4>Photos</h4>
            </div>
            <div class="design-data">
              <h5 id="stage-header">Stage four, delivery and on-site construction</h5>
              <br/>
              <h6 id="stage-data">some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
