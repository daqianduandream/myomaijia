var headerTpl = require('../tpls/header.string')
var footerTpl = require('../tpls/footer.string')
var indexTpl = require('../tpls/index.string')


var commonUtil = require('../utils/common')

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
