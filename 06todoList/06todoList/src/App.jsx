import { useState } from 'react'
import './App.css'
import Home from './assets/Home'

function App() {
  const[addTask, useAddTask] = useState([])
  const[removeTask, useRemoveTask] = useState([])

  return (
    <Home/>
  )
}

export default App
