import { useState } from 'react'
// 容器组件
import CountContainer from '/@/containers/Count';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      App..
      {/* 给容器组件传递store */}
      <CountContainer />
    </div>
  )
}

export default App
