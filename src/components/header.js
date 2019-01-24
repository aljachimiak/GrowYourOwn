import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
	render() {
	  return (
	  <div className="header">
		<Navbar fixedTop="true">
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/">
						<span>
							<span role="img" alt="sprout emoji" aria-label="sprout emoji">🌱</span> Grow Your Own
						</span>
					</a>
				</Navbar.Brand>
			</Navbar.Header>
		</Navbar>
	  </div>
	  );
	}
}

export default Header;
