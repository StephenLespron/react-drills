import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor() {
  super()
  this.state = {
  userInput: ``  
  }  
}
    updateInput (val) {
      this.setState({
    userInput: val
    })
    }

  render() {
    return (
    <div className="App">
      <input onChange={ev => this.updateInput(ev.target.value)} />
      <p>{this.state.userInput}</p>
    </div>
  );
 }
}

export default App;
