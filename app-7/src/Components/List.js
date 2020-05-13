import React, { Component } from 'react'
import Todo from './Todo'

export default class List extends Component{

render(){
    return(
        <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
            {this.props.list.map(
                item => <Todo item={item}/>
            )}
        </div>
    )
}
}