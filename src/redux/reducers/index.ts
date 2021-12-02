// 引入为count组件服务的reducer
import count from './count'
import persons from './person'

//用于合并Reducers
import {combineReducers} from 'redux'

export default combineReducers({
    count,
    persons
})