import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainrutes from './ViewModels/Mainrutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainrutes/>
    </>
  )
}

export default App
