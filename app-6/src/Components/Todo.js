import React, { Component } from 'react'

export default class Todo extends Component{

render(){
    return(
        <div>
            <input value={this.props.input} placeholder='Enter new task' onChange={ev=> this.props.updateInput(ev.target.value)}/>
            <button onClick={() => this.props.updateList(this.props.input)}>Add</button>    
        </div>
    )
}
}