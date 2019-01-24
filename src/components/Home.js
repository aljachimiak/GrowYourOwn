
import React, { Component } from 'react';
import GYO from '../lib/grow-your-own';
import Header from './header';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			game: GYO.playGame()
		}
		this.renderGameMoves = this.renderGameMoves.bind(this);
	}

	renderGameMoves() {
		const moves = this.state.game.moves;
		console.log(moves[0]);
		return moves.map((move, index) => {
			return (
				<div className="move-item" key={index}>
					<p>ROLL: {move.roll}</p>
					<p>Plant Growth: {move.growth}</p>
					<ul>
						<li><span>SUN: </span>{move.playerResources.sun}</li>
						<li><span>Rain: </span>{move.playerResources.rain}</li>
						<li><span>Fertilizer: </span>{move.playerResources.fertilizer}</li>
					</ul>
				</div>
			);
		});
	}

	render() {
	  return (
		<div className="Home">
			<Header />
			<div className="move-container">
				{this.renderGameMoves()}
			</div>
		</div>
	  );
	}
  }
  
  export default Home;

