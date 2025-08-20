import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Addone = () =>{
    setCount(prev => prev+1)  
    // we dont need to return anything as setCount will automatically set the variable values
  }

  return (
    <div>
      <h2>Counter app</h2>
      <p>Current count value - {count}</p>
      <button onClick={() => setCount(prev => prev+1)}>Increase</button>
      {/* this is betetr  */}
      <button onClick={Addone}>Increase 2</button>  
    </div>
  )
}

export default App
