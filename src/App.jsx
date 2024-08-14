import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './ViewModels/Mainrutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
