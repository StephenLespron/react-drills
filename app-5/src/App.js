import React, { Component } from 'react';
import Image from './Components/Image'

class App extends Component{
constructor(){
  super()
  this.state = {
    source: `https://i.redd.it/b2pa93h5vqg21.png`
  }
}
  render(){
  return (
    <div>
        <Image source={this.state.source}/>
    </div>
  );
 } 
}

export default App;
