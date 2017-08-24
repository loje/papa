//使().resize可以监听几乎所有html标签，比如text、p、div、span等。
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this); 



//var lp = $("#leftexpand").width() / $("#leftcontent").width() / 2 *100;
//var rp = $("#rightexpand").width() / $("#rightcontent").width() / 2 *100

$("#leftexpand").width($("#leftcontent").width() / 2); //左边预设50%
$("#rightexpand").width($("#rightcontent").width() / 2); //右边预设50%


var lp = $("#leftexpand").width() / $("#leftcontent").width() * 100;
var rp = $("#rightexpand").width() / $("#rightcontent").width() * 100;

function get_news(data.agree){
	if(lp>0 & lp<100){
		lp = lp + 1;
		rp = rp - 1;
		$("#leftp").text(lp);
		$("#rightp").text(rp);
		$("#leftexpand").width($("#leftcontent").width()/100*lp);
		$("#rightexpand").width($("#rightcontent").width()/100*rp);
	}
};

function get_news(data.disagree){
	if(rp>0 & rp<100){
		lp = lp - 1;
		rp = rp + 1;
		$("#leftp").text(lp);
		$("#rightp").text(rp);
		$("#leftexpand").width($("#leftcontent").width()/100*lp);
		$("#rightexpand").width($("#rightcontent").width()/100*rp);
	}
});






//-------------------------------------test




// $("#leftexpand").resize(function(){
// 	$("#leftp").text($("#leftexpand").width() / $("#leftcontent").width() / 2 *100);
// })
// $("#rightexpand").resize(function(){
// 	$("#rightp").text($("#rightexpand").width() / $("#rightcontent").width() / 2 *100);
// })







