(function() {
	'use strict';

	var $ = require('jquery');
	var React = require('react');
	var Header = require('./pages/common/header/header');
	var Footer = require('./pages/common/footer/footer');

	var Router = require('react-router');
	var RouteHandler = Router.RouteHandler;

	var App = React.createClass({
		render: function() {
			return (
				<div>
					<Header/>
					<RouteHandler/>
					<Footer/>
				</div>
			);
		}
	});

	module.exports = App;
})();