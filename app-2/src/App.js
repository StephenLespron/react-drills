import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state = {
    array: [`There's no cryin' in baseball!`, `Juuuust a bit outside.`, `If you build it, he will come.`, `God, I love baseball.`, `Don't think; it can only hurt the ball club.`,`I pay you to get on first, not get thrown out at second.`]
  }
}

  render(){
    return (
      <div className="App">
        <ul>
          <h2>"{this.state.array[0]}"</h2>
          <h2>"{this.state.array[1]}"</h2>
          <h2>"{this.state.array[2]}"</h2>
          <h2>"{this.state.array[3]}"</h2>
          <h2>"{this.state.array[4]}"</h2>
          <h2>"{this.state.array[5]}"</h2>
        </ul>
    </div>
  );
 }
}

export default App;
