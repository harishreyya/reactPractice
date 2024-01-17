import { useState } from "react";


function App() {
const [count, setCount] = useState(0);

// const increment = () =>{
//   setCount(count + 1)
// }

  return (
    <div className="App">
      <h1>counter</h1>
      <p>count :{count}</p>
      <button onClick={()=>{setCount(count+1)}}>increment</button>
    </div>
  );
}

export default App;
