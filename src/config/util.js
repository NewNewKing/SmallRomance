const util = {
	random(min = 0, max){
		return min + (max - min) * Math.random();
	},
	extend(origin, ...arg){
		arg.forEach(item => {
			for(let key in item){
				origin[key] = item[key];
			}
		});
		return origin;
	},

	//ms => 帧
	transTime(time, defult){
		return +time / 1000 * 60 | 0 || defult;
	}
}

export default util