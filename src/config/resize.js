import util from './util'

function resize(width, height , canvases){
	if (util.isPhone) {
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