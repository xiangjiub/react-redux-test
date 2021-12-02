// 创建redux最核心的store
import {createStore,applyMiddleware} from 'redux'

// 引入redux-thunk  用于支持异步action
import thunk from 'redux-thunk'
//浏览器工具 redux-devtools
import {composeWithDevTools} from 'redux-devtools-extension'

//汇总后的reducer
import reducer from './reducers/index'

//暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

