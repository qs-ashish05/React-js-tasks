import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
 

  return (
    <>
      <h1>Ashish Website using tailwind</h1>
      <h1 className='bg-red-400 p-4 text-black rounded-xl'>Ashish Website using tailwind</h1>
      
      <Card name = "Ashishjha" btnText = "click me "/>
      <Card name = "qsashish" />

      {/* <Card name = "Ashu" myarray = [10,20,40,50]/>         this is not allowed*/}
      


      
    </>
  )
}

export default App
