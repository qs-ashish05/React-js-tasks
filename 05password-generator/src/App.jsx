import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [passwordlenght, setpasswordlenght] = useState(8)
  const [numbersAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed) {
      //let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
      str = str + "1234567890"
    }
    if (characterAllowed) {
      //let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
      str = str + "!@#$%^&*"
    }
    /*
    if (numbersAllowed && characterAllowed){
      str = str + "1234567890" + "!@#$%^&*"
    }
    */

    // use loop and extract some random characters from the string 
    // number of times will depends on passwordLength

    for (let i = 0; i <= passwordlenght; i++) {
      const randomindex = Math.floor(Math.random() * str.length + 1)
      const char = str.charAt(randomindex)
      pass = pass + char
    }

    setpassword(pass)


  }, [passwordlenght, numbersAllowed, characterAllowed, setpassword])


  const copyPassword =  useCallback( ()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)

  }, [password])



  // passwordGenerator()  --> this is not allowed 
  useEffect( () => {passwordGenerator()}, [passwordlenght, numbersAllowed, characterAllowed, passwordGenerator])



  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center text-lg my-3'>Password generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-green-500 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={20}
              className='cursor-pointer'
              onChange={(e) => { setpasswordlenght(e.target.value) }} />

            <label >length: {passwordlenght}
            </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numbersAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setcharacterAllowed((prev) => !prev);
              }} />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
