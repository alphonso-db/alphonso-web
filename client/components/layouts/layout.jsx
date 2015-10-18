(function() {
	"use strict";

	var React = require('react');
	
	var Layout = React.createClass({
		render: function() {
			return (
				<div className="layout">
					<header className="header">
						<h1>Header</h1>
					</header>
					<footer className="footer">
						<h2>Footer</h2>
					</footer>
				</div>
			);
		}
	});

	module.exports = Layout;

})();