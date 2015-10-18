(function() {
	"use strict";

	var $ = require('jquery');
	var React = require('react');
	var ReactDOM = require('react-dom');
	
	var Layout = React.createFactory(require('./components/layouts/layout.jsx'));

	ReactDOM.render(
		Layout(),
		$('.container')[0]
	);

})();