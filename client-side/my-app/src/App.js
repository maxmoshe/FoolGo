import React from 'react';
import MainPage from './Components/MainPage';
import ClanPage from './Components/ClanPage';
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
    let comp = this.state.page == 'MainPage' ? <MainPage props={{click_handle: this.HandleClick}}/> : <ClanPage/>
    return(
      <div className="App" >
        <header className="App-header">
        {comp}
        </header>
      </div>
    )
  }
}

export default App;
