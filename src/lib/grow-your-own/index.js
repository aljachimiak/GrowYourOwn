import Dice from './dice';
import Game from './game';
import GameAction from './game-action';
import Player from './player';

module.exports = {
	Player,
	Game,
	Dice,

	takeTurn(args) {
		let {game, playerIndex} = args;
		return game;
	}
}

// takeTurn
//		dice.roll(2)
//		updatePlayerPosition
//		applyNewResources
//		growPlant

//		new Move pushed to game.moves
// 		needs game-action recordMove

//		reduceResources
//

// playGame
//		while (!game.hasWinner) {
//			game = takeTurn(game)
// }