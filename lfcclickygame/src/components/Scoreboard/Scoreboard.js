import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  <footer className="footer">
    
    <p className="message">{props.message} </p>
    <p className="score">Score: {props.score} </p>
  </footer>
);

export default Scoreboard;
