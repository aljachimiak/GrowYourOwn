class Move {
	constructor(args) {
		this.plantGrowth = args.plantGrowth || 0;
		this.playerIndex = args.playerIndex || 0;
		this.playerResources = args.playerResources || {};
	}
}

module.exports = Move;
