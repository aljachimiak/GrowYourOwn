import _ from 'lodash';

class Move {
	constructor(args) {
		this.growth = args.growth || 0;
		this.playerIndex = args.playerIndex || 0;
		this.playerResources = _.cloneDeep(args.playerResources);
		this.roll = args.dist;
		this.tile = _.cloneDeep(args.tile);
	}
}

export default Move;
