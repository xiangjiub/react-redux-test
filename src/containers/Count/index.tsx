import {INCREMENT} from '/@/redux/constant';
import {Increment,decrement,decrementAsync} from '../../redux/actions/count';

//引入store
import store from '/@/redux/store';

// 链接ui与store
import {connect} from 'react-redux';


import React, { Component } from 'react'

class Count extends Component {
    state = {count:0}
    selectNumber:any

    // 加
    increment = ()=>{
        const {value} = this.selectNumber
        this.props.Increment(Number(value))
    }

    // 减
    decrement = ()=>{
        const {value} = this.selectNumber
        this.props.decrement(Number(value))
    }

    // 奇数加
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        if(this.props?.count % 2 !== 0){
            this.props.Increment(Number(value))
        }
    }

    // 异步加
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        this.props.decrementAsync(Number(value),500)
        
    }
    
    render() {
        console.log(this.props,'props的值')
        return (
            <div>
                <h1>当期求和：{this.props?.count}</h1>
                <p>下方总人数：{this.props.personsCount}</p>
                <select ref={c=>this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
                <hr />
            </div>
        )
    }
}


const mapStateToProps = (state:any) =>({count:state.count,personsCount:state.persons.length})

const CountContainer:any = connect(
    mapStateToProps,
    {
        Increment,
        decrement,
        decrementAsync
    }
    )(Count)

export default CountContainer