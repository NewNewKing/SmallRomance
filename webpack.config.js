const webpack = require('webpack');


module.exports = {
	entry:'./js/index.js',
	watch:true,
	output:{
		path:__dirname + '/dist/',
		filename:'[name].js'
	},
	resolve:{
		extensions: ['.js']
	}
}