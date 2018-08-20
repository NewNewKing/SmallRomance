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
  isPhone() {
    if(/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)){
      return true
    }
    return false
  },

	//ms => 帧
	transTime(time, defult){
		return +time / 1000 * 60 | 0 || defult;
	}
}

export default util