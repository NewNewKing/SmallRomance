const config = (function(){

	return {
		// 整体宽高
		width: 375,
		height: 667,
		//canvas
		canvases:['fall', 'bg', 'firework'],
		// 飘落微粒产生间隔
		snowInterval: 60,
		heartInterval: 15,
		// 飘落微粒属性
		snow:{
			x: undefined,
			y: undefined,
			minSize: 5,
			maxSize: 10,
			size: undefined,
			speed: 0.5,
			opacity: 0.8
		},
		heart:{
			x: undefined,
			y: undefined,
			minSize: 15,
			maxSize: 20,
			size: undefined,
			speed: 1,
		},
		// 飘落的类型('snow', 'heart', 'mix')
		fallType: 'mix',
		// 烟花间隔
		fireworkInterval:[30, 120],


		skyColor:'hsla(210, 60%, {skyColor}, 0.2)',


		
	}
})();

export default config