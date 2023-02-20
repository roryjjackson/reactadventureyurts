import '../styles/components/Design.css';
import '../styles/Globals.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';


const Design = () => {
  return (
    <div class="design-container">
      <div class="design-list">
          <div class="design-list-item">
            <button class="number-icon" id="stage1">01.</button>
            <div class="design-list-info">
              <h3>Stage One</h3>
              <p>This happens</p>
            </div>
          </div>
        <div class="design-list-item">
          <button class="number-icon" id="stage2">02.</button>
          <div class="design-list-info">
            <h3>Stage Two</h3>
            <p>This happens</p>
          </div>
        </div>
        <div class="design-list-item">
          <button class="number-icon" id="stage3">03.</button>
          <div class="design-list-info">
            <h3>Stage Three</h3>
            <p>This happens</p>
          </div>
        </div>
        <div class="design-list-item" id="design-list-item4">
          <button class="number-icon" id="stage4">04.</button>
          <div class="design-list-info">
            <h3>Stage Four</h3>
            <p>This happens</p>
          </div>
        </div>
      </div>
      <div class="design-info" id="design-info1">
        <div class="design-header">
          <h4>Overview</h4>
          <h4>Gallery</h4>
        </div>
        <div class="design-data">
          <h5>Stage one, the CAD design</h5>
          <br/>
          <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
        </div>
      </div>

      <div class="design-info" id="design-info2">
        <div class="design-header">
          <h4>Overview</h4>
          <h4>Gallery</h4>
        </div>
        <div class="design-data">
          <h5>Stage two, the panel insulation and construction</h5>
          <br/>
          <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
        </div>
      </div>

      <div class="design-info" id="design-info3">
        <div class="design-header">
          <h4>Overview</h4>
          <h4>Gallery</h4>
        </div>
        <div class="design-data">
          <h5>Stage three, on-site construction</h5>
          <br/>
          <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
        </div>
      </div>

      <div class="design-info" id="design-info4">
        <div class="design-header">
          <h4>Overview</h4>
          <h4>Gallery</h4>
        </div>
        <div class="design-data">
          <h5>Stage four, durabilty and useability</h5>
          <br/>
          <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
        </div>
      </div>
    </div>
  )
}

export default Design

let stage1 = document.getElementById('stage1')
let stage2 = document.getElementById('stage2')
let stage3 = document.getElementById('stage3')
let stage4 = document.getElementById('stage4')

let designInfo1 = document.getElementById('design-info1')
let designInfo2 = document.getElementById('design-info2')
let designInfo3 = document.getElementById('design-info3')
let designInfo4 = document.getElementById('design-info4')

designInfo2.hidden = true;
designInfo3.hidden = true;
designInfo4.hidden = true;

stage1.onclick = function() {
  designInfo1.hidden = false;
  designInfo2.hidden = true;
  designInfo3.hidden = true;
  designInfo4.hidden = true;
}

stage2.onclick = function() {
  designInfo1.hidden = true;
  designInfo2.hidden = false;
  designInfo3.hidden = true;
  designInfo4.hidden = true;
}

stage3.onclick = function() {
  designInfo1.hidden = true;
  designInfo2.hidden = true;
  designInfo3.hidden = false;
  designInfo4.hidden = true;
}

stage4.onclick = function() {
  designInfo1.hidden = true;
  designInfo2.hidden = true;
  designInfo3.hidden = true;
  designInfo4.hidden = false;
}
