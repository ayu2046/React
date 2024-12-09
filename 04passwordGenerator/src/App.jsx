import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[length, setLength] = useState(0)
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState();
  const[copied, setCopied] = useState("Copy");

  const passref = useRef(null)


  const passwordGenerator = useCallback( () =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="~!@#$%^&*"

    for (let i = 0; i <length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

      setPassword(pass)
    }
  } ,[length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopied("Copied...")
    setTimeout(()=>{
      setCopied("Copy")
    },2000)
  },[password])

  

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    
      <div className=' bg-gray-600 max-w-md w-full   shadow-purple-500 rounded-lg shadow-lg px-3 py-3 mx-auto text-black'>
        <h1 className=' text-white text-xl font-bold p-3 my-2' >PASSWORD GENERATOR</h1>
        <div className='flex shadow rounded-md overflow-hidden mb-3 bg-white' >
          <input type='text'
          value={password}
          className=' outline-none w-full p-2'
          placeholder='Password'
          ref={passref}
          readOnly
          />
          <button 
          onClick={copyPassword}
          className='bg-blue-500 p-2 mx-2 my-3 text-black font-bold rounded-md hover:bg-blue-300 '>{copied}</button>
        </div>
        <div className='flex flex-wrap gap-3 '>
          <div className='flex gap-2 font-semibold'>
            <input type='range'
            min = {1}
            max = {100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
            />
            <label>Length({length})</label>
          </div>
          <div className='flex gap-2 font-semibold'>
            <input type='checkbox'
            defaultChecked={numberAllowed }
            id = "numberInput"
            onChange={(e) => {
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex gap-2 font-semibold'>
          <input type='checkbox'
            defaultChecked={numberAllowed }
            id = "characterInput"
            onChange={(e) => {
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label>Characters</label>

          </div>
        </div>
      </div>
  )
}

export default App
