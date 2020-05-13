import React, { Component } from 'react'

export default class Image extends Component{

render(){
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img alt='' src={this.props.source}/>  
        </div>
    )
}

}