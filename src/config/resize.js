function resize(width, height , canvases){
	if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
		const body = document.querySelectorAll('body')[0];
		body.style.width = width + 'px';
		body.style.height = height + 'px';
	}

	canvases.forEach(canvasId => {
		const el = document.querySelector(`#${canvasId}`);
		el.setAttribute('width', width);
		el.setAttribute('height', height);
	});
}

export default resize