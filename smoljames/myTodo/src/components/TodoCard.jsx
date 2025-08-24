import React from 'react'

export default function TodoCard(props) {
  const {task, deleteTask, index} = props
    return (
    <div className='Todocard'>
  
        <p>{task}</p>
        <button>Edit</button>
        <button onClick={()=>{
          deleteTask(index)
        }}>Remove</button>
     
    </div>
  )
}
