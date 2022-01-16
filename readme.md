# SmallRomance


**要是觉得这个项目还不错，别忘记star哦**


### 快速预览

[土味情话]](https://newnewking.github.io/SmallRomance/)

[虎年春节]](https://newnewking.github.io/2022chunjie/)


### 开发者调试

本项目是基于nodejs，所以必须要先安装nodeJs [nodeJs官网](https://nodejs.org/en/)

然后命令行里进入到项目目录下，先输入：

```
npm install
```

安装好之后，调试预览。  输入：
```
npm run dev
```

应该会自动弹出网页，如果没有，就手动在浏览器输入`localhost:8888`

此时可以修改文件并预览效果


打包
```
npm run build
```

此时会生成一个dist文件夹，里面则是打包后的文件。

若还有问题的童鞋，可以在issue里面留言。

### 改动配置
大部分的参数配置都在`src/config/global.js`里面

只需改动参数就可开箱即用。

参数说明相见global.js注释

### 效果初级教程

[烟花效果](https://github.com/NewNewKing/SmallRomance/issues/2);

[文字粒子效果](https://github.com/NewNewKing/SmallRomance/issues/3);


### 参考项目

**在canvas中使用粒子组成文字**

偶然发现的github上的一个项目 --- **shape-shifter**

[https://github.com/kennethcachia/shape-shifter](https://github.com/kennethcachia/shape-shifter)

**烟花效果**

参考了[codepen.io](https://codepen.io/search/pens?q=fireworks&limit=all&type=type-pens)上的很多作品。

主要参考 --- **fireworks seen in the countryside**

[fireworks seen in the countryside](https://codepen.io/K-T/pen/NjyNQy?q=fireworks&limit=all&type=type-pens)

---
**licensed under MIT LISENCE**