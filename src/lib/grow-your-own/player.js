class Player {
	constructor(name, color) {
		if (!name) {
			throw new Error('A new Player must have a name.');
		}
		if (!color) {
			throw new Error ('A new Player must have a color (for their game peice).');
		}
		this.name = name,
		this.color = color
		this.resources = {
			sun: 5,
			rain: 5,
			fertilizer: 5
		};
		this.position = 0;
		this.growth = 0;
	}
}

module.exports = Player;
