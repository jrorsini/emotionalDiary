const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dev = process.env.NODE_ENV === 'dev';

const config = {
	entry: './src/index.js',
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
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					plugins: ['react-hot-loader/babel']
				}
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [],
	devServer: {
		proxy: [
			{
				context: ['/update_emotions/**', '/emotions/**'],
				target: 'http://localhost:5000'
			}
		],
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, 'dist'),
		port: 3000
	}
};

!dev && config.plugins.push(new UglifyJsPlugin({ sourceMap: true }));

module.exports = config;
