import '../css/EX4.css';

function EX4 () {
  const dog = {
    name: "Tsuki",
    species: "Shiba Inu",
    size: "small",
    
    bark () {
      return "WOOOOOOOOOOOF";
    }
  };
  console.log(`${dog.name} is a ${dog.species} measuring ${dog.size}.`);
  console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

  return (
    <div
      id="ex4-main-container"
      >
        <h2>{dog.name} is a {dog.species} measuring {dog.size}.</h2>
        <h1>Look, a cat! {dog.name} barks: {dog.bark()}</h1>
        <h2>Check console for additional output.</h2>
      </div>
  )
}

export default EX4;