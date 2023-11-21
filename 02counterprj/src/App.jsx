import './App.css'
import { useState } from 'react'     // responsible for hooks

function App() {
  // useState()  - hook demans initial parameter/ variable or function
  let [Count, setCount] = useState(0)    // responsible to propogate change in dom 
  // initial value of variable is 15 

  //let count = 5

  function increasevalue(){
    // console.log("Increased presed: ")
    //console.log("Increased presed: ",Math.random())  // this is better way to hide from the loops
    
    // setCount(Count + 1)  
    // OR
    Count = Count + 1   // useState will not update the values like this
    setCount(Count)
    
    //console.log("Increased presed: ",Count)  
  }

  const decreaseVale = () => {
    if(Count == 0){
        Count = 0
        setCount(Count)
    }
    else{
        Count = Count - 1
        setCount(Count)
    }
  }

  function increasevalue2(){
    // interview questions
    setCount(Count + 1)
    setCount(Count + 1)
    setCount(Count + 1)
    setCount(Count + 1)

    // above code will not run 4 times it will only execute 1 time since all the updates are same 
    // but if somehow our requirements are like we have to do these updates 4 times then do it as follows 
    // first we need to takes its lastly updates vakue then change it
    // the method which will do this is 

    setCount((prevcount) => prevcount + 1)  // prevcount is just a variable name here we can use anything 
    setCount((prevcount) => prevcount + 1)
    setCount((prevcount) => prevcount + 1)
    setCount((prevcount) => prevcount + 1)

    // now after click once a bnt it will add 4 values 
    
  }


  return (
  <>
  <div>
    <h2>count value {Count}</h2>
    <button onClick={increasevalue}>Increase</button>
    <br/>
    <button onClick={decreaseVale}>Decrease</button>
    <br/>
    <p> this is for test purpose {Count}</p>
  </div>
  </>
  )
}

export default App
