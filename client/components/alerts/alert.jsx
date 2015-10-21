(function() {
	'use strict';

	var React = require('react');

	var Alert = React.createClass({
		render: function() {
			return (
				<div className="alert alert-danger alert-dismissible fade in" role="alert">
					<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle-o"></i></span></button>
					<p>Application Level Message</p>
				</div>
			);
		}
	});

	module.exports = Alert;
})();