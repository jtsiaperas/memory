import React from "react";
import "./Card.css";

const Card = props => (
  props.cards.map(card => 
  <div className="card float-left col-md-3" key={card.id} onClick={() => props.clickCard(card.id-1)} >
    <div className="img-container">
      <img alt={card.id} src={require(`../images/${card.id}.jpg`)} />
    </div>
  </div>)
);

export default Card;
