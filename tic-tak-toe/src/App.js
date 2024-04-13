import React, { useState } from 'react';
import "./App.css"
function App() {
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState('');

  const show = (number) => {
    const div = document.getElementById(`boxes-${number}`);
    if (div.innerText === "") {
      div.innerText = count === 0 ? "X" : "O";
      div.style.color = count === 0 ? "black" : "white";
      setCount(1 - count);
      gameWon();
    } else {
      clear();
    }
  }

  const clear = () => {
    setWarning("⚠️ already-filled!");
    setTimeout(() => setWarning(''), 1800);
  }

  const reset = () => {
    window.location.reload();
  }

  const gameWon = () => {
    const lines = [
      ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
      ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], 
      ['1', '5', '9'], ['3', '5', '7']
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      const boxA = document.getElementById(`boxes-${a}`).innerText;
      const boxB = document.getElementById(`boxes-${b}`).innerText;
      const boxC = document.getElementById(`boxes-${c}`).innerText;

      if (boxA && boxA === boxB && boxB === boxC) {
        setWarning(`🏆 '${boxA}' won the game`);
        return;
      }
    }

    const isTie = Array.from({ length: 9 }, (_, i) => {
      return document.getElementById(`boxes-${i + 1}`).innerText;
    }).every((text) => text !== "");

    if (isTie) {
      setWarning("⚠️ game got tied");
    }
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="box">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i + 1} id={`boxes-${i + 1}`} onClick={() => show(i + 1)}></div>
        ))}
      </div>
      <div className="reset-wrap">
        <button className="reset" onClick={reset}>RESET</button>
      </div>
      <div id="show-warning" style={{ fontSize: '38px', color: 'red' }}>{warning}</div>
    </div>
  );
}

export default App;
