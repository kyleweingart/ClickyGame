import React, { Component } from 'react';
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import players from "./players.json";



class App extends Component {

  state = {
    players: players,
    score: 0,
    clickedPlayers: []
  };
  

  shufflePlayers = (players) => {
    console.log("working");
  }
  // clickPlayer = id => {
  //   // Filter this.state.players for players with an id not equal to the id being removed
  //   const players = this.state.players.filter(player => player.id !== id);

  //   // Set this.state.friends equal to the new friends array
  //   this.setState ({  
  //     players:players, 
  //     score: this.state.score + 1
  //    });
   clickPlayer = id => {
     if (this.state.clickedPlayers.includes(id)) {
       this.setState({score:0, clickedPlayers:[]})
     } else {
       this.setState ({clickedPlayers: [...this.state.clickedPlayers, id]})
       this.setState ({score: this.state.score + 1})
       
     }
   }
    //   // Filter this.state.players for players with an id not equal to the id being removed
    //   const players = this.state.players.filter(player => player.id !== id);
   
  



  render() {
    return (
      <div>
      
      <Header />
      
      
      <Scoreboard score={this.state.score}/>
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
