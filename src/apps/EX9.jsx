import { useState } from "react";
import '../css/EX9.css';

function EX9() {
  const [display, setDisplay] = useState('');
  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);
  const [counter, setCounter] = useState(0);

  console.log("Random number:", random);

  const handleSubmit = () => {
    let input = document.getElementById('ex9-input');

    if (isNaN(input.value)) {
      setDisplay("Please enter a valid number.");
      return;
    }

    if (Number(input.value) === random) {
      setDisplay(`Correct! It took you ${counter + 1} attempts to guess the right number.`);
      console.log(`Correct! It took you ${counter + 1} attempts to guess the right number.`);
      setCounter(0);
      setRandom(Math.floor(Math.random() * 100) + 1);
    } else if (Number(input.value) > random) {
      setDisplay("Too high, guess again.");
      console.log("Too high, guess again.");
      setCounter(counter + 1);
    } else if (Number(input.value) < random) {
      setDisplay("Too low, guess again.");
      console.log("Too low, guess again.");
      setCounter(counter + 1);
    }

    input.value = ''; 
  };

  return (
    <div id="ex9-main-container">
      <h2>Guess the right number!</h2>
      <h1>{display}</h1>
      <input
        type="number"
        id="ex9-input"
      />
      <button
        id="ex9-submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default EX9;