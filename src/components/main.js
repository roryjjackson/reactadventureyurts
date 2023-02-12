import Design from './design';
import ControlledCarousel from './gallery';
import '../styles/components/Main.css';

const main = () => {
  return (
    <div>
      <div class="section1">
        <div class="top-section">
          <div class="div1">
            <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1675731943/pexels-geoff-duke-365717_hftrjq.jpg" alt=""></img>
          </div>
          <div class="div2">
            <div>
              <div id="upper-text">
                <h4>Cool in summer, warm in winter</h4>
                <p>Family enterprise and some other text</p>
              </div>
              <h4 id="mid-text">CAD DESIGNED</h4>
              <div id="lower-text">
                <p>Fully customizable</p>
                <h3>Amazing product</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <div class="div3">
          </div>
          <div class="div4">
            <h4>Read more! </h4>
          </div>
        </div>
      </div>
      < Design/>
      <div class="prices">
        <h3>Prices start from £12'999</h3>
      </div>
      < ControlledCarousel />
    </div>
  )
}

export default main
