import '../styles/components/Design.css';
import '../styles/Globals.css';
import React, { useState } from "react";

const Design = () => {
  const div1 = (
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
  )

  const div2 = (
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
  )

  const div3 = (
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
  )

  const div4 = (
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
  )

  const divs = [div1, div2, div3, div4]

  const [selectDiv, setSelectDiv] = useState(divs[0]);

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

  // const onChange = (event) => {
  //   const value = event.target.value;
  //   setSelectValue(value);
  // };

  // return (
    // <div>
    //   <h2 className="mb-3">React Select onChange Example</h2>
    //   <select onChange={onChange} >
    //     <option defaultValue disabled>
    //       Select Fruit
    //     </option>
    //     <option value="Apples">x</option>
    //     <option value="Grape">
    //       Grape
    //     </option>
    //     <option value="Bananas">Bananas</option>
    //     <option value="Blueberries">Blueberries</option>
    //     <option value="Melons">Melons</option>
    //   </select>
    //   {selectValue && <h2 className="mt-3">{selectValue}</h2>}
    //   <div>
    //     <div class="design-info" id="design-info4">
    //       <div class="design-header">
    //         <h4>Overview</h4>
    //         <h4>Gallery</h4>
    //       </div>
    //       <div class="design-data">
    //         <h5>Stage four, durabilty and useability</h5>
    //         <br/>
    //         <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
    //       </div>
    //     </div>
    //     <p>{selectValue}</p>
    //     <h1>{selectValue}</h1>
    //   </div>
    // </div>
  // );


  // let stage1 = document.getElementById('stage1')
  // let stage2 = document.getElementById('stage2')
  // let stage3 = document.getElementById('stage3')
  // let stage4 = document.getElementById('stage4')

  // let designInfo1 = document.getElementById('design-info1')
  // let designInfo2 = document.getElementById('design-info2')
  // let designInfo3 = document.getElementById('design-info3')
  // let designInfo4 = document.getElementById('design-info4')

  // designInfo2.hidden = true;
  // designInfo3.hidden = true;
  // designInfo4.hidden = true;

  // // stage1.onclick = function() {
  //   designInfo1.hidden = false;
  //   designInfo2.hidden = true;
  //   designInfo3.hidden = true;
  //   designInfo4.hidden = true;
  // }

  // stage2.onclick = function() {
  //   designInfo1.hidden = true;
  //   designInfo2.hidden = false;
  //   designInfo3.hidden = true;
  //   designInfo4.hidden = true;
  // }

  // stage3.onclick = function() {
  //   designInfo1.hidden = true;
  //   designInfo2.hidden = true;
  //   designInfo3.hidden = false;
  //   designInfo4.hidden = true;
  // }

  // stage4.onclick = function() {
  //   designInfo1.hidden = true;
  //   designInfo2.hidden = true;
  //   designInfo3.hidden = true;
  //   designInfo4.hidden = false;
  // }


  // return (
    // <div class="design-container">
    //   <div class="design-list">
    //       <div class="design-list-item">
    //         <button class="number-icon" id="stage1">01.</button>
    //         <div class="design-list-info">
    //           <h3>Stage One</h3>
    //           <p>This happens</p>
    //         </div>
    //       </div>
    //     <div class="design-list-item">
    //       <button class="number-icon" id="stage2">02.</button>
    //       <div class="design-list-info">
    //         <h3>Stage Two</h3>
    //         <p>This happens</p>
    //       </div>
    //     </div>
    //     <div class="design-list-item">
    //       <button class="number-icon" id="stage3">03.</button>
    //       <div class="design-list-info">
    //         <h3>Stage Three</h3>
    //         <p>This happens</p>
    //       </div>
    //     </div>
    //     <div class="design-list-item" id="design-list-item4">
    //       <button class="number-icon" id="stage4">04.</button>
    //       <div class="design-list-info">
    //         <h3>Stage Four</h3>
    //         <p>This happens</p>
    //       </div>
    //     </div>
    //   </div>
      // <div class="design-info" id="design-info1">
      //   <div class="design-header">
      //     <h4>Overview</h4>
      //     <h4>Gallery</h4>
      //   </div>
      //   <div class="design-data">
      //     <h5>Stage one, the CAD design</h5>
      //     <br/>
      //     <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
      //   </div>
      // </div>

    //   <div class="design-info" id="design-info2">
    //     <div class="design-header">
    //       <h4>Overview</h4>
    //       <h4>Gallery</h4>
    //     </div>
    //     <div class="design-data">
    //       <h5>Stage two, the panel insulation and construction</h5>
    //       <br/>
    //       <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
    //     </div>
    //   </div>

    //   <div class="design-info" id="design-info3">
    //     <div class="design-header">
    //       <h4>Overview</h4>
    //       <h4>Gallery</h4>
    //     </div>
    //     <div class="design-data">
    //       <h5>Stage three, on-site construction</h5>
    //       <br/>
    //       <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
    //     </div>
    //   </div>

    //   <div class="design-info" id="design-info4">
    //     <div class="design-header">
    //       <h4>Overview</h4>
    //       <h4>Gallery</h4>
    //     </div>
    //     <div class="design-data">
    //       <h5>Stage four, durabilty and useability</h5>
    //       <br/>
    //       <h6>some text explaining what is going on in each stage, so that we can vread about whats happening at each point in thue build</h6>
    //     </div>
    //   </div>
    // </div>
  // )
}

export default Design
