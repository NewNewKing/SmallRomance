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
	}
}

export default util