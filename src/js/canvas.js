
// 基础配置
import config from '../config/global'
import util from '../config/util'
// 飘落装饰
import Snowflake from './fall/snowflake'
import Heart from './fall/heart'

//烟花
import Firework from './fireworks/fireworks'
import ShapeMaker from './other/shape'

//最后
import TitleParticle from './TitleParticle'
class Canvas {
  constructor(imgs){
    this.imgs = imgs
    //初始化属性
    this.initProperty();

    this.initAudio();

    this.init()
  }
  initAudio(){
    const audio = new Audio();
    audio.src = require('../audio/1.mp3');
    audio.loop = true;
    audio.play();
    audio.volume = 0.5;
    const music = document.querySelector('#music');

    music.onclick = function(){
      const cla =  this.getAttribute('class');
      if(cla == 'on'){
        this.setAttribute('class', 'off');
        audio.pause();
      }else{
        this.setAttribute('class', 'on');
        audio.play();
      }
    }
  }
  //创建本例属性
  initProperty(){
    //画布宽高
    this.height = config.height;
    this.width = config.width;

    //获取画笔
    //fall、bg、fireworks、mb
    config.canvases.forEach(canvasId => {
      this[canvasId + 'Ctx'] = document.querySelector(`#${canvasId}`).getContext('2d');
    });		

    /*********通用*********/
    // 飘落微粒
    this.fallDots = [];
    // 飘落的类型('snow', 'heart', 'mix')
    this.fallType = config.fallType,
    //动画的时间
    this.time = 0;
    //当前执行的状态
    this.status = config.step;

    /*********阶段一（对话）*********/
    // 对话的参数
    this.dialogueOpt = util.extend({}, config.dialogueOpt);
    // 话的文字
    this.dialogue = config.dialogue.shift();

    /*********阶段二（天黑）*********/
    this.sunsetTime = config.sunset;

    /*********阶段三（烟花）*********/
    //天空颜色
    this.skyColor = {
      hue: 210,
      lightness: 0
    };
    //烟花的数组
    this.fireworks = [];
    this.fireworkTime = util.random(...config.fireworkInterval) | 0;

    this.fireWords = config.fireWords.split('|');
    this.fireOpt = util.extend({
      end: false,
      time: 600,
      showWords: false,
    }, config.fireOpt);

    /*********阶段四（点题）*********/
    this.titleOpt = {
      current: -1,
      start: false,
      ctx:[],
      end: false
    };
    //大标题
    this.titleWords = config.titleWords.split('|');
    //组成字的微粒数组
    this.titleDots = [];				
  }
  go(currentStatus){
    switch (currentStatus){
      case 1:
        this.dialogueOpt = null;
        this.dialogue = null;
        this.dialogueCtx.clearRect(0, 0, config.width, config.height);
        ++this.status;
      break;
      case 2: 
        this.sunsetTime = null;
        ++this.status;
      break;
      case 3: 
        this.fireOpt = null;
        this.fireWords = null;
        config.word.y = 0;
        config.shape.gap = config.titleOpt.gap;
        config.word.size = config.titleOpt.size;
        ++this.status; 
      break;
      case 4: 
        this.titleOpt = null;
        this.titleWords = null;
        this.titleDots = null;
        ++this.status;
      break;
    }
  }
  init(){
    //画背景图
    this.drawBg(this.bgCtx, this.imgs.bg);

    //文字形状maker
    this.shapeMaker = new ShapeMaker(this.width, this.height);

    //测试代码块
    this.test();

    // 循环体
    this.loop();

  }

  test(){

  }		

  testLoop(){

  }
  //动画效果
  loop(){
    //下一帧继续调用loop;
    requestAnimationFrame(this.loop.bind(this));
    // console.time('label');
    
    // 动画的时间
    ++this.time >= 60000 ? 0 : this.time;
    
    // 渲染飘落装饰
    this.renderFall();	

    switch(this.status){
      case 1:  //对话阶段
        this.renderDialogue();
      break;
      case 2: //天黑过程
        this.sunset();
      break;
      case 3: // 放烟花
        this.controlFire();
        this.renderFireworks();
      break;
      case 4:
        this.renderTitle();
        this.renderFireworks();
      break;
      case 5:
        this.end();
        this.renderFireworks();
      break;
    }

    this.testLoop();
    // console.timeEnd('label');

    
  }
  //飘落的装饰
  renderFall(){
    this.fallCtx.clearRect(0,0,this.width,this.height);
    // 控制飘落装饰类型
    switch(this.fallType){
      case 'snow': this.time % config.snowInterval == 0 && this.fallDots.push(new Snowflake(config.snow));
      break;
      case 'heart': this.time % config.heartInterval == 0 && this.fallDots.push(new Heart(config.heart));
      break;
      case 'mix': 

      this.time % config.snowInterval == 0 && this.fallDots.push(new Snowflake(config.snow));
      this.time % config.heartInterval == 0 && this.fallDots.push(new Heart(config.heart));
      break;
    }
    // 雪花飘落
    for(let i = this.fallDots.length - 1; i >= 0; --i){
      !this.fallDots[i].render(this.fallCtx) && this.fallDots.splice(i,1);
    }
  }

  // 渲染对话
  renderDialogue(){
    const ctx = this.dialogueCtx;
    ctx.clearRect(0, 0, config.width, config.height);

    ctx.fillStyle = this.dialogueOpt['color' + this.dialogue.type] || this.dialogueOpt.color1;
    ctx.font = this.dialogueOpt['font' + this.dialogue.type] || this.dialogueOpt.font1;

    //说话
    this.dialogue.current = this.dialogue.current || 0;
    if(--this.dialogueOpt.speed <= 0){
      this.dialogueOpt.speed = config.dialogueOpt.speed;
      ++this.dialogue.current;
    }
    
    ctx.fillText(`${this.dialogue.name}：${this.dialogue.txt.slice(0, this.dialogue.current)}`, 20, 30);

    //下一段话
    if(this.dialogue.current >= this.dialogue.txt.length && --this.dialogueOpt.interval <= 0){
      if(config.dialogue.length == 0){
        return this.go(1);
      }  
      this.dialogue = config.dialogue.shift();
      this.dialogueOpt.interval = config.dialogueOpt.interval;
    }

  }
  // 天黑
  sunset(){
    if(--this.sunsetTime <= 0){
      return this.go(2);
    }
    this.fireworkCtx.fillStyle = `hsla(210, 60%, 5%, ${0.01 * (20 - 20 * (this.sunsetTime / config.sunset) )})`;
    this.fireworkCtx.fillRect(0, 0, config.width, config.height);
  }
  
  //控制烟花的逻辑
  controlFire(){
    --this.fireOpt.time;
    if(this.fireOpt.time == 0){
      this.createDenseFire();
    }
    if(this.fireOpt.time <= -180){
      !this.fireOpt.end && this.showFireworkWords();
      
    }
    if(this.fireOpt.time == -60){
      this.fireOpt.end && this.fireworks.push(new Firework({
        x: config.width / 2,
        yEnd: config.height / 8,
        count: 600,
        radius: 5
      }));
    }
    if(this.fireOpt.time == -360){
      this.fireOpt.end && this.go(3);
    }

  }
  //放文字烟花
  showFireworkWords(){
    if(this.fireWords.length == 0){
      this.fireOpt.end = true;
      this.fireOpt.time = 180;
      return ;
    }
    if(--this.fireOpt.wordInterval <= 0){
      // 第二个参数控制是否产生烟花
      this.getDotsPostion(this.fireWords.shift(), true);
      this.fireOpt.wordInterval = config.fireOpt.wordInterval;
    }
  }
  //创建密集的烟花
  createDenseFire(){
    for(let i = 0; i < 10; i++){
      setTimeout(() => {
        this.fireworks.push(new Firework(config.fireworks));
      }, i * 100);
    }
  }
  //渲染烟花
  renderFireworks(){
    this.fireworkCtx.fillStyle = config.skyColor.replace('{lightness}', 5 + this.skyColor.lightness * 15).replace('{hue}' , this.skyColor.hue);
    this.fireworkCtx.fillRect(0,0,this.width,this.height);	
    //随机创建烟花
    this.createFireworks();

    this.skyColor = {
      lightness: 0,
      hue: 210
    };
    for(let i = this.fireworks.length - 1; i >= 0; --i){
      this.skyColor = this.skyColor.lightness >= this.fireworks[i].getSkyColor().lightness ? this.skyColor : this.fireworks[i].getSkyColor();
      !this.fireworks[i].render(this.fireworkCtx) && this.fireworks.splice(i,1);	
    }
  }

