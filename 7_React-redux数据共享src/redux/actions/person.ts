import {ADD_PERSON} from '../constant'

//action动作
export const addPersonAction = (personObj:any) => ({type:ADD_PERSON,data:personObj})