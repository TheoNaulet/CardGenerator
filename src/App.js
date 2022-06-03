import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData ] = useState('')
  const url = `https://api.namefake.com/french-france`; 
  const getName = () => {
    axios.get(url, {
      headers:{"Access-Control-Allow-Origin": "*"}
    }).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    .catch(error => console.log(error));
  };

  useEffect(() => {
    getName()
  }, []);

  return (

    <div id='App'>
      <div className='button'>
        <button>Generate card</button>
      </div>
      <div id='card'>
        <h2 id='bank'>Bank</h2>
        <div id='bottomcard'>
          <div id='left'>
            <h1 id='number'>{Math.floor(Math.random()*(999-100)+100)} {Math.floor(Math.random()*(999-100)+100)} {Math.floor(Math.random()*(999-100)+100)} {Math.floor(Math.random()*(999-100)+100)}</h1>
            <h2 id='name'>Your Name</h2>
          </div>
          <div id='right'>
            <img src='../Visa.svg.png' width={100}></img>
          </div>
      </div>
    </div>
    <div id='ball1' className='ball'></div>
      <div id='ball2' className='ball'></div>
  </div> 
  );
}

export default App;
