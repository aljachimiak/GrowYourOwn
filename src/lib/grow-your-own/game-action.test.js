import Player from './player';
import Game from './game';
import GameAction from './game-action';

describe('GameAction', () => {
	describe('updatePlayerPosition', () => {
		const player1 = new Player('Jones', 'red');
		let game = new Game({players: [player1]});
	
		const playerIndex = 0;
		const dist = 3;
		game = GameAction.updatePlayerPosition({
			game, 
			dist, 
			playerIndex
		});

		it('correctly updates player position', () => {
			expect(game.players[playerIndex].position).toBe(3);
		});
	});

	xdescribe('resetPlayerPosition');

	describe('getBoardTile', () => {
		const player1 = new Player('Jones', 'red');
		const game = new Game({players: [player1]});
		const playerIndex = 0;
		const tile3 = GameAction.getBoardTile({game, playerIndex});
		
		it('retrieves the expected tiles', () => {
			expect(tile3.type).toBe('robot');
		});
	});

	describe('robotTileEnforceMin', () => {
		const player1 = new Player('Jones', 'red');
		const game = new Game({players: [player1]});
	
		const playerIndex = 0;
		game.players[playerIndex].position = 9;
		const playerResources = {
			sun: 6,
			rain: 1,
			fertilizer: 0
		};
		game.players[playerIndex].resources = playerResources;

		const minResources = GameAction.robotTileEnforceMin({game, playerIndex});

		it('returns expected resources', () => {
			expect(minResources.rain).toBe(2);
			expect(minResources.fertilizer).toBe(2);
		});

		it('does not return other resources', () => {
			expect(minResources.hasOwnProperty('sun')).toBe(false);
		});
	});

	describe('robotTileRegulatePeaks', () => {
		describe('with too low values', () => {
			it('returns expected resources', () => {
				const player1 = new Player('Jones', 'red');
				const game = new Game({players: [player1]});
			
				const playerIndex = 0;
				game.players[playerIndex].position = 9;
				const playerResources = {
					sun: 6,
					rain: 1,
					fertilizer: 0
				};
				game.players[playerIndex].resources = playerResources;
	
				const regResources = GameAction.robotTileRegulatePeaks({game, playerIndex});
				expect(regResources.sun).toBe(4);
				expect(regResources.hasOwnProperty('rain')).toBe(false);
				expect(regResources.hasOwnProperty('fertilizer')).toBe(false);
			});
		});

		describe('with low values that are above the low threshold', () => {
			it('returns expected resources', () => {
				const player1 = new Player('Jones', 'red');
				const game = new Game({players: [player1]});
			
				const playerIndex = 0;
				game.players[playerIndex].position = 9;
				const playerResources = {
					sun: 30,
					rain: 22,
					fertilizer: 32
				};
				game.players[playerIndex].resources = playerResources;
	
				const regResources = GameAction.robotTileRegulatePeaks({game, playerIndex});
				expect(regResources.sun).toBe(24);
				expect(regResources.hasOwnProperty('rain')).toBe(false);
				expect(regResources.fertilizer).toBe(24);
			});
		});
	});

	describe('determineNewResources', () => {
		const player1 = new Player('Jones', 'red');
		const game = new Game({players: [player1]});
	
		const playerIndex = 0;

		game.players[playerIndex].position = 9;
		const playerResources = {
			sun: 6,
			rain: 1,
			fertilizer: 0
		};
		game.players[playerIndex].resources = playerResources;

		const newResources = GameAction.determineNewResources({game, playerIndex});

		it('returns expected resources', () => {
			expect(newResources.sun).toBe(4);
			expect(newResources.rain).toBe(2);
			expect(newResources.fertilizer).toBe(2);
		});
	});

	describe('applyNewResources', () => {
		const player1 = new Player('Jones', 'red');
		let game = new Game({players: [player1]});
	
		const playerIndex = 0;

		game.players[playerIndex].position = 9;
		const playerResources = {
			sun: 6,
			rain: 1,
			fertilizer: 0
		};
		game.players[playerIndex].resources = playerResources;

		game = GameAction.applyNewResources({game, playerIndex});

		const resourcesToCheck = game.players[playerIndex].resources;

		it('returns expected resources', () => {
			expect(resourcesToCheck.sun).toBe(4);
			expect(resourcesToCheck.rain).toBe(2);
			expect(resourcesToCheck.fertilizer).toBe(2);
		});
	});

	xdescribe('determinePlantGrowth');
	xdescribe('growPlant');
	xdescribe('reduceResources');
	xdescribe('recordMove');
});
