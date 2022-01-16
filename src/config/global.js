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
    // type: 7 就是使用 color7与font7 因为没有font7 所以则会使用font1
    // 最后的样式就是color7与font1
		dialogue:[
			{type:7, name:'小孩A', txt:'程二狗，快出来放炮了'},
			{type:7, name:'小孩A', txt:'我今天买了很多擦炮'},
			{type:6, name:'小孩B', txt:'走走走，我也买了很多'},
			{type:6, name:'小孩B', txt:'我偷了我的压岁钱，买了很多窜天猴'},
			{type:6, name:'小孩B', txt:'我们去炸隔壁何小花'},
			{type:6, name:'小孩B', txt:'她老是揍我！'},
			{type:7, name:'小孩A', txt:'还是别了，我可打不过她'},
			{type:7, name:'小孩A', txt:'你快出来呀'},
			{type:7, name:'小孩A', txt:'听说王兴欣在掘金搞了一场烟花秀'},
			{type:7, name:'小孩A', txt:'再不快点就没好位置了'},
			{type:7, name:'小孩A', txt:'咦，你看'}
		],
		// 阶段二
		sunset: 6000,   // 天黑时间

    // 阶段三
    fireworkInterval:[1000, 4000],// 烟花产生间隔 每隔1-4s就会随机产生一个烟花
    //烟花的属性
    fireworks:{ 
      // x、y是出生时坐标 不用改动
      x: undefined, 
      y: height,
      // end是爆炸地点的坐标 不用改动
      xEnd: undefined,
      yEnd: undefined,
      // size是烟花升空时看到的小点点的大小 不用改动
      size: 2,
      // 烟花升空的速度
      velocity: 3,
      // 烟花的透明度
      opacity: 0.8,
      // 烟花半径大小的范围  最终的结果需要 半径
      radius: [1, 2],
      // 炸裂后粒子数范围 粒子数越多烟花越好看 但是可能会造成卡顿 
      count: [150,250],
      //消失后 => 炸裂  等待时间
      wait: undefined, 
      //烟花颜色 未指定颜色则是随机的颜色
      color: undefined,  
    },
    // '|' 为分隔符 
    fireWords:'祝大家|新的一年|生意兴隆|财源滚滚|万事如意|步步高升|福寿安康|笑口常开|最重要的是|没有BUG', 
    fireOpt: {
      //每段话出现的间隔时间
      wordInterval: 2000, 
    },
    //烟花字的参数
    word:{  
      // 粒子的间隔数 gap越大 粒子数越少
      gap: 3,   
      // 文字的大小
      size: 70,
      // 展示的位置 0表示最顶部
      y: height / 4
    }, 
		// hue:210 lightness 0
		skyColor:'hsla({hue}, 60%, {lightness}%, 0.2)',	

		//阶段四
		titleWords: '天天开心|最为重要|祝大家|虎年大吉', // '|' 为分隔符
    titleOpt:{
      // 第一排的字距离顶部的距离
      y: 20,
      // 粒子的间隔数 gap越大 粒子数越少
      gap: 3,
      // 字的大小
      size: 60,
      // 小爱心的大小
      pSize: 6,
      // 小爱心的颜色 不指定的话就都是随机的
      //color: 'rgb(180,4,4)',// 可以缺省
      // 每段文字出现的间隔时间
      delay: 3000,
      // 每段文字的间距
      distance: 100, //行间距
      // 小爱心出现 => 指定位置的时间 
      // 数字越小形成文字越快
      e: 2000
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