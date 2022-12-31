import './App.css';
import axios from 'axios';
import React, {} from 'react';

//Declaring a new class to make a call out to a Random Number Restful API using Axios.
const baseRequest = 'http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=1&max=100&count=1';
function App(){
  //Helper function that actually performs the get request
    const [number, setNumber] = React.useState(null);
    React.useEffect(() => {
        axios.get(baseRequest)
      //When retrieved...
      .then(res => {
        setNumber(res.data);
        console.log(res);
      });
    }, []);
  //Simple rendering. We're not going for a tear-jerkingly beautiful UI, only for a demonstration on how Axios works.
  return (
    <div className="App">
      <h1>Random Axios Number Generator</h1>
      <h2>{number}</h2>
    </div>
  );
}

export default App;
