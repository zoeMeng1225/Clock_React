import React, {useState} from 'react';
import "./App.css";



const App = () => {
  let time = new Date().toLocaleTimeString();
  
  const [Ntime, setNtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleDateString();
    setNtime(time);
  }
 
  setInterval(updateTime, 1000);

  return(
    <div className = "container">
      <h1>{time}</h1>
    </div>
  )
}

export default App;