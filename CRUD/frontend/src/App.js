import React from 'react';
import './App.css';
import { Task } from './components/task';

function App() {
  const handleMouseDown = (event) => {
    const element = event.target.parentElement;
    const initialWidth = element.offsetWidth;
    const initialHeight = element.offsetHeight;
    const startX = event.clientX;
    const startY = event.clientY;

    const handleMouseMove = (event) => {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      element.style.width = initialWidth + deltaX + 'px';
      element.style.height = initialHeight + deltaY + 'px';
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="App">
      <div className='first_div'>
        <div className="resize" onMouseDown={handleMouseDown}>
          <Task/>
        </div>

        <div className="resize" onMouseDown={handleMouseDown}>
        <Task/>
        </div>

      </div>
      <div className='bottomdiv resize' onMouseDown={handleMouseDown}>
      <Task/>
      </div>
    </div>
  );
}

export default App;