// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import PersonList from './PersonList'
class App extends Component {
  state={ test : 'test'}
  render(){
    return (
      <div className="App">
        <PersonList test={this.state.test}/>
      </div>
    );
  }
  
}

export default App;
