import { useState } from 'react';
import '../css/EX7.css'

function EX7 () {
  // intialize vars
  const [display, setDisplay] = useState([]);
  let inputArray = []

  // onclick handler
  const handleSubmit = () => {
    let userInput = document.getElementById('ex7-input');

    while (userInput.value.toLowerCase() !== "stop"){
      inputArray.push(userInput.value);
      userInput.value = '';
      console.log(inputArray);
      break;
    }
    if (userInput.value === "stop") {
      setDisplay(inputArray);
      console.log("No words to display, 'stop' was entered.")
    }
  }


  return (
    <div 
      id="ex7-main-container">
        <input type='text' id='ex7-input' placeholder='Keep entering words:'></input>
        <button id='ex7-submit' onClick={handleSubmit}>Submit</button>
        <h2>Refer to console.</h2>
        <h2>Output:</h2>
        <div id='ex7-output'>
          <h2>[{display.join(', ')}]</h2>
        </div>
      </div>
  )
}

export default EX7;