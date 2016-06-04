(function() {
	'use strict';

	var React = require('react');
	var Router = require('react-router');
	var routes = require('./router/routes');
	var RouteHandler = Router.RouteHandler;

	Router.run(routes, function(Handler) {
		React.render(<Handler/>, document.getElementById('parent-page-container'));
	});

})();