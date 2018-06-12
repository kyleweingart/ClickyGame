import React, { Component } from 'react';
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import players from "./players.json";



class App extends Component {

  state = {
    players: players,
    score: 0
  };

  removePlayer = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.filter(player => player.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };



  render() {
    return (
      <div>
      
      <Header />
      
      
      <Scoreboard/>
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
      
      </div>
    
    )
  }
  
}

export default App;
