(function() {
	'use strict';

	var React = require('react');

	var Sidebar = React.createClass({
		render: function() {
			return (
				<div id="page-sidebar-container">
					<ul className="page-sidebar">
						<li className="page-sidebar-header">
							<a href="#">Alphonso <sup><small>v0.0.0 Alpha</small></sup></a>
						</li>
						<li className="page-sidebar-title">
							<span>NAVIGATION</span>
						</li>
						<li className="page-sidebar-list">
							<a href="#">Dashboard</a>
						</li>
						<li className="page-sidebar-list">
							<a href="#">Tables</a>
						</li>
					</ul>
					<div className="page-sidebar-footer">
						<div className="col-xs-4">
							<a href="#">About</a>
						</div>
						<div className="col-xs-4">
							<a href="#">Support</a>
						</div>
						<div className="col-xs-4">
							<a href="#">Github</a>
						</div>
					</div>
				</div>
			);
		}
	});

	module.exports = Sidebar;
})();