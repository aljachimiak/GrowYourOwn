import Board from './board';

describe('Board', () => {
	const gb = new Board();
	const counts = {
		robot: 0,
		sun: 0,
		rain: 0,
		fertilizer: 0,
	};

	gb.getBoard().forEach(tile => {
		counts[tile.type]++;
	})
	it('has 36 tiles', () => {
		expect(gb.board.length).toBe(40);
	});

	it('has 4 robot tiles', () => {
		expect(counts.robot).toBe(4);
	});

	it('has 12 sun tiles', () => {
		expect(counts.sun).toBe(12);
	});

	it('has 12 rain tiles', () => {
		expect(counts.rain).toBe(12);
	});

	it('has 12 fertilizer tiles', () => {
		expect(counts.fertilizer).toBe(12);
	});
});
