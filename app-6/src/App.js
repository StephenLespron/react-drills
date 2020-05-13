import React, { Component } from 'react';
import Todo from './Components/Todo'

class App extends Component {
constructor(){
  super()
  this.state = {
    input: ``,
    list: []
  }

  this.updateList = this.updateList.bind(this)
  this.updateInput = this.updateInput.bind(this)
}

updateList(val){
  this.setState({
    list: [...this.state.list, val],
    input:``
  })
}
  updateInput(val){
    this.setState({
      input: val
  })
}


  render(){
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>My to-do list:</h1>
      <Todo updateList={this.updateList} updateInput={this.updateInput} input={this.state.input}/>
      {this.state.list.map(item => 
        <span> {item} </span>)}
    </div>
  );
 }
}

export default App;
