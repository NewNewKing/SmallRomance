const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'src/js/index.js'),
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/[name].js'
	},
	devServer:{
		contentBase:'./dist',
		port:8888,
		open:true,
		host:'127.0.0.1'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader'
			},
			{
				test:/\.(png|jpe?g|gif|svg)/,
				loader:'file-loader',
				options:{
					name:'img/[name].[ext]'
				}
			}
		]
	},
	resolve:{
		extensions: ['.js']
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'index.html',
			inject:true,
		})
	]
}