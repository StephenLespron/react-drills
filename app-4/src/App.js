import React, { Component } from 'react';
import Login from './Component/Login'
import './App.css';

class App extends Component{
constructor(){
  super()
  this.state = {
    username: ``,
    password: ``
  }
  this.updateName = this.updateName.bind(this)
  this.updatePass = this.updatePass.bind(this)
  this.loginAlert = this.loginAlert.bind(this)
}
loginAlert(){
  alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}

updateName(val){
  this.setState({
    username: val
  })}
updatePass(val){
  this.setState({
    password: val
  })}

  render(){
  return (
    <div className="App">
      <Login  loginAlert={this.loginAlert}
              updateName={this.updateName}
              updatePass={this.updatePass}/>
    </div>
  );
 }
}

export default App;
