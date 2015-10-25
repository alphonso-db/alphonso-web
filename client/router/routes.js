(function() {
	'use strict';

	var React = require('react');
	var Router = require('react-router');

	var DefaultRoute = Router.DefaultRoute;
	var Route = Router.Route;

	var routes = (
		<Route name="app" path="/" handler={require('../app')}>
			<DefaultRoute handler={require('../pages/dashboard/dashboard')} />
			<Route name="about" handler={require('../pages/about/about')} />
			<Route name="settings" handler={require('../pages/settings/settings')} />
		</Route>
	);

	module.exports = routes;

})(); 