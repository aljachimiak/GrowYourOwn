import React, { Component } from 'react';
import {Panel, Badge, Table} from 'react-bootstrap';
import BoardTile from './board-tile';

class MoveItem extends Component {
	constructor(args) {
		super();
		this.state = {
			moveIndex: args.index,
			move: args.move
		}
	}

	render() {
		return (
			<div className="move-item">
				<Panel bsStyle="primary">
					<Panel.Heading>Move #{this.state.moveIndex + 1}</Panel.Heading>
					<Panel.Body>
						<div className="move-item-body-grid">
							<div className="left">
								<div className="move-roll">Roll: {this.state.move.roll}</div>
								<div className="move-tile">
									<BoardTile tile={this.state.move.tile} />
								</div>
							</div>
							<div className="right">
							<Table condensed>
							<tbody>
								<tr>
									<td>Plant Growth:</td>
									<td>{this.state.move.growth}</td>
								</tr>
								<tr>
									<td>Resources: </td>
									<td>
										<p>
											<span className="move-item-emoji" role="img" aria-labelledby="sun">☀️</span>
											<Badge>{this.state.move.playerResources.sun}
											</Badge>
										</p>
										<p>
											<span className="move-item-emoji" role="img" aria-labelledby="rain">🌧</span>
											<Badge>{this.state.move.playerResources.rain}
											</Badge>
										</p>
										<p>
											<span className="move-item-emoji" role="img" aria-labelledby="fertilizer">💩</span>
											<Badge>{this.state.move.playerResources.fertilizer}
											</Badge>
										</p>
									</td>
								</tr>
							</tbody>
						</Table>
							</div>
							
						</div>
					</Panel.Body>
				</Panel>
			</div>
		)
	}
}

export default MoveItem;
