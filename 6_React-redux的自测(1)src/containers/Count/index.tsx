import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createIncrementAct} from '/@/redux/count_action';
class Count extends Component {
    add = ()=>{
        this.props.jiafa(2)
    }

    render() {
        
        return (
            <div>
                <h1>当前值:{this.props?.he}</h1>
                <button onClick={this.add}>点我加</button>
            </div>
        )
    }
}

export default connect(
    state => ({he:state}),  //映射的状态
    {
        jiafa:createIncrementAct
    }  //映射操作状态的方法
)(Count)