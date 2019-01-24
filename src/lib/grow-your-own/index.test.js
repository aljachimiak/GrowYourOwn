import GYO from './index';

describe('GrowYourOwn', () => {	
	describe('takeTurn', () => {
		const player1 = new GYO.Player('Jones', 'red');
		let game = new GYO.Game({players: [player1]});
		const playerIndex = 0;
	
		game = GYO.takeTurn({game, playerIndex});
		it('increments the game properly', () => {
			expect(game.players[playerIndex].position).not.toBe(0);
		});
		it('has a recordedMove', () => {
			expect(game.moves.length).toBe(1);
		});
	});

	describe('playGame makes a game', () => {
		const game = GYO.playGame();
		it('with hasWinner', () => {
			expect(game.hasWinner).toBe(true);
		});
		it('with multiple moves', () => {
			expect(game.moves.length).toBeGreaterThan(1);
		});
		it('player has a growth of 11', () => {
			console.log(JSON.stringify(game, null, 2));
			expect(game.players[0].growth).toBe(11);
		});
		expect
	});
});