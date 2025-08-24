import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todoList} = props
  return (
    
    <ul>
        {todoList.map((value, index)=>{
            return <li key={index}><TodoCard {...props} index = {index} task={value}/></li>
        })}
    </ul>
  )
}
