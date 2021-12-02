import {ADD_PERSON} from '../constant'

//action动作
export const addPerson = (personObj:any) => ({type:ADD_PERSON,data:personObj})