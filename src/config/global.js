import resize from './resize'
import util from './util'

const width = util.isPhone() ? document.body.clientWidth : 375;
const height = util.isPhone() ? document.body.clientHeight : 667;


//与时间有关的设置均为毫秒数，本文件底部会自动转化为帧数。
// 大多属性都设有默认值，都可以不用修改   一般只需要修改中文文字
// 所有的文字暂时都不支持换行，字数多的请自行分为多段话。

const config = (function(){

	return {
		// 整体宽高
		width: width,  //---不建议改动
		height: height, //---不建议改动
		//canvas
		canvases:['fall', 'bg', 'firework', 'dialogue'],//---不建议改动
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

		// 从阶段几开始 1、对话 2、天黑 3、烟花 4、展示文字
		step: 1,
		// 阶段一
		dialogueOpt:{ 
			interval: 1500,  //两句话的间隔时间
			speed: 100,   //语速
			color1: '#ff00ff',
			font1: '14px Arial',
			color2: '#f97afb',
			color3: 'red',
			color4: '#f8e71c',
			color5: '#00ff00',
			color6: '#00ffff',
			color7: '#fff',
		},
		// type对应上面的color与font  若没有对应的 则默认为color1或font1
		dialogue:[
			{type:7, name:'小孩A', txt:'程二狗，快出来放炮了'},
			{type:7, name:'小孩A', txt:'我今天买了很多擦炮'},
			{type:6, name:'小孩B', txt:'走走走，我也买了很多'},
			{type:6, name:'小孩B', txt:'我偷了我的压岁钱，买了很多窜天猴'},
			{type:6, name:'小孩B', txt:'我们去炸隔壁何小花'},
			{type:6, name:'小孩B', txt:'她老是揍我！'},
			{type:7, name:'小孩A', txt:'还是别了，我可打不过她'},
			{type:7, name:'小孩A', txt:'你快出来呀，马上掘金烟花秀就要开始了'},
			{type:7, name:'小孩A', txt:'再不快点就没好位置了'},
			{type:7, name:'小孩A', txt:'咦，你看'}
		],
		// 阶段二
		sunset: 6000,   // 天黑时间

	    // 阶段三
		fireworkInterval:[1000, 4000],// 烟花产生间隔 //---不建议改动
		//烟花的属性
		fireworks:{ 
			x: undefined,
			y: height,
			xEnd: undefined,
			yEnd: undefined,
			size: 2,
			radius: [1, 2],  //烟花半径
			velocity: 3,  //速率
			opacity: 0.8,
			count: [150,250],   //炸裂后粒子数
			wait: undefined,  //消失后 => 炸裂  等待时间
			color: undefined,  //烟花颜色
		},
		fireWords:'祝大家|新的一年|生意兴隆|财源滚滚|万事如意|步步高升|福寿安康|笑口常开|最重要的是|没有BUG',  // '|' 为分隔符
		// hue:210 lightness 0
		skyColor:'hsla({hue}, 60%, {lightness}%, 0.2)',	
		fireOpt: {
			wordInterval: 2000, //每段话出现的间隔时间
		},
    //烟花字的参数
    word:{  
			gap: 3,   //粒子的间隔数 gap越大 粒子数越少
      size: 70,
      y: height / 4
    }, 

	
		//阶段四
		titleWords: '天天开心|最为重要|祝大家|虎年大吉', // '|' 为分隔符
		titleOpt:{
			y: 20,
			gap: 3,
			size: 60,  //最后字的大小
			pSize: 6,
			//color: 'rgb(180,4,4)',// 可以缺省
			delay: 3000, //
			distance: 100, //行间距
			e: 2000 //速率
		},
	}
})();

//ms => 帧
config.dialogueOpt.interval = util.transTime(config.dialogueOpt.interval, 120);
config.dialogueOpt.speed = util.transTime(config.dialogueOpt.speed, 18);

config.sunset = util.transTime(config.sunset, 600);

config.fireworkInterval[0] = util.transTime(config.fireworkInterval[0])
config.fireworkInterval[1] = util.transTime(config.fireworkInterval[1])

config.fireOpt.wordInterval = util.transTime(config.fireOpt.wordInterval, 180);
config.fireOpt.denseTime = util.transTime(config.fireOpt.denseTime, 600);

config.titleOpt.delay = util.transTime(config.titleOpt.delay, 240);
config.titleOpt.e = util.transTime(config.titleOpt.e, 240);

resize(config.width, config.height, config.canvases);

export default config