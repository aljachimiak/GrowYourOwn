import React, {Component} from 'react';

class BoardTile extends Component {
	constructor(args) {
		super();
		this.state = {
			tile: args.tile
		}
		this.determineColor = this.determineColor.bind(this);
	}

	determineColor() {
		switch (this.state.tile.type) {
			case 'sun':
				return '#f3b221';
			case 'rain':
				return '#15aefb';
			case 'fertilizer':
				return '#955f35';
			case 'robot':
				return '#60959e';
			default:
				return '#777';
		}
	}

	render() {
		return (
			<div className="board-tile" style={{border: "3px solid " + this.determineColor()}}>
				<div className="header" style={{backgroundColor: this.determineColor()}}>
					<span>{this.state.tile.label}</span>
				</div>
				<div className="emoji-container">
					<span role="img" aria-labelledby={this.state.tile.label}>
						{this.state.tile.emoji}
					</span>
				</div>
			</div>
		);
	}
}

export default BoardTile;
