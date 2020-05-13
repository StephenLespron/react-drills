import React, { Component } from 'react'

export default class Login extends Component{
constructor(){
    super()
    this.state = {

    }
}

render(){
    return(
        <div>
         <input onChange={ev=> this.props.updateName(ev.target.value)}/>
         <input onChange={ev=> this.props.updatePass(ev.target.value)}/>
         <button onClick={() => this.props.loginAlert()}>Login</button>
        </div>
 )
}

}