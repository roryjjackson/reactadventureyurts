import {useState} from 'react';
import Design from './design'
export default function Process() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsVisible(current => !current);
  };

  return (

    <div>
      <button style={{visibility: isVisible ? 'visible' : 'hidden'}}>hiya</button>
      <div style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        < Design />
        <h2>Some content here</h2>
      </div>

      <button onClick={handleClick}>Toggle visibility</button>
    </div>
  );
}
