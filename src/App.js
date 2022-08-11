import './App.css';
import axios from 'axios';
import React,{ useEffect, useState } from 'react';


function App() {
  const [data, setData ] = useState('');
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

  function randomNumber(){
    return Math.floor(Math.random()*(999-100)+100)
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
            <h1 id='number'>{randomNumber()} {randomNumber()} {randomNumber()} {randomNumber()}</h1>
            <h2 id='name'>{data?.name}</h2>
          </div>
          <div id='right'>
            <img src='../Visa.svg.png' width={100}></img>
          </div>
      </div>
    </div>
    <div id='ball1' className='ball' />
    <div id='ball2' className='ball' />

  </div> 
  );
}

export default App;
