// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [state,setstate] = useState(0)
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://json-api-xcvj.onrender.com/shoes")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(()=>{
    fetchUserData()
  },[])
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>setstate(state+1)}>add</button>
<div className='grid'>
      {users.map((items)=>{
        return <div key={items.id}>

   <img src={items.image}/>
   <p>{items.title}</p>
          </div>
      })}
    </div>
    </div>
  );
}

export default App;
