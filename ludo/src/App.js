import { useState } from 'react';
import './App.css';

const snakesAndLadders = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78
};

const board = Array(100).fill(null).map((_, index) => index + 1);

function App() {
  const [playerPosition, setPlayerPosition] = useState(1);
  const [message, setMessage] = useState('');

  const rollDice = () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    const newPosition = playerPosition + diceNumber;

    if (snakesAndLadders[newPosition]) {
      const updatedPosition = snakesAndLadders[newPosition];
      setPlayerPosition(updatedPosition);
      setMessage(`You got a ${diceNumber}! Moved to ${updatedPosition} via a ${updatedPosition > newPosition ? 'snake' : 'ladder'}.`);
    } else if (newPosition <= 100) {
      setPlayerPosition(newPosition);
      setMessage(`You got a ${diceNumber}! Moved to ${newPosition}.`);
    } else {
      setMessage('You need a perfect roll to reach 100.');
    }
  };

  return (
    <div className="App">
      <h1>Snake and Ladder Game</h1>
      <div className="board">
        {board.map(square => (
          <div key={square} className={`square ${playerPosition === square ? 'player' : ''}`}>
            {square}
            {snakesAndLadders[square] && (
              <div className="snake-ladder">
                {snakesAndLadders[square] > square ? (
                  <div className="ladder"></div>
                ) : (
                  <div className="snake"></div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
