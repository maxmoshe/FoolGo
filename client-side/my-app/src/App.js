import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      page: 'MainPage'
    }
    this.HandleClick = this.HandleClick.bind(this)
  }

  HandleClick(){
    this.setState(prevState => {
      return({
      page: 'no'
    })
  })
  }

  render(){
    return(
      <div className="App" >
        <header className="App-header">
        </header>
      </div>
    )
  }
}

export default App;
