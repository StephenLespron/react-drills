import React, { Component } from 'react'

export default class Todo extends Component{
render(){
    return(
        <p style={{fontSize: '22px', fontWeight: 'bold', margin: '5px'}}> {this.props.item} </p>
    )
}
}