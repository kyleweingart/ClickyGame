import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  <footer className="footer">
    <span>Score: {props.score} </span>
  </footer>
);

export default Scoreboard;
