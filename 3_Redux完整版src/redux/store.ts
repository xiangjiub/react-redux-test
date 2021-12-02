// 创建redux最核心的store
import {createStore} from 'redux'
// 引入为count组件服务的reducer
import countReducer from './count_reducer'
export default createStore(countReducer)

