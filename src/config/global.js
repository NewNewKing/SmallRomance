const config = (function(){
	return {
		width:375,
		height:667,
		random({min = 0,max} = {}){
			return min + (max - min) * Math.random();
		},
		skyColor:'hsla(210, 60%, {skyColor}, 0.2)'
	}
})();

export default config