import React, {useState} from 'react';
import '../css/EX1.css';


function EX1 () {
  const gridSize = 4; //4x4 grid
  let [display, setDisplay] = useState("");

  // creates an array with 16 empty values
  const tiles = Array.from({length: gridSize * gridSize}); 
  const nums = {
    5: "4",
    6: "5",
    7: "6",
    9: "7",
    10: "8",
    11: "9",
  }
  const operators = {
    4: "+",
    8: "-",
    12: "*",
    13: "0",
    14: ".",
    15: "/",
    16: "=",
  }

  function handleClick (value) {
    // do something
    setDisplay((prevDisplay) => prevDisplay + value);
  }

  function handleEquals () {
    try {
      console.log("Entered:", display);
      let result = eval(display);
      console.log("Result:", result)
      setDisplay(result);
    } catch {
      setDisplay("Error");
      console.log("Invalid input.")
    }
  }
  
  function handleClear () {
    setDisplay("");
    console.log("Screen cleared.")
  }

  return (
    <>
      <div id='main-container'>
        <div id='calculator-container'>
          <div id='calculator-screen'>
            <button onClick={handleClear}>A/C</button>
            <p>{display}</p>
          </div>
          <div id='calculator-buttons-container'>
          {/* .map() loops over each empty array item and creates a div */}
          {/* syntax:  .map(value, position of item)*/}
          {/* !!! _ is used as a placeholder to ignore values */}
          {tiles.map((_, index) => (
              <div key={index} 
              className='tiles'
              onClick={index === 15 ? handleEquals : (e) => handleClick(e.target.textContent)}
              >
                {operators[index + 1] || nums[index +1] || index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EX1;