import logo from '../spinner.svg'; //'./logo.svg';
import pompeii from '../Pompeii.mp3';
import React from 'react';

function MainPage(){
    return(
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <audio controls autoPlay style={{display:"none"}}>
        <source src={pompeii} type="audio/mpeg"/>
      </audio>
      <img src={logo} className="App-logo" alt="logo" />
      <a href="google.com" className="Complaint" style={{fontSize: 35, color: 'white'}}>Submit a legal complaint.</a>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        submit a legla complaint submit a legal comopakint
      </a>
    </div>
    )
}

export default MainPage;