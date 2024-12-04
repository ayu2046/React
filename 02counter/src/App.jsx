import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  
  let[counter, setCounter] = useState(5)

  

  const addValue = () => {
    console.log("clicked ", counter);
    counter++
    setCounter(counter)
  }
  const removeValue = () => {
    counter--;
    setCounter(counter)
  }
  
  return (
    <>
      <h1> React </h1>
      <h2> Counter Value : {counter} </h2>

      <button 
      onClick={addValue}
      > Add value </button>
      <br />
      <br />
      <button
      onClick={removeValue}
      > Remove value </button>
    </>
  )
}

export default App
