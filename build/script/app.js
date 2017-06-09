/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(2)



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3)
	var footerTpl = __webpack_require__(4)
	var indexTpl = __webpack_require__(5)


	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(indexTpl) //对象
	commonUtil.render(document.getElementById('header'), headerTpl) //对象中的id中插入内容
	commonUtil.render(document.getElementById('footer'), footerTpl) //对象中的id中插入内容


	//利用ajax获取数据
	//https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
	//假数据mock
	$.ajax({
	        url: './mock/listmore.json',
	        success: function(res) {
	            var str = '';
	            var dataSource=res.content.data.page.result;
	            for(var i=0;i<dataSource.length;i++){
	            	str +='<li>\
					<div><img src="//www.lgstatic.com/'+dataSource[i].companyLogo+'" /></div>\
					<div>\
						<h2>'+dataSource[i].companyName+'</h2>\
						<p>'+dataSource[i].positionName+'</p>\
						<span>'+dataSource[i].createTime+'0</span>\
					</div>\
					<div>'+dataSource[i].salary+'</div>\
				</li>';
	            }
	            $('.m-index section ul').html(str)
	  			
	                  //console.log(str);
	        }
	    })



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<header>拉勾网</header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<footer><ul><li class=\"active yo-ico \">&#xe647;职位</li><li class=\"yo-ico\">&#xe86e;搜索</li><li class=\"yo-ico\">&#xe86f;我的</li></ul></footer>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">	<div id=\"header\"></div>	<section>		<nav>			<h1>10秒钟定制开发</h1>			<div>去登陆</div>		</nav>		<ul>			<li>				<div><img src=\"//www.lgstatic.com/i/image/M00/4F/6F/Cgp3O1exH5WAKObrAAAOdIf4UX8242.png\" /></div>				<div>					<h2>捷库</h2>					<p>高级工程师zh>高级工程师zh</p>					<span>今天 10:00</span>				</div>				<div>10k-30k</div>			</li>		</ul>	</section>	<div id=\"footer\"></div></div><script>console.log(8)</script>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	//单例模式,公共工具
	var common = {//封装
	  renderBody:function(tpl){//tpl模板，方法 ，render翻译提供
	    var body = document.body;
	    body.innerHTML=tpl+body.innerHTML;
	  },
	  render: function(obj,tpl){//第一个参数：对象，在那个对象上用
	    obj.innerHTML = tpl

	  }
	}
	module.exports = common



/***/ })
/******/ ]);