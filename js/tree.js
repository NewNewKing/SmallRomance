/**
 *  create by miaoyu  2017/10/22 
 */
const tree = (function(){


	//
	const MAX_FLOWER_AGE = 50;
	//
	const MAX_GROWTH_TICKS = 15;
	// 树枝颜色
	const BRANCH_COLOR = "rgb(101, 67, 33)";
	// 树枝分叉层数
	const MAX_BRANCHING = 8;
	// 树干初始宽度
	const TRUNK_WIDTH = 12;
	// 递减因子
	const BRANCH_SHRINKAGE = 0.8;
	// 树杈分开度因子
	const MAX_ANGLE_DELTA = Math.PI / 2;
	// 动画延迟
	const DELAY = 0;

	const canvas = document.getElementById("title");
	// canvas高度
	const CANVAS_HEIGHT = canvas.height;
	// canvas宽度
	const CANVAS_WIDTH = canvas.width;

	// save random to cache
	const cacheRandom = [];

	let ctx;


	const renderBranch = ({ x1, y1, x2, y2, branchWidth }) => {
		ctx.beginPath();
		ctx.lineWidth = branchWidth;
		ctx.strokeStyle="rgb(101, 67, 33)";
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
	};

	const growBranch = ({ x1, y1, length, angle, depth, branchWidth }) => {

		const x2 = x1 + length * Math.cos(angle);
		const y2 = y1 + length * Math.sin(angle);
		renderBranch({ x1, y1, x2, y2, branchWidth });

		const newDepth = depth - 1;
		if (newDepth == 0) {
			return
		}

		// 生成分叉
		const newBranchWidth = branchWidth * BRANCH_SHRINKAGE;

		// Promise.all(
			[1,-1].map(direction => {

				// save to cahce
				const toObject = a => (a ? a : {});
				cacheRandom[newDepth] = toObject(cacheRandom[newDepth])
				cacheRandom[newDepth][direction] = cacheRandom[newDepth][direction] ? cacheRandom[newDepth][direction] : {"0":Math.random(), "1":Math.random()}

				const newAngle = angle + MAX_ANGLE_DELTA * (cacheRandom[newDepth][direction][0] * 0.5 * direction);
				const newLength = length * (BRANCH_SHRINKAGE + cacheRandom[newDepth][direction][1]* (1.0 - BRANCH_SHRINKAGE));

				growBranch({ 
					x1: x2, 
					y1: y2, 
					length: newLength,
					angle: newAngle, 
					depth: newDepth, 
					branchWidth:newBranchWidth 
				})

				// return new Promise((resolve, reject) => {
				// 	setTimeout(function() {
				// 		resolve(
				// 			growBranch({ 
				// 				x1: x2, 
				// 				y1: y2, 
				// 				length: newLength,
				// 				angle: newAngle, 
				// 				depth: newDepth, 
				// 				branchWidth:newBranchWidth 
				// 			})
				// 		)
				// 	},DELAY)
				// })
				
			})
		// ).then(() => {console.log('done')})

		
	}

	const growTree = () => {
		return growBranch({
			// 树的出生位置
			x1: Math.floor(CANVAS_WIDTH / 2),
			y1: Math.floor(CANVAS_HEIGHT / 1.02),
			length: 60,
			depth: MAX_BRANCHING,
			angle: -Math.PI / 2,
			branchWidth: TRUNK_WIDTH
		});
	}

	return {
		render(drawPen){

			ctx = drawPen
			growTree()
			console.log(cacheRandom)
		}
	}
})()


export default tree
