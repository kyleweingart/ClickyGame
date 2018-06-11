import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    
    <span onClick={() => props.removePlayer(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default PlayerCard;
