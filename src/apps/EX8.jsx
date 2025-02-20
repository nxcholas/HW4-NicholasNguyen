import { useState } from 'react';
import '../css/EX8.css';

function EX8 () {
  const [vowels, setVowels] = useState([]);
  let vowelArray = [];
  const [palin, setPalin] = useState('');
  let reverse = [];
  let reversedWord;

  const handleChange = (event) => {
    // vowels section
    let vowels = Array.from(event.target.value);
    if (event.target.value === '') {
      setVowels([])
      setPalin('')
    }
    vowels.forEach(letter => {
      if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
        vowelArray.push(letter);
        setVowels(vowelArray);
      }
    })
    // palin section
    for (let i = event.target.value.length -1; i >= 0; i--){
      reverse.push(event.target.value[i]);
    }
    reversedWord = reverse.join('')
    if (event.target.value.toLowerCase() === reversedWord.toLowerCase()) {
      console.log("Palindrome: True");
      setPalin('true');
    } else {
      setPalin('false');
      console.log("Palindrome: False");
    }
  }

  return (
    <div
      id='ex8-main-container'>
        <h2>Enter a word:</h2>
        <input
          type='text'
          id='ex8-input'
          onChange={handleChange}></input>
        <h1>Vowels: ({vowels.length})</h1>
        <h2 id='vowels'>{vowels.join(', ')}</h2>
        <h1>Is palindome?</h1>
        <h2 id='palin'>{palin}</h2>
      </div>
  )
}

export default EX8;