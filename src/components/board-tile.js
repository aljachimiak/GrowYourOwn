import React, { Component } from 'react';

class BoardTile extends Component {
	constructor(args) {
		super();
		this.state = {
			tile: args.tile
		}
		this.determineColor = this.determineColor.bind(this);
	}

	determineColor() {
		switch(this.state.tile.type) {
			case 'sun':
				return 'rgb(243 178 33)';
			case 'rain':
				return 'rgb(21 174 251)';
			case 'fertilizer':
				return 'rgb(149 95 53)';
			case 'robot':
				return 'rgb(21 174 251)';
		}
		return '#00F';
	}

	render() {
		return (
			<div className="board-tile" style={{border: "3px solid " + this.determineColor()}}>
				<div className="header" style={
					{backgroundColor: this.determineColor()}
					}>
					<span>{this.state.tile.label}</span>
				</div>
				<div className="emoji-container">
					<span role="img" aria-labelledby={this.state.tile.label}>{this.state.tile.emoji}</span>
				</div>
			</div>
		)
	}
}

export default BoardTile;
