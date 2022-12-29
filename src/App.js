import './App.css';
import axios from 'axios';
import { Component } from 'react';

//Declaring a new class to make a call out to a Random Number Restful API using Axios.
class App extends Component{
  //Helper function that actually performs the get request
  getNumber = () => {
    axios.get('http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=1&max=100&count=1')
    //When retrieved...
    .then(res => {
      alert(res.data);
    }).catch(err => {
      console.log(err);
    })
  }
  //Simple rendering. We're not going for a tear-jerkingly beautiful UI, only for a demonstration on how Axios works.
  render(){
  return (
    <div className="App">
      <h1>Random Axios Number Generator</h1>
      <button onClick={this.getNumber.bind(this)}>Get Number</button>
    </div>
  );
  }
}

export default App;
