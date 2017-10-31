const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'src/js/index.js'),
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/[name].js'
	},
	resolve:{
		extensions: ['.js']
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:true,
		})
	]
}