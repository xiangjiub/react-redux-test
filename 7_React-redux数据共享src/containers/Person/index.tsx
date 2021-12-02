import React, { Component } from 'react'
import {nanoid} from 'nanoid';
import {connect} from 'react-redux'
import {addPersonAction} from '/@/redux/actions/person'
class Person extends Component {
    nameNode:any
    ageNode:any

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObject = {id:nanoid(),name,age}
        // console.log(personObject)
        this.props.jiayiren(personObject)
        this.ageNode.value = ''
        this.nameNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>Person组件</h2>
                <input type="text" ref={c => this.nameNode = c} placeholder="输入名字"/>
                <input type="text" ref={c => this.ageNode = c} placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加人员信息</button>
                <ul>
                    {
                        this.props.yiduiren.map((p:any) =>{
                            return <li key={p.id}>{p.name}--{p.age}</li>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}


export default connect(
    (state:any) => ({yiduiren:state.rens}),
    {jiayiren:addPersonAction}
)(Person)