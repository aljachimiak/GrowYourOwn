import Game from './game';
import Player from './player';

describe('Game', () => {
	describe('throws an error when', () => {
		it('is not passed players', () => {
			const err1 = new Error('A new Game requires players.');
			expect(() => {
				const game = new Game();
			}).toThrow(err1);
		});

		it('is missing players', () => {
			const err2 = new Error('A new Game requires at least one player.');
			const args = { players: [] };
			expect(() => {
				const game = new Game(args);
			}).toThrow(err2);
		});

		it('is passed too many players', () => {
			const err3 = new Error ('A new Game can only accept one player only');
			const player1 = new Player('Jones', 'purple');
			const player2 = new Player('Smith', 'black');
			const args = { players: [player1, player2] };
			expect(() => {
				const game = new Game(args);
			}).toThrow(err3);
		});
	});

	describe('is successful when', () => {
		it('is passed a single player', () => {
			const player1 = new Player('Jones', 'purple');
			const args = { players: [player1] };
			const game = new Game(args);
			expect(game.players[0]).toBe(player1);
		});
	});

	describe('proper components include', () => {
		const player1 = new Player('Jones', 'purple');
		const args = { players: [player1] };
		const game = new Game(args);
		it('board', () => {
			expect(Array.isArray(game.board.getBoard())).toBe(true);
			expect(game.board.getBoard().length).toBe(40);
		});

		it('hasWinner', () => {
			expect(game.hasOwnProperty('hasWinner')).toBe(true);
			expect(game.hasWinner).toBe(false);
		});
	});
});
