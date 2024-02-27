import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount]=useState(0);

  const increment = () =>{
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }

  const makeZero = () =>{
    setCount(0);
  }

  return(
    <div className="App">
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={makeZero}>Set to Zero</button>
      {count}
    </div>
  );
}

export default App;