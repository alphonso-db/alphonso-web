'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './src/alphonso.ts',

  output: {
    path: './dist/',
    filename: 'alphonso.min.js'
  },

	/**
	 * Enable  Enable sourcemaps for debugging webpack's output
	 */
  devtool: "source-map",

	resolve: {
    extensions: ['', '.webpack.js', '.ts', '.tsx', '.js']
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],

  module: {
    loaders: [{
      test: /\.tsx?$/,
			loader: 'ts-loader'
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/i,
      loader: 'file'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file'
    }],
		preLoaders: [{
			test: /\.js$/,
			loader: 'source-map-loader'
		}]
  },

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	}
};

module.exports = config;
