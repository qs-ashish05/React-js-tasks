import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todoList, setTodoList] = useState(
    ["Do lunch", "Water the plants", "do homework"]
  )

  function addNewTask(newTask){
    const newList = [...todoList, newTask]
    setTodoList(newList)
  }

  function deleteTask(deleteIndex){
    const newList = todoList.filter((value, index)=>{
      return deleteIndex !== index
    })
    setTodoList(newList)

  }


  return (
    <>
     <TodoInput newTodo = {newTodo} setNewTodo={setNewTodo} addNewTask={addNewTask}/>
     <TodoList todoList={todoList} deleteTask={deleteTask}/>
    </>
  )


}

export default App