  // 随机创建烟花
  createFireworks(){
    if(--this.fireworkTime <= 0){
      this.fireworks.push(new Firework(config.fireworks));
      this.fireworkTime = util.random(...config.fireworkInterval) | 0;
    }
  }

  // 渲染最后 文字的动作
  renderTitle(){
    this.createCanvas();
    this.createTitleDots();
    if(!this.titleOpt) return ;
    const ctx = this.titleOpt.ctx[this.titleOpt.current];
    ctx.clearRect(0,0,this.width,this.height);
    for(let i in this.titleDots){
      this.titleDots[i].render(ctx);
    }	
    if(--this.titleOpt.time <= 0){
      this.titleOpt.start = false;
    }
  }
  createCanvas(){
    if(this.titleOpt.start) return;	
    ++this.titleOpt.current;
    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'title');
    canvas.id = this.titleOpt.current;
    canvas.setAttribute('width', config.width);
    canvas.setAttribute('height', config.height);
    document.body.appendChild(canvas);
    this.titleOpt.ctx.push(canvas.getContext('2d'));
  }
  createTitleDots(){
    if(this.titleOpt.start) return;
    if(this.titleWords.length == 0){
      return this.go(4);
    } 
    this.titleDots = [];
    this.titleOpt.start = true;
    this.titleOpt.time = config.titleOpt.e + config.titleOpt.delay;
    config.titleOpt.y += config.titleOpt.distance;

    const dots = this.getDotsPostion(this.titleWords.shift());
    dots.forEach(dot => {
      const option = {
        color: config.titleOpt.color,
        x: dot.x,
        y: dot.y,
        xStart: util.random(0, config.width),
        yStart: util.random(-100, 0),
        size: config.titleOpt.pSize,
        e: config.titleOpt.e
      }
      this.titleDots.push(new TitleParticle(option));
    });
    this.fallType = 'mix';
  }

  end(){
    this.fallType = 'mix';
    this.time % 600 == 0 && this.createDenseFire();
  }

  //获取所有的dots集合。
  getDotsPostion(wordsArr, showFireworks){
    let words = typeof wordsArr == 'string' ? wordsArr.split('') : wordsArr.shift().split('');
    words = words.filter(item => item !== '\b')
    const length = words.length;
    const size = config.word.size;
    const y = this.status == 3 ? config.word.y : config.titleOpt.y;
    const dotsArr = [];

    words.forEach((item,index)=> {
      let x;
      //文字居中
      length % 2 == 0 ? x = config.width / 2 + (index - length / 2) * size + 1 / 2 * size : x = config.width / 2 + (index - Math.floor(length / 2)) * size;
      this.shapeMaker.write({txt:item, x, y, size});
      const dots = this.shapeMaker.getDots(config.shape);
      dotsArr.push(...dots);

      const prtOption = {};
      showFireworks && this.fireworks.push(new Firework({wait:30, radius:2, x, yEnd: y, dots, prtOption}));
    });

    return dotsArr;
  }
  
  //画背景
  drawBg(ctx,img){
    const { width, height } = img;
    const ratio = width / height,
      wRa = this.width / this.height;

    let sx,sy,sw,sh;
    if (ratio >= wRa) {
      // 背景图宽了 裁剪宽度
      sy = 0, sh = height;
      sx = (ratio - wRa) * width / 2
      sw = height * wRa
    }else if (ratio < wRa) {
      // 背景图窄了
      sx = 0, sw = width;
      sy = (height - width / wRa) / 2;
      sh = width / wRa;
    }

    ctx.drawImage(img,sx, sy, sw, sh, 0,0,this.width,this.height);
  }
  
}

export default Canvas