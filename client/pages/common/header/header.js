(function() {
	'use strict';

	var React = require('react');

	var Header = React.createClass({
		render: function() {
			return (
				<nav className="navbar navbar-default">
					<nav className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li>
								<a href="#"><i className="fa fa-home fa-lg"></i></a>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-eye fa-lg"></i> 
									<span className="caret"></span>
								</a>
								<ul className="dropdown-menu">
									<li>
										<a href="#">Collections</a>
									</li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-cogs fa-lg"></i> 
									<span className="caret"></span>
								</a>
								<ul className="dropdown-menu">
									<li>
										<a href="#" target="_blank">Settings</a>
									</li>
								</ul>
							</li>
						</ul>
					  	<ul className="nav navbar-nav navbar-right">
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-connectdevelop fa-lg"></i>
									<span className="caret"></span>
								</a>
								<ul className="dropdown-menu">
									<li>
										<a href="#" target="_blank">API Explorer</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="#" target="_blank">Take a Tour</a>
									</li>
									<li>
										<a href="#" target="_blank">Documentation</a>
									</li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">Help <span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li>
										<a href="https://github.com/hegdeashwin/alphonso" target="_blank">Github Home Page</a>
									</li>
									<li>
										<a href="#" target="_blank">Gitbook Page</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="https://github.com/hegdeashwin/alphonso/releases" target="_blank">Release Page</a>
									</li>
									<li>
										<a href="https://github.com/hegdeashwin/alphonso/milestones" target="_blank">Milestones</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="https://github.com/hegdeashwin/alphonso/issues" target="_blank">Issues Page</a>
									</li>
									<li>
										<a href="https://github.com/hegdeashwin/alphonso/pulls" target="_blank">Open Pull Requests</a>
									</li>
									<li className="divider"></li>
									<li>
										<a href="https://github.com/hegdeashwin/alphonso" target="_blank">About alphonso</a>
									</li>
								</ul>
							</li>
					  	</ul>
					</nav>
				</nav>
			);
		}
	});

	module.exports = Header;
})();