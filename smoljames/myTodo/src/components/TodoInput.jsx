import React from 'react'

export default function TodoInput(props) {
    const {newTodo, setNewTodo, addNewTask} = props
  return (
    <div>
        <input type="text" value={newTodo} placeholder='Enter Your Task' onChange={(e)=>{
            setNewTodo(e.target.value)
        }}/>
        <button onClick={()=>{
            if(newTodo != "") addNewTask(newTodo);
            
        }}>Submit</button>
    </div>
  )
}
