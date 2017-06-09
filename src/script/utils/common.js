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
