class Board {
	constructor() {
		const board = [];
		const farmRobot = {
			type: 'robot',
			label: 'Robotic Recalibration',
			emoji: '🤖'
		};
		const regularTiles = [
			{
				type: 'sun',
				label: 'Sunlight',
				emoji: '☀️'
			},
			{
				type: 'rain',
				label: 'Rainfall',
				emoji: '🌧'
			},
			{
				type: 'fertilizer',
				label: 'Fertilizer',
				emoji: '💩'
			}
		];

		// construct a monopoly-type square game board
		// with a robot on each corner
		// and 8 tiles in between alternating between 
		// sun, rain, and fertilizer
		for (let i = 0; i < 4; i++) {
			board.push(farmRobot);
			for(let j = 0; j < 8; j++) {
				board.push(regularTiles[j % 3]);
			}
		}

		this.board = board;
	}

	getBoard() {
		return this.board;
	}
}

export default Board;
