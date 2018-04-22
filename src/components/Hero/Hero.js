import React from "react";
import "./Hero.css";

const Hero = props => (
  <div className="jumbotron" >
    
    <h1 className="text-center"> Arboreal Memory </h1>
    <br />
    <br />
    <p className="text-center">Try to click as many images as possible without clicking the same one twice!</p>
    <div className="header">
    <span className="float-left">Score: {props.score}</span>
    <span className="float-right">High Score: {props.highScore}</span>
    </div>
  </div>
);

export default Hero;
