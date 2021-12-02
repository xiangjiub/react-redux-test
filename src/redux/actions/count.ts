import {INCREMENT,DECREMENT} from '../constant'

// 该文件专门为Count组件生成action对象

// 同步action，就是一般对象
export const Increment = (data:any) =>({type:INCREMENT,data})
export const decrement = (data:any) =>({type:DECREMENT,data})
//所谓异步action的值就是函数
export const decrementAsync = (data:any,time:number) =>{
    return (dispatch:any)=>{
        setTimeout(() => {
            dispatch(Increment(data))
        },time)
    }
}