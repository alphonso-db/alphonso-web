(function() {
	'use strict';

	var React = require('react');
	var Header = require('./pages/common/header/header');
	var Sidebar = require('./pages/common/sidebar/sidebar');
	var Breadcrumb = require('./pages/common/breadcrumb/breadcrumb');
	var Footer = require('./pages/common/footer/footer');

	var Router = require('react-router');
	var RouteHandler = Router.RouteHandler;

	var App = React.createClass({
		render: function() {
			return (
				<div>
					<Sidebar/>
					<div id="child-page-container">
						<div className="page-content">
							<div className="row page-content-header">
								<div className="col-xs-12">
									<Header/>
									<Breadcrumb/>
								</div>
							</div>

							<div className="row">
								<div className="col-xs-12">
									<RouteHandler/>
								</div>
							</div>

							<div className="row">
								<div className="col-xs-12">
									<Footer/>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			);
		}
	});

	module.exports = App;
})();