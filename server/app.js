'use strict';

var http = require('http');
var path = require('path');

var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var staticServe = require('koa-static');

var CONFIG = require('../configs/stack.conf');
var app = koa();

app.use(bodyParser());
app.use(logger());

app.use(staticServe(path.join(__dirname, CONFIG.stack.client)));

module.exports = app;