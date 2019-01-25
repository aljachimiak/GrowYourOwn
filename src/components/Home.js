
import React, { Component } from 'react';
import GYO from '../lib/grow-your-own';
import Header from './header';
import MoveItem from './move-item';
import {Grid, Col} from 'react-bootstrap';

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
		// console.log(moves[0]);
		return moves.map((move, index) => {
			return (
				<MoveItem 
					index={index}
					move={move}
					key={index}
				/>
			);
		});
	}

	render() {
	  return (
		<div className="Home">
			<Header />
			<Grid>
				<Col>
					<div className="move-container">
						{this.renderGameMoves()}
					</div>
				</Col>
			</Grid>
		</div>
	  );
	}
  }
  
  export default Home;

