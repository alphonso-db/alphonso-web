(function() {
	'use strict';

	var React = require('react');

	var Breadcrumb = React.createClass({
		render: function() {
			return (
				<div className="page-breadcrumb">
					<div className="page-breadcrumb-title">
						Dashboard
					</div>
					<div className="page-breadcrumb-links">
						Home / Dashboard
					</div>
				</div>
			);
		}
	});

	module.exports = Breadcrumb;
})();