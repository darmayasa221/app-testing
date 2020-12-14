// import logo from './logo.svg';
// import { Component } from 'react';

// import PersonList from './PersonList'
// class App extends Component {
//   state={ test : 'test'}
//   render(){
//     return (
//       <div className="App">
//         <PersonList test={this.state.test}/>
//       </div>
//     );
//   }
  
// }

// export default App;
// kurang dari 5 merah 6 - 9 kuning lebih dari 10 hijau 
import './App.css';
import React, { useState } from 'react'



export default function App (){

const [state, setState] = useState({
  user:'',
  password:''
})

  const onSubmit = (e) =>{
    if(state.user === ''){
    alert('username kosong')
    }else{
    alert(`username : ${state.user} Password : ${state.password}`)
    }
  }

  const handelOnChange = e =>{
   state[e.target.name] = e.target.value
   setState({...state})
  };

// console.log(state)

  return( 
    <div className="container" style={{textAlign:'center', border: '2px black solid' }}>
      <div className="header Form">
        <p className="login">Login</p>
      </div>
      <div className="Form" >
        <form>
          <li>
            <label className="form" >User Name</label>
            <input id="user"  type="text"  name="user" onChange={handelOnChange} ></input>
          </li>
          <li>
            <label>Password</label>
            <input id="pas" type="password" autoComplete="password"  name="password" onChange={handelOnChange}></input>
          </li>
          <li>
            <button type="submit" onClick={onSubmit}>Click me</button>
          </li>
        </form>
      </div>
    </div>
  )
}
