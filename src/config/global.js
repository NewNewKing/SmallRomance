import resize from './resize'

const width = 360;
const height = 667;

const config = (function(){

	return {
		// 整体宽高
		width: width,
		height: height,
		//canvas
		canvases:['fall', 'bg', 'firework', 'title'],
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
		fallType: 'snow',
		// 烟花间隔
		fireworkInterval:[60, 240],
		//烟花的属性
		fireworks:{
			x: undefined,
			y: height,
			xEnd: undefined,
			yEnd: undefined,
			size: 2,
			radius: 2,  //烟花半径
			velocity: 3,  //速率
			opacity: 0.8,
			count: 300,   //炸裂后粒子数
			wait: undefined,  //消失后 => 炸裂  等待时间
			color: undefined,  //烟花颜色
		},

		//字的参数
		shape:{
			mini: 1,   //组成字的粒子数  mini越大 粒子数越少
			gap: 4,   //粒子的间隔数 必须能被width整除
		},
		word:{
			size: 70,
			y: 120
		},
		wordDelay: 3000,  //字出现的延迟时间


		skyColor:'hsla({hue}, 60%, {lightness}%, 0.2)',	
	}
})();

resize(config.width, config.height, config.canvases);

export default config