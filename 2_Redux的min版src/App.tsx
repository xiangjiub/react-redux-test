import { useState } from 'react'
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
