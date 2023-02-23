import {useState} from 'react';
import Design from './design';
import Design2 from './Design2';

export default function Process() {
  const [isDiv1, setIsDiv1] = useState(true);
  const [isDiv2, setIsDiv2] = useState(false);
  const [isDiv3, setIsDiv3] = useState(false);
  const [isDiv4, setIsDiv4] = useState(false);

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

  return (
    <div class="design-container">
          <div class="design-list">
            <div class="design-list-item">
              <button onClick={handleClick1} class="number-icon" id="stage1">01.</button>
              <div class="design-list-info">
                <h3>Stage One</h3>
                <p>This happens</p>
              </div>
            </div>
            <div class="design-list-item">
              <button onClick={handleClick2} class="number-icon" id="stage2">02.</button>
              <div class="design-list-info">
                <h3>Stage Two</h3>
                <p>This happens</p>
              </div>
            </div>
            <div class="design-list-item">
              <button  onClick={handleClick3} class="number-icon" id="stage3">03.</button>
              <div class="design-list-info">
                <h3>Stage Three</h3>
                <p>This happens</p>
              </div>
            </div>
            <div class="design-list-item" id="design-list-item4">
              <button onClick={handleClick4} class="number-icon" id="stage4">04.</button>
              <div class="design-list-info">
                <h3>Stage Four</h3>
                <p>This happens</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{display: isDiv1 ? 'flex' : 'none'}}>
              <div class="design-info" id="design-info1">
                <div class="design-header">
                  <h4>Overview</h4>
                  <h4>Gallery</h4>
                </div>
                <div class="design-data">
                  <h5 id="stage-header">Stage one hehe, the CAD design</h5>
                  <br/>
                  <h6 id="stage-data">some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
                </div>
              </div>
            </div>
            <div style={{display: isDiv2 ? 'flex' : 'none'}}>
              <div class="design-info" id="design-info1">
                <div class="design-header">
                  <h4>Overview</h4>
                  <h4>Gallery</h4>
                </div>
                <div class="design-data">
                  <h5 id="stage-header">Stage two hehe, the CAD design</h5>
                  <br/>
                  <h6 id="stage-data">some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
                </div>
              </div>
            </div>
            <div style={{display: isDiv3 ? 'flex' : 'none'}}>
              <div class="design-info" id="design-info1">
                <div class="design-header">
                  <h4>Overview</h4>
                  <h4>Gallery</h4>
                </div>
                <div class="design-data">
                  <h5 id="stage-header">Stage three hehe, the CAD design</h5>
                  <br/>
                  <h6 id="stage-data">some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
                </div>
              </div>
            </div>
            <div style={{display: isDiv4 ? 'flex' : 'none'}}>
              <div class="design-info" id="design-info1">
                <div class="design-header">
                  <h4>Overview</h4>
                  <h4>Gallery</h4>
                </div>
                <div class="design-data">
                  <h5 id="stage-header">Stage four hehe, the CAD design</h5>
                  <br/>
                  <h6 id="stage-data">some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
                </div>
              </div>
            </div>
          </div>
        </div>



  );
}
