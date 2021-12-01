import React, { Component } from 'react'
import store from '../../redux/store'
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
        // const {count} = this.state
        // this.setState({count:Number(count)+Number(value)})
        store.dispatch({type:"increment",data:Number(value)})
    }
    // 减
    decrement = ()=>{
        const {value} = this.selectNumber
        
        store.dispatch({type:"decrement",data:Number(value)})
        // this.setState({count:Number(count)-Number(value)})
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        const count = store.getState()
        if(count % 2 !== 0){
            store.dispatch({type:"incrementIfOdd",data:Number(value)})
        }
    }

    // 异步加
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch({type:"incrementAsync",data:Number(value)})
        }, 500);
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
