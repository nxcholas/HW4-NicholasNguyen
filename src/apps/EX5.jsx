import '../css/EX5.css';

function EX5 () {
  // initialized variables
  const values = [3, 11, 7, 2, 9, 10];
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  // functions
  function sumOf () {
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
      }
    }
  
  function minVal () {
    values.forEach(value => {
      if (value < min) {
        min = value;
      }
    })
  }

  function maxVal () {
    values.forEach(value => {
      if (value > max) {
        max = value;
      }
    })
  }
  //function calls
  sumOf();
  minVal();
  maxVal();

  return (
    <div
      id="ex5-main-container">
        <h1>[3, 11, 7, 2, 9, 10]</h1>
        <h2>Sum: {sum} </h2>
        <h2>Minimum: {min}</h2>
        <h2>Maximum: {max}</h2>
      </div>
  )
}
export default EX5;