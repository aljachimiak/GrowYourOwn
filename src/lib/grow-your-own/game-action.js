import _ from 'lodash';
import Move from './move';

const GameAction = () => {};

// updatePlayerPosition
const updatePlayerPosition = (args) => {
	const {game, dist, playerIndex} = args;
	// todo add errors for missing args
	game.players[playerIndex].position += dist;
	return game;
};

// applyNewResources
const applyNewResources = (args) => {
	let game = args.game;
	const {playerIndex, dist} = args;
	// todo add errors for missing args

	if (game.players[playerIndex].position >= 36) {
		// the last tile index is 35
		// we need to reset the position to an inbounds index
		game = resetPlayerPosition(args);
	}

	const newResources = determineNewResources({game, playerIndex, dist});
	Object.keys(newResources).forEach(k => {
		game.players[playerIndex].resources[k] = newResources[k];
	});
	return game;
};

const resetPlayerPosition = (args) => {
	// todo add errors for missing args

	const {game, playerIndex} = args;
	game.players[playerIndex].position -= 36;
	return game;
}

const determineNewResources = (args) => {
	const {game, playerIndex, dist} = args;
	const tile = getBoardTile({game, playerIndex});
	const type = tile.type;

	const defaultResources = {
		sun: 0,
		rain: 0,
		fertilizer: 0
	};

	const startResources = _.clone(game.players[playerIndex].resources);

	let newResources;

	if (type === 'robot') {
		// robo-calibrate increases all resources to a minimum of 2
		const minResources = robotTileEnforceMin({game, playerIndex});
		
		const regResources = robotTileRegulatePeaks({game, playerIndex});

		newResources = Object.assign(defaultResources, minResources, regResources);

	} else {
		// player gets resources
		newResources = Object.assign({}, startResources);
		newResources[type] += dist;
	}
	return newResources;
};

const getBoardTile = (args) => {
	// todo add errors for missing args
	const {game, playerIndex} = args;
	const board = game.board.getBoard();
	const position = game.players[playerIndex].position;
	return board[position];
};

const robotTileEnforceMin = (args) => {
	const {game, playerIndex} = args;
	const resources = {};
	Object.keys(game.players[playerIndex].resources).forEach(type => {
		// increase any resource that is less than 2, up to 2
		if (game.players[playerIndex].resources[type] < 2) {
			resources[type] = 2;
		}
	});
	return resources;
};

const robotTileRegulatePeaks = (args) => {
	const resources = {};
	const {game, playerIndex} = args;
	const smallestAmount = 2;

	Object.keys(game.players[playerIndex].resources).forEach(type => {
		// growth will be maximized on a turn where all resources are within 2 
		const currentAmount = game.players[playerIndex].resources[type];
		if (currentAmount > smallestAmount + 2) {
			resources[type] = smallestAmount + 2;
		}
	});
	return resources;
};

// growPlant
const growPlant = (args) => {
	const {game, playerIndex} = args;
	const growthAmount = determinePlantGrowth({game, playerIndex});
	// todo implement for real
	game.players[playerIndex].growth += growthAmount;

	if (game.players[playerIndex].growth >= 11) {
		game.players[playerIndex].growth = 11; // maxHeight on plant is 11
		game.hasWinner = true;
	}
	return game;
};

const determinePlantGrowth = (args) => {
	const {game, playerIndex} = args;
	// todo - implment for real
	return 1;
};

const recordMove = (args) => {
	const {game, playerIndex} = args;
	const growth = game.players[playerIndex].growth;
	const playerResources = _.cloneDeep(game.players[playerIndex].resources);
	const dist = args.dist;

	const move = new Move({playerIndex, growth, playerResources, dist});

	game.moves.push(move);
	return game;
};

const reduceResources = (args) => {
	const {game, playerIndex} = args;
	// todo implement

	return game;
};

GameAction.updatePlayerPosition = updatePlayerPosition;
GameAction.applyNewResources = applyNewResources;
GameAction.growPlant = growPlant;
GameAction.recordMove = recordMove;
GameAction.reduceResources = reduceResources;

// normally these would be private but we'll export them for testing
GameAction.getBoardTile = getBoardTile;
GameAction.robotTileEnforceMin = robotTileEnforceMin;
GameAction.robotTileRegulatePeaks = robotTileRegulatePeaks;
GameAction.determineNewResources = determineNewResources;
GameAction.resetPlayerPosition = resetPlayerPosition;
GameAction.determinePlantGrowth = determinePlantGrowth;

export default GameAction;
