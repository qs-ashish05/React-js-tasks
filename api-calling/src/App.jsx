import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // if we know that the values are like ararys then use array as initial values 
  // because looping, filter , map methods are easily applied on the array
  const [todos, setTodos] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div>
      <h2>Available todos</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {todos.map(task => (
          <li key={task.id}>{task.title}</li>
          // also check the webpage console without using key 
        ))}
      </ul>
    </div>
  )
}

export default App
