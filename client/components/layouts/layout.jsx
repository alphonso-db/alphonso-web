(function() {
	'use strict';

	var React = require('react');
	
	var Layout = React.createClass({
		render: function() {
			return (
				<div className="row">
					<div id="page-alert"></div>
				</div>
			);
		}
	});

	module.exports = Layout;

})();