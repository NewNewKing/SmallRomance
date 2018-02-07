import resize from './resize'

const width = 375;
const height = 667;

const config = (function(){

	return {
		// 整体宽高
		width: width,
		height: height,
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
		//烟花的属性
		fireworks:{
			x: undefined,
			y: height,
			xEnd: undefined,
			yEnd: undefined,
			size: 2,
			radius: 1.7,  //烟花半径
			velocity: 3,  //速率
			opacity: 0.8,
			count: 300,   //炸裂后粒子数
			wait: undefined,  //消失后 => 炸裂  等待时间
			color: undefined,  //烟花颜色
		},


		skyColor:'hsla(210, 60%, {skyColor}, 0.2)',	
	}
})();

resize(config.width, config.height, config.canvases);

export default config