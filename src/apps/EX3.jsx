import { useState } from 'react';
import '../css/EX3.css';

function EX3 () {
  let [radius, setRadius] = useState('');
  let circumference = 2 * Math.PI * radius;
  let area = Math.PI * (radius ** 2);

  let handleRadius = (event) => {
    setRadius(event.target.value);
    console.log(`The circle's circumference is ${circumference} pixels.`);
    console.log(`The circle's area is ${area} pixels.`);
  }

  return (
    <div id='ex3-main-container'>
      <div id='circle-container'>
        <div 
        id='circle'
        style={{
          width: `${radius}px`,
          height: `${radius}px`,
          border: '1px solid yellow',
          borderRadius: '50%'
        }}
        ></div>
      </div>
      <input type='number' placeholder='Enter radius (pixels):' onChange={handleRadius}></input>
    </div>
  )
}

export default EX3