import React, { Component } from 'react'
import {nanoid} from 'nanoid';

export default class Person extends Component {
    nameNode:any
    ageNode:any

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObject = {id:nanoid(),name,age}
        console.log(personObject)
    }

    render() {
        return (
            <div>
                <h2>Person组件</h2>
                <input type="text" ref={c => this.nameNode = c} placeholder="输入名字"/>
                <input type="text" ref={c => this.ageNode = c} placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加人员信息</button>
            </div>
        )
    }
}
