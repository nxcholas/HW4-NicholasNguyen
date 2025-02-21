import { useState } from 'react';
import '../css/EX3.css';

function EX3() {
  const [radius, setRadius] = useState('');
  const [circumference, setCircumference] = useState(0);
  const [area, setArea] = useState(0);

  const handleRadius = (event) => {
    const newRadius = Number(event.target.value); // convert input to a number
    setRadius(newRadius);

    // calculate circumference and area
    const newCircumference = 2 * Math.PI * newRadius;
    const newArea = Math.PI * (newRadius ** 2);

    // update state
    setCircumference(newCircumference);
    setArea(newArea);

    // log results
    console.log(`The circle's circumference is ${newCircumference} pixels.`);
    console.log(`The circle's area is ${newArea} pixels.`);
  };

  return (
    <div id='ex3-main-container'>
      <div id='circle-container'>
        <div
          id='circle'
          style={{
            width: `${2 * radius}px`, 
            height: `${2 * radius}px`, 
            border: '1px solid yellow',
            borderRadius: '50%',
          }}
        ></div>
      </div>
      <input
        id='ex3-input'
        type='number'
        placeholder='Scroll or enter radius:'
        onChange={handleRadius}
      />
    </div>
  );
}

export default EX3;