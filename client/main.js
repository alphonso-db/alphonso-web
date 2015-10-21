(function() {
	'use strict';

	var React = require('react');
	var ReactDOM = require('react-dom');

	var HrNavbar = React.createFactory(require('./components/navs/hr-nav.jsx'));
	var Layout = React.createFactory(require('./components/layouts/layout.jsx'));
	var Alert = React.createFactory(require('./components/alerts/alert.jsx'));

	ReactDOM.render(
		HrNavbar(),
		document.getElementById('page-header')
	);

	ReactDOM.render(
		Layout(),
		document.getElementById('page-container')
	);

	ReactDOM.render(
		Alert(),
		document.getElementById('page-alert')
	);

})();