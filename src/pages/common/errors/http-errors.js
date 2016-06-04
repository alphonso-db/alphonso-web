(function() {
	'use strict';

	var React = require('react');

	var HTTPErrors = React.createClass({
		render: function() {
			return (
				<div className="error-template">
	                <h2 className="text-danger">404 - Page Not Found</h2>
	                <div className="lead text-danger error-details">The requested resource could not be found but may be available again in the future.</div>
	                <div className="error-actions">
	                    <a href="/" className="btn btn-primary btn-lg">
	                        <i className="fa fa-home fa-lg"></i> Take Me Home
	                    </a>
	                </div>
	            </div>
			);
		}
	});

	module.exports = HTTPErrors;

})();