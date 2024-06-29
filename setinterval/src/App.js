import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timer,setTimer] = useState(0);
  useEffect(()=>{
const intervalId = setInterval(()=>{
  setTimer(p=>p+1)
},1000)

if(timer>20){
 setTimer(0);
}

return ()=>clearInterval(intervalId)
  },[timer])

  return (
    <div className="App">
    <h1>{timer}</h1>
    </div>
  );
}

export default App;
