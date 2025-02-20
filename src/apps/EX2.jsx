import { useState } from 'react';
import '../css/EX2.css';
function EX2 () {
  const [temp, setTemp] = useState('');

  const handleChange = (event) => {
    let input = document.getElementById('temp-input').value;
    setTemp(((event.target.value - 32) * 5/9).toFixed(2));
    console.log("Water's boiling temperature is 212 Fahrenheit or 100 Celsius")
    console.log("32 degrees Fahrenheit = 0 degrees Celsius")
    console.log(`Temperature of ${input} Fahrenheit is ${temp} degrees Celsius`)
  }

  return (
    <div id="EX2-main-container">
      <h1 className='ex2-output'>Water's boiling temperature is 212 Fahrenheit or 100 Celsius.</h1>
      <h1 className='ex2-output'>32 degrees Fahrenheit = 0 degrees Celsius</h1>
      <h1 className='ex2-output'>Temperature in Celsius: {temp}</h1>
      <input id="temp-input" type="number" placeholder="Enter temperature:" onChange={handleChange}></input>
    </div>
  )
}

export default EX2;