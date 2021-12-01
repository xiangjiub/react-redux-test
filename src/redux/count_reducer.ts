// reducer本质就是一个函数

// 之前的状态preState，动作对象action
const initState = 0
export default function countReducer(preState=initState,action:any){
    console.log(preState,action)
    const {type,data} = action
    switch(type){
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        case 'incrementIfOdd':
            return preState + data
        case 'incrementAsync':
            return preState + data
        default:
            return preState
    }
}