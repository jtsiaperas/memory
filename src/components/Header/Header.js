import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header" >
    
    <span className="float-left">Score: {props.score}</span>
    <span className="float-right">High Score: {props.highScore}</span>

    
  </div>
);

export default Header;
