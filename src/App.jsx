import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nest from './nest'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nest />
    </>
  )
}

export default App
