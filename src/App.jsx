import { useState } from 'react'
import './App.css'
import MainRutes from './ViewModels/MainRutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <MainRutes/>
      </BrowserRouter>
    </>
  )
}

export default App
