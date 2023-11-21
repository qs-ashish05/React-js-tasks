import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200 first-letter'
    style={{background: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center first-letter gap-3 shadow-lg bg-white px-3 py-2 rounded-full '>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "red"}} onClick={ () => setcolor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "green"}} onClick={ () => setcolor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "orange"}} onClick={ () => setcolor ("orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "olive"}} onClick={ () => setcolor ("olive")}>Olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "black"}} onClick={ () => setcolor("black") }>Black</button>
          <button className='outline px-4 py-1 rounded-full outline-lime-400' style={{backgroundColor: "white"}} onClick={ () => setcolor("white")}>white</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "blue"}} onClick={() => setcolor("blue")}>Blue</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App


// onclick always demands a function and not work with function return values 
// it demands entire functtion

