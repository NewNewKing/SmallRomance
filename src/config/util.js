const util = {
	random(min = 0, max){
		return min + (max - min) * Math.random();
	},
	extend(origin){
		return origin;
	}
}

export default util