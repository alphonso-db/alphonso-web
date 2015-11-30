(function() {
	'use strict';

	/**
	 * Require 3rd party `npm`.
	 */
	var gulp = require('gulp'),
		gutil = require('gulp-util'),
		htmlhint = require('gulp-htmlhint'),
		jscs = require('gulp-jscs'),
		eslint = require('gulp-eslint'),
		jsonlint = require("gulp-jsonlint"),
		csslint = require('gulp-csslint'),
		less = require('gulp-less'),
		htmlmin = require('gulp-htmlmin'),
		minifyCss = require('gulp-minify-css'),
		uglifyjs = require('gulp-uglify'),
		clean = require('gulp-clean'),
		watch = require('gulp-watch'),
		browserify = require('browserify'),
		reactify = require('reactify'),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer');

	/**
	 * Require built-in `configure files`.
	 */
	var SERVE_RULES = require('./configs/serve.rules'),
		SERVE_FILES = require('./configs/serve.files');

	/**
	 * Setup htmlhint task.
	 */
	gulp.task('htmlhint', function() {
		return gulp.src(SERVE_FILES.lint.html.gateway.src)
			.pipe(htmlhint(SERVE_RULES.lint.rules.html.gateway))
			.pipe(htmlhint.reporter())
			.on('error', gutil.log);
	});

	/**
	 * Setup htmlhint for partial templates task.
	 */
	gulp.task('templateshint', function() {
		return gulp.src(SERVE_FILES.lint.html.templates.src)
			.pipe(htmlhint(SERVE_RULES.lint.rules.html.templates))
			.pipe(htmlhint.reporter())
			.on('error', gutil.log);
	});

	/**
	 * Setup jsonlint task.
	 */
	gulp.task('jsonlint', function() {
		return gulp.src(SERVE_FILES.lint.json.src)
			.pipe(jsonlint())
			.pipe(jsonlint.reporter())
			.on('error', gutil.log);
	});

	/**
	 * Setup eslint task.
	 */
	gulp.task('eslint', function() {
		return gulp.src(SERVE_FILES.lint.js.src)
			.pipe(eslint(SERVE_RULES.lint.rules.js))
			.pipe(eslint.format())
			.on('error', gutil.log);
	});

	/**
	 * Setup jscs task.
	 */
	gulp.task('jscs', function() {
		return gulp.src(SERVE_FILES.lint.js.src)
			.pipe(jscs(SERVE_RULES.lint.rules.jscs));
	});

	/**
	 * Setup less compilation task.
	 */
	gulp.task('less', function() {
		return gulp.src(SERVE_FILES.compile.less.src)
			.pipe(less())
			.on('error', gutil.log)
			.pipe(gulp.dest(SERVE_FILES.compile.less.dest));
	});

	/**
	 * Setup browserify task.
	 */
	gulp.task('browserify', function() {
		return browserify(SERVE_FILES.build.browserify.src)
			.transform(reactify)
			.bundle()
			.pipe(source('main.js'))
			.pipe(buffer())
			.on('error', gutil.log)
			.pipe(gulp.dest(SERVE_FILES.build.browserify.dest));
	});

	/**
	 * Setup HTML minification task.
	 */
	gulp.task('htmlmin', ['cleanProd'], function() {
		return gulp.src(SERVE_FILES.build.minify.html.src)
			.pipe(htmlmin(SERVE_RULES.build.rules.html))
			.pipe(gulp.dest(SERVE_FILES.build.minify.html.dest));
	});

	/**
	 * Setup HTML Templates minification task.
	 */
	gulp.task('templatesmin', ['cleanProd'], function() {
		return gulp.src(SERVE_FILES.build.minify.templates.src)
			.pipe(htmlmin(SERVE_RULES.build.rules.html))
			.pipe(gulp.dest(SERVE_FILES.build.minify.templates.dest));
	});

	/**
	 * Setup CSSLint task.
	 */
	gulp.task('csslint', function() {
		return gulp.src(SERVE_FILES.lint.css.src)
			.pipe(csslint(SERVE_RULES.build.rules.css))
			.pipe(csslint.reporter());
	});

	/**
	 * Setup CSS minification task.
	 */
	gulp.task('minifycss', ['less'], function() {
		return gulp.src(SERVE_FILES.build.minify.css.src)
			.pipe(minifyCss())
			.pipe(gulp.dest(SERVE_FILES.build.minify.css.dest));
	});

	/**
	 * Setup JS minification task.
	 */
	gulp.task('uglifyjs', ['cleanProd', 'browserify'], function() {
		return gulp.src(SERVE_FILES.build.minify.js.src)
			.pipe(uglifyjs())
			.pipe(gulp.dest(SERVE_FILES.build.minify.js.dest));
	});

	/**
	 * Setup Copy assets task.
	 */
	gulp.task('copyassets', ['cleanProd'], function() {
		return gulp.src(SERVE_FILES.build.copy.assets.src)
			.pipe(gulp.dest(SERVE_FILES.build.copy.assets.dest));
	});

	/**
	 * Setup Copy bower_components task.
	 */
	gulp.task('copybower', ['cleanProd'], function() {
		return gulp.src(SERVE_FILES.build.copy.bower.src)
			.pipe(gulp.dest(SERVE_FILES.build.copy.bower.dest));
	});

	/**
	 * Setup clean tmp dir task.
	 */
	gulp.task('cleantmp', ['uglifyjs'], function() {
		return gulp.src(SERVE_FILES.build.clean.tmp)
			.pipe(clean());
	});

	/**
	 * Setup clean css dir task.
	 */
	gulp.task('cleanCSS', ['less', 'csslint', 'uglifyjs'], function() {
		return gulp.src(SERVE_FILES.build.clean.css)
			.pipe(clean());
	});

	/**
	 * Setup clean prod dir task.
	 */
	gulp.task('cleanProd', function() {
		return gulp.src(SERVE_FILES.build.clean.prod)
			.pipe(clean());
	});

	/**
	 * Setup watch task.
	 */
	gulp.task('watch', function() {
		gulp.watch(SERVE_FILES.build.browserify.src, ['build']);
	});

	/**
	 * Define `default` task
	 * 1. Linting of html, templates, json, js, css.
	 * 2. Compilation of less files.
	 */
	gulp.task('default', ['htmlhint', 'templateshint', 'jsonlint', 'eslint', 'jscs', 'cleanCSS', 'less', 'csslint']);

	/**
	 * Define `build` task
	 * 1. Default.
	 * 2. Minification, optimization & build creation.
	 */
	gulp.task('build', ['cleanProd', 'htmlmin', 'templatesmin', 'cleanCSS', 'less', 'minifycss', 'copyassets', 'copybower', 'browserify', 'uglifyjs', 'cleantmp']);

	/**
	 * Define `linthtml` task
	 */
	gulp.task('linthtml', ['htmlhint', 'templateshint']);

	/**
	 * Define `lintjs` tasks
	 */
	gulp.task('lintjs', ['jsonlint', 'eslint', 'jscs']);

})();