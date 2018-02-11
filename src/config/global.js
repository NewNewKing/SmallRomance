import resize from './resize'
import util from './util'

const width = 360;
const height = 600;

const config = (function(){

	return {
		// 整体宽高
		width: width,  //---不建议改动
		height: height, //---不建议改动
		//canvas
		canvases:['fall', 'bg', 'firework', 'dialogue'],
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

		// 阶段一
		dialogueOpt:{ 
			interval: 2000,  //两句话的间隔时间
			speed: 100,   //语速
			color1: '#ff00ff',
			font1: '14px Arial',
			color2: '#f97afb',
			color3: 'red',
			color4: '#ffff00',
			color5: '#00ff00',
			color6: '#0000ff',
			color7: '#fff',
		},
		dialogue:[
			{type:1, name:'马飞飞', txt:'同志们，正月十五晚上，我们怎么玩？'},
			{type:2, name:'软软', txt:'想怎么玩！就怎么玩！安排巴适！'},
			{type:3, name:'安安', txt:'真的？带我去喝茶！我要喝10个！'},
			{type:4, name:'轩轩', txt:'喝啥子茶哦，大家都拖家带口的。'},
			{type:5, name:'小勇、灿灿', txt:'就是，都带了家属的，还是炸金花算了。'},
			{type:6, name:'李湘江', txt:'还是放火炮嘛，好耍！'},
			{type:7, name:'王兴欣', txt:'就是，放火炮！走起！'},
		],
		// 阶段二
		sunset: 10000, 

	    // 阶段三
		fireworkInterval:[60, 240],// 烟花产生间隔 //---不建议改动
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
		fireWords:'正月里来|是新年呐啊|恭喜发财|红包拿来',
		// hue:210 lightness 0
		skyColor:'hsla({hue}, 60%, {lightness}%, 0.2)',	
		fireOpt: {
			wordInterval: 3000, //每段话出现的间隔时间
			denseTime: 10000
		},
	
		//阶段四
		titleWords:'新年快乐|万事如意|心想事成',
		titleOpt:{
			delay: 4000, //
			distance: 120, //行间距
			e: 5000 //速率
		},
		


		//字的参数
		shape:{ //---不建议改动
			mini: 1,   //组成字的粒子数  mini越大 粒子数越少
			gap: 4,   //粒子的间隔数 必须能被width整除
		},
		word:{  //---不建议改动
			size: 70,
			y: 120
		}, //---不建议改动

		
	}
})();

//ms => 帧
config.dialogueOpt.interval = util.transTime(config.dialogueOpt.interval, 120);
config.dialogueOpt.speed = util.transTime(config.dialogueOpt.speed, 18);

config.sunset = util.transTime(config.sunset, 600);

config.fireOpt.wordInterval = util.transTime(config.fireOpt.wordInterval, 180);
config.fireOpt.denseTime = util.transTime(config.fireOpt.denseTime, 600);

config.titleOpt.delay = util.transTime(config.titleOpt.delay, 240);
config.titleOpt.e = util.transTime(config.titleOpt.e, 240);

resize(config.width, config.height, config.canvases);

export default config