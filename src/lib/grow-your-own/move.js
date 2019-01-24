class Move {
	constructor(args) {
		this.growth = args.growth || 0;
		this.playerIndex = args.playerIndex || 0;
		this.playerResources = args.playerResources || {};
		this.roll = args.dist;
	}
}

module.exports = Move;
