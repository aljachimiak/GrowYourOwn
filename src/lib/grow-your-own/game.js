import Board from './board';

class Game {
	constructor(args = {}) {
		if (!args.players) {
			throw new Error('A new Game requires players.');
		}
		if (args.players.length === 0) {
			throw new Error('A new Game requires at least one player.');
		}
		// todo - later we'll go for multiplayer
		if (args.players.length !== 1) {
			throw new Error ('A new Game can only accept one player only');
		}

		this.board = new Board();
		this.hasWinner = false;
		this.moves = [];
		this.players = args.players;
	}
}

module.exports = Game;
