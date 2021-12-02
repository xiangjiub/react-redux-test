import { useState } from 'react'
// 容器组件
import CountContainer from '/@/containers/Count';
import store from '/@/redux/store';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      App..
      {/* 给容器组件传递store */}
      <CountContainer store={store}/>
    </div>
  )
}

export default App
