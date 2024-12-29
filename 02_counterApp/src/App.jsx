import { useState } from 'react'

import './App.css'


function App() {
  let [counter, setCounter] = useState(0);

  const Increment = () => {
    counter += 1;
    setCounter(counter);
  }

  const Decrement = () => {
    if (counter <= 0 )
      return;
    
    counter -= 1;
    setCounter(counter);
  }

  
  return (
    <>
      <h1>This is my counter APP</h1>
      <h2>Counter: {counter}</h2>
      <button id='increment' onClick={Increment}>Increment</button>
      <button id='decrement' onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
