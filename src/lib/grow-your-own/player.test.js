import Player from './player';

describe('Player', () => {
	describe('throws an error when', () => {
		it('is missing a name', () => {
			const err1 = new Error('A new Player must have a name.');
			expect(function () {
				const testPlayer = new Player('', 'blue');
			}).toThrow(err1);
		});

		it('is missing a color', () => {
			const err2 = new Error('A new Player must have a color (for their game peice).');
			expect(function () {
				const testPlayer = new Player('Abby', '');
			}).toThrow(err2);
		});
	});

	describe('is successful', () => {
		const player1 = new Player('Juanita', 'red');

		it('when passed the correct values', () => {
			expect(player1.name).toBe('Juanita');
			expect(player1.color).toBe('red');
		});

		it('has expected resources object', () =>{
			expect(player1.resources.sun).toBe(5);
			expect(player1.resources.rain).toBe(5);			
			expect(player1.resources.fertilizer).toBe(5);
		});

		it('has expected a position', () =>{
			expect(player1.position).toBe(0);
		});
	});
})

