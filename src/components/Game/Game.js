import React, {Component} from 'react';
import CardList from "./CardList.js";
import Card from "../Card";
import Header from "../Header";
import Hero from '../Hero';


class Game extends Component {
	state = {
		score: 0,
		highScore: 0,
		cards: [],
		show: true
	};

	componentDidMount() {
		this.setState({cards: CardList});
		
	}


	randomize = () => {
		let tempCards = this.state.cards.slice();
	    
	    for (let i = tempCards.length-1; i > 0; i--)
		{
			let randomIndex = Math.floor(Math.random()*(i-1));
			
			[tempCards[i], tempCards[randomIndex]] = [tempCards[randomIndex],tempCards[i]];
		}
		return tempCards;
	}

	clickCard = id => {
		const tempCards = this.state.cards.slice();
		let score = this.state.score;
		let highScore = this.state.highScore;
		console.log(tempCards);
		if (!tempCards[id].clicked)
		{
			score++;
			tempCards[id].clicked = true;
			console.log(tempCards[id]);
			this.setState({score: score, cards: tempCards});
		}
		else
		{
			if (score > highScore)
			{
				highScore = score;
			}
			tempCards.forEach(card => card.clicked = false);
			this.setState({score: 0, highScore: highScore, cards: tempCards});
		}
	} 


	render(){
		
		return (
			<div className="container">
			
          	<Hero score={this.state.score} highScore={this.state.highScore} />
         	<Card cards={this.randomize()} clickCard={this.clickCard} />
         	</div>
		);
	}
}

export default Game;