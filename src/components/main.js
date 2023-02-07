import Design from './design';
import ControlledCarousel from './gallery';
import '../styles/components/Main.css';

const main = () => {
  return (
    <div>
      <div class="section1">
        <div class="parent">
          <div class="div1">
            <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1675731943/pexels-geoff-duke-365717_hftrjq.jpg" alt=""></img>
          </div>
          <div class="div2">
            <h4>Cool in summer, warm in winter</h4>
            <h4>Family enterprise</h4>
            <h4>CAD designed</h4>
            <h4>Fully customizable</h4>
            <h4>Amazing product</h4>
          </div>
          <div class="div3">
            <h4>Read more...</h4>
          </div>
          <div class="div4">
            <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1662388365/cld-sample-2.jpg" alt=""></img>
          </div>
        </div>
      </div>
      < Design/>
      <div>
        <h3>Prices start from £12'999</h3>
      </div>
      < ControlledCarousel />
    </div>
  )
}

export default main
