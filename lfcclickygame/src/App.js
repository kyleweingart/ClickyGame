import React, { Component } from 'react';
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import players from "./players.json";
import logo from './liverbird.png';
import './App.css';


class App extends Component {

  state = {
    players
  };

  removePlayer = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };



  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Liverpool F.C. Clicky Game</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started click an image below. 
      //   </p>
      // </div>

      <Wrapper>
        {this.state.players.map(player => (
        <PlayerCard 
          removePlayer={this.removePlayer}
          id={player.id}
          key={player.id}
          name={player.name}
          image={player.image}
          />

      ))}
      </Wrapper>
    
    )
  }
  
}

export default App;
