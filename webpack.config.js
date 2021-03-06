const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build/',
		filename: 'project.bundle.js'
	},
	module: {
		rules: [
			{
				test: [ /\.vert$/, /\.frag$/ ],
				use: 'raw-loader'
			},
			{
				test: /\.js/,
				use: {
						loader: "babel-loader",
						options: {
								presets: ["@babel/preset-env"]
						}
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
				'CANVAS_RENDERER': JSON.stringify(true),
				'WEBGL_RENDERER': JSON.stringify(true)
		})
	],
	resolve: {
		extensions: ['.js', '.json']
	}
};
