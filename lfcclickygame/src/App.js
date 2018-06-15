import React, { Component } from 'react';
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import players from "./players.json";



class App extends Component {

  // set initial state
  state = {
    players: players,
    score: 0,
    clickedPlayers: [],
    message: "Don't click on the same player more than once."
  };
  
  
  
  //  click player function - resets state based on players picked
   clickPlayer = id => {
     if (this.state.clickedPlayers.includes(id)) {
       this.setState({score:0, clickedPlayers:[]})
       this.setState({message: "You lose. Start again."})
     } else {
       players.sort(function(a, b){return 0.5 - Math.random()});
       this.setState ({clickedPlayers: [...this.state.clickedPlayers, id]})
       this.setState ({score: this.state.score + 1})
       this.setState ({message: "Well played..."})
       this.setState(players)

       
     }
   }
    
   

  render() {
    return (
      <div>
      
      <Header />
      
      
      <Scoreboard score={this.state.score} message={this.state.message}/>
      <Wrapper>
        {this.state.players.map(player => (
        <PlayerCard 
          clickPlayer={this.clickPlayer}
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
