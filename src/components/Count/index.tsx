import React, { Component } from 'react'
import store from '/@/redux/store'
// 创建action对象
import {createIncrementAct,createIncrementAsyncAct,createDecrementAct} from '/@/redux/count_action';

export default class Count extends Component {
    state = {count:0}
    selectNumber:any

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }

    // 加
    increment = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAct(Number(value)))
    }

    // 减
    decrement = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createDecrementAct(Number(value)))
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        const count = store.getState()
        if(count % 2 !== 0){
            store.dispatch(createIncrementAct(Number(value)))
        }
    }

    // 异步加
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAsyncAct(Number(value),500))
    }
    
    render() {
        return (
            <div>
                <h1>当期求和：{store.getState()}</h1>
                <select ref={c=>this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
