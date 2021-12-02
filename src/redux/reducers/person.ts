import {ADD_PERSON} from '../constant'

// 初始化人的列表
const initState = [{id:'001',name:'王',age:21}]

export default function personReducer(preState = initState,action:any){
    const {type,data} = action
    switch(type){
        case ADD_PERSON:
            return [...preState,data]
        default:
            return preState
    }
}