(function() {
	"use strict";

	var development = "./client/";
	var production = "./client-prod/";

	module.exports = {
		"lint": {
			"html": {
				"gateway": {
					"src": [development + "*.html"]
				},
				"templates": {
					"src": [
						development + "templates/**/*.html"
					]
				}
			},
			"json": {
				"src": ["./*.json"]
			},
			"js": {
				"src": [
					"Gulpfile.js",
					"./config/*.js",
					development + "app/**/*.js",
					"./server/**/*.js"
				]
			},
			"css": {
				"src": [
					development + "stylesheets/css/*.css"
				]
			}
		},
		"compile": {
			"less": {
				"src": development + "stylesheets/less/_consolidate.less",
				"dest": development + "stylesheets/css/"
			}
		},
		"build": {
			"browserify": {
				"src": development + "main.js",
				"dest": development + "tmp/"
			},
			"minify": {
				"html": {
					"src": development + "index.html",
					"dest": production + ""
				},
				"js": {
					"src": development + "tmp/main.js",
					"dest": production + ""
				},
				"css": {
					"src": development + "stylesheets/css/_consolidate.css",
					"dest": production + "stylesheets/css/"
				},
				"templates": {
					"src": development + "templates/**/*.html",
					"dest": production + "templates/"
				}
			},
			"copy": {
				"assets": {
					"src": development + "assets/**/*",
					"dest": production + ""
				},
				"bower": {
					"src": development + "bower_components/**/*",
					"dest": production + "bower_components/"
				}
			},
			"clean": {
				"tmp": development + "tmp/"
			}
		}
	};
})();