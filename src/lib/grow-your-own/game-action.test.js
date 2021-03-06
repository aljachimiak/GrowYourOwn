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

		game.players[playerIndex].position = 10;
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

		game.players[playerIndex].position = 10;
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

	describe('determinePlantGrowth', () => {
		describe('with a zero in resources', () => {
			it('returns zero growth', () => {
				const player1 = new Player('Jones', 'red');
				let game = new Game({players: [player1]});
				const playerIndex = 0;

				game.players[playerIndex].resources.sun = 0;

				const growth = GameAction.determinePlantGrowth({game, playerIndex});
				expect(growth).toBe(0);
			});
		});

		describe('with balanced resources', () => {
			it ('returns a growth of 2 with equivalent values', () => {
				const player1 = new Player('Jones', 'red');
				let game = new Game({players: [player1]});
				const playerIndex = 0;

				const growth = GameAction.determinePlantGrowth({game, playerIndex});
				expect(growth).toBe(2);
			});

			it ('returns a growth of 2 with resources of [7, 5, 5]', () => {
				const player1 = new Player('Jones', 'red');
				let game = new Game({players: [player1]});
				const playerIndex = 0;

				game.players[playerIndex].resources.sun = 7;
				const growth = GameAction.determinePlantGrowth({game, playerIndex});
				expect(growth).toBe(2);
			});
		});

		describe('with unblanced resources', () => {
			it ('returns a growth of 1', () => {
				const player1 = new Player('Jones', 'red');
				let game = new Game({players: [player1]});
				const playerIndex = 0;

				game.players[playerIndex].resources.sun = 17;
				game.players[playerIndex].resources.rain = 14;
				game.players[playerIndex].resources.fertilizer = 8;

				const growth = GameAction.determinePlantGrowth({game, playerIndex});
				expect(growth).toBe(1);
			});
		})
	});

	describe('growPlant', () => {
		describe('when plant growth is 0', () => {
			it ('will not consume resources', () => {
				const player1 = new Player('Jones', 'red');
				let game = new Game({players: [player1]});
				const playerIndex = 0;

				game.players[playerIndex].resources.sun = 0;
				const growth = GameAction.determinePlantGrowth({game, playerIndex});

				game = GameAction.growPlant({game, playerIndex});
				
				expect(game.players[playerIndex].resources.rain).toBe(5);
			});
		});
	});

	describe('reduceResources', () => {
		describe('actually reduces the resources by one', () => {
			it('returns correct values', () => {
				const player1 = new Player('Jones', 'red');
				let game = new Game({players: [player1]});
			
				const playerIndex = 0;
				game = GameAction.reduceResources({game, playerIndex});
				expect(game.players[playerIndex].resources.sun).toBe(4);
			});

			it('does not return negative resources', () => {
				const player1 = new Player('Jones', 'red');
				let game = new Game({players: [player1]});
			
				const playerIndex = 0;
				game.players[playerIndex].resources.sun = 0;
				game = GameAction.reduceResources({game, playerIndex});

				expect(game.players[playerIndex].resources.sun).toBe(0);
			});
		});
	});

	xdescribe('recordMove');
});
