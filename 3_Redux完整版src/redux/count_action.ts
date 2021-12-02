import {INCREMENT,DECREMENT} from './constant'

// 该文件专门为Count组件生成action对象
export const createIncrementAct = (data:any) =>({type:INCREMENT,data})
export const createDecrementAct = (data:any) =>({type:DECREMENT,data})
