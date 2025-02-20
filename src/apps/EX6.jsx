
import '../css/EX6.css';

function EX6 () {
  const object1 = {
    input: [4,8,12,5,20],
    firstElement: () => object1.input[0],
    lastElement: () => object1.input[object1.input.length - 1]
  }

  const object2 = {
    input: ["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}],
    firstElement: () => object2.input[0],
    lastElement: () => object2.input[object2.input.length - 1]
  }

  // console logs
  console.log('['+ object1.input.join(', ')+ ']');
  console.log("First Element:", object1.firstElement());
  console.log("Last Element:", object1.lastElement());

  console.log('['+ object2.input.join(', ')+ ']');
  console.log("First Element:", object2.firstElement());
  console.log("Last Element:", object2.lastElement());

  return (
    <div 
      id="ex6-main-container">
        <h2>[{object1.input.join(', ')}]</h2>
        <h3>First element: {object1.firstElement()}</h3>
        <h3>Last Element: {object1.lastElement()}</h3>
        <h2>[{object2.input.join(', ')}]</h2>
        <h3>First element: {object2.firstElement()}</h3>
        <h3>Last Element: {JSON.stringify(object2.lastElement())}</h3>
        <h2>Check console for additional output.</h2>
      </div>
  )
}

export default EX6;