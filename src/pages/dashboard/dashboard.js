(function() {
	'use strict';

	var React = require('react');

	var Dashboard = React.createClass({
		render: function() {
			return (
				<div>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Panel title</h3>
							<div className="panel-button-group">
								<button type="button" className="btn btn-default"><i className="fa fa-search fa-lg"></i></button>
							</div>
						</div>
						<div className="panel-body">
							Panel content
						</div>
						<div className="panel-footer">Panel footer</div>
					</div>
				</div>
			);
		}
	});

	module.exports = Dashboard;
})();