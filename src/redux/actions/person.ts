import {ADD_PERSON} from '../constant'

//action动作
export const person = (personObj:any) => ({type:ADD_PERSON,data:personObj})