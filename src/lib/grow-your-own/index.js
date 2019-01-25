import Dice from './dice';
import Game from './game';
import GameAction from './game-action';
import Player from './player';

const GYO = () => {};

const takeTurn = (args) => {
	let game = args.game;
	const playerIndex = args.playerIndex;
	const dist = Dice.roll(2);

	game = GameAction.updatePlayerPosition({game, playerIndex, dist});
	game = GameAction.applyNewResources({game, playerIndex, dist});
	game = GameAction.growPlant({game, playerIndex});
	game = GameAction.reduceResources({game, playerIndex});
	game = GameAction.recordMove({game, playerIndex, dist});

	return game;
}

const playGame = () => {
	const player = new Player('Jones', 'red');
	let game = new Game({players: [player]});

	while (!game.hasWinner) {
		// only one player at this time
		const playerIndex = 0;
		game = takeTurn({game, playerIndex});
	}
	return game;
}
GYO.takeTurn = takeTurn;
GYO.playGame = playGame;
GYO.Player = Player;
GYO.Game = Game;
export default GYO;
