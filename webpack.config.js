const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
		host:'0.0.0.0'
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
			},
			{
				test:/\.mp3(\?.*)?$/,
				loader:'file-loader',
				options:{
					namel:'audio/[name].[ext]'
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
		}),
		new CleanWebpackPlugin(['dist'])
	]
}