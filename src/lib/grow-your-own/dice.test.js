import Dice from './dice';

describe('Dice', () => {
	describe('with too small input', () => {
		it('rolls only one die', () => {
			const results = [];
			for (let i = 0; i < 100; i++) {
				results.push(Dice.roll(-1));
			}
			results.forEach(r => {
				expect(r).toBeGreaterThan(0);
				expect(r).toBeLessThan(7);
			});
		});
	});
	describe('with Nan small input', () => {
		it('rolls only one die', () => {
			const results = [];
			for (let i = 0; i < 100; i++) {
				results.push(Dice.roll('two'));
			}
			results.forEach(r => {
				expect(r).toBeGreaterThan(0);
				expect(r).toBeLessThan(7);
			});
		});
	});

	describe('with multiple dice', () => {
		it('rolls multiple dice', () => {
			const results = [];
			for (let i = 0; i < 100; i++) {
				results.push(Dice.roll('2'));
			}
			results.forEach(r => {
				expect(r).toBeGreaterThan(1);
				expect(r).toBeLessThan(13);
			});
		});
	});
});
