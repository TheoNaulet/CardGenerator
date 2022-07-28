import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData ] = useState('');
  const [nom, setNom] = useState('');
  const url = `https://cors-anywhere.herokuapp.com/https://api.namefake.com/french-france`; 
  const getName = () => {
    axios.get(url, {
      headers:{
        'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',}
    }).then((response) => {
      setData(response.data)
      // setNom = response.data.name;
      // console.log(nom);
    })
    .catch(error => console.log(error));
  }; 

  useEffect(() => {
    getName()
  }, []);

  function refreshPage(){
    window.location.reload();
  }

  return (

    <div id='App'>
      <div className='button'>
        <button onClick={refreshPage}>Generate card</button>
      </div>
      <div id='card'>
        <h2 id='bank'>Bank</h2>
        <div id='bottomcard'>
          <div id='left'>
            <h1 id='number'>{Math.floor(Math.random()*(999-100)+100)} {Math.floor(Math.random()*(999-100)+100)} {Math.floor(Math.random()*(999-100)+100)} {Math.floor(Math.random()*(999-100)+100)}</h1>
            <h2 id='name'>{data.name}</h2>
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
