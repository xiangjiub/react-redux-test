import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Count from './components/Count/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    App..
      <Count />
    </div>
  )
}

export default App
