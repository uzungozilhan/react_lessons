import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Counter from './Counter';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       show:true //false olduğunda counter ekrandan kayboluyor.
    }
  }
  hide=()=>{
    this.setState({show: !this.state.show})
  }
render(){
  return (
    <div className="App">
      <h2>My Counter</h2>
      <button onClick={()=>this.hide()}>hide/show</button>
      {this.state.show && 
      <Counter/>
      }
    </div>
  );
  }
}

export default App;
