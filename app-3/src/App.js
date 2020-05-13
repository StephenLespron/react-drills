import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state = {
    filteredArray: [`There's no cryin' in baseball!`, 
    `Juuuust a bit outside.`, 
    `If you build it, he will come.`, 
    `God, I love baseball.`, 
    `Don't think; it can only hurt the ball club.`,
    `I pay you to get on first, not get thrown out at second.`],
    array: [  `There's no cryin' in baseball!`, 
              `Juuuust a bit outside.`, 
              `If you build it, he will come.`, 
              `God, I love baseball.`, 
              `Don't think; it can only hurt the ball club.`,
              `I pay you to get on first, not get thrown out at second.`]
  }
  
}
filterList(val){
  this.setState({
    filteredArray: this.state.array.filter(el => el.toLowerCase().indexOf(val.toLowerCase()) !== -1)
  })
}

listItems(){

}

  render() {
  return (
    <div className="App">
      <input onChange={ev => this.filterList(ev.target.value)}/>
      {this.state.filteredArray.map(item => 
        <h2> {item} </h2>
      )}
    </div>
  );
  }
 }

export default App;
