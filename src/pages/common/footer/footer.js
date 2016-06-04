(function() {
	'use strict';

	var React = require('react');

	var Footer = React.createClass({
		render: function() {
			return (
				<footer className="row">
					<hr/>
					<div className="social-toolbar text-center">
						<a href="//github.com/hegdeashwin" target="_blank"><i className="github fa fa-github-square fa-2x"></i></a>
                        <a href="//stackoverflow.com/users/1923575/hegdeashwin" target="_blank"><i className="stackoverflow fa fa-stack-overflow fa-2x"></i></a>
                        <a href="//in.linkedin.com/in/hegdeashwin" target="_blank"><i className="linkedin fa fa-linkedin-square fa-2x"></i></a>
                        <a href="//www.facebook.com/hegdeashwin" target="_blank"><i className="facebook fa fa-facebook-square fa-2x"></i></a>
					</div>

					<div className="text-center">
						Copyright &copy; 2015 <a href="//github.com/hegdeashwin" target="_blank">Ashwin Hegde</a> | <a href="//github.com/hegdeashwin/alphonso/graphs/contributors" target="_blank">Contributions</a>, <a href="//raw.githubusercontent.com/hegdeashwin/alphonso/master/LICENSE" target="_blank">The MIT License (MIT)</a>
					</div>
		        </footer>
			);
		}
	});

	module.exports = Footer;
})();