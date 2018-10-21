const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dev = process.env.NODE_ENV === 'dev';

const config = {
	entry: './src/App.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		proxy: [
			{
				target: 'http://localhost:5000'
			}
		]
	}
};

!dev && config.plugins.push(new UglifyJsPlugin({ sourceMap: true }));

module.exports = config;
