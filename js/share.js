/////step2 url/////
var shareDomains = ["chuheridangwu.sinaapp.com", "handihexiatu.sinaapp.com", "shuizhipanzhongcan.sinaapp.com", "lilijiexinkua.sinaapp.com", "bairiyishanjin.sinaapp.com", "huangheruhailiu.sinaapp.com","yuqiongqianlimu.sinaapp.com","gengshangyicenglou.sinaapp.com","ad201410310100.sinaapp.com"];
var shareDomain = this.shareDomains[parseInt(Math.random() * this.shareDomains.length)];
var tmpver = parseInt(Math.random() * 10) + 1;
dataForWeixin.url = "http://"+tmpver+"."+shareDomain+"/test/"+spid+"/?uuid="+ID;
//dataForWeixin.url = "http://106.186.124.50/"+ID+"/test/"+spid+"/";


/////step3 url/////
//var shortdata='type=jsonp&mode=0&long=http://wx.oslook.com/test/'+ spid + '/index.html?uuid='+ID;
//console.log(shortdata);
//$.ajax({  
// 	type : "get",
//	async:true, 	  
//    url:"http://tao.lc/api.php",  
//    dataType:'jsonp',  
//    data: shortdata,  
//    jsonp:'callback',  
//    success:function(data) {  
//		dataForWeixin.url=data.short; 
//    },  
//    timeout:3000
//}); 
    	
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
WeixinJSBridge.call('hideOptionMenu');
WeixinJSBridge.call('hideToolbar');
WeixinJSBridge.on("menu:general:share",function(s){
s.generalShare({
"appid": dataForWeixin.appId,
"img_url": dataForWeixin.imgUrl,
"img_width": "640",
"img_height": "640",
"link": dataForWeixin.url,
"desc": dataForWeixin.desc,
"title": dataForWeixin.title
},function(e){
if(e.err_msg=="general_share:ok"){
//share ok:
setTimeout(function () {location.href = mebtnopenurl;}, 1500);
_hmt.push(['_trackEvent', 'wxshare', 'android_share', 'wxsg'+spid]);
_czc.push(['_trackEvent', 'wxshare', 'android_share', 'wxsg'+spid]);
}else{
//share err:
};
});
});

WeixinJSBridge.on('menu:share:appmessage', function(argv) {
WeixinJSBridge.invoke('sendAppMessage', {
"appid": dataForWeixin.appId,
"img_url": dataForWeixin.imgUrl,
"link": dataForWeixin.url,
"desc": dataForWeixin.desc,
"title": dataForWeixin.title
});
setTimeout(function () {location.href = mebtnopenurl;}, 1500);
_hmt.push(['_trackEvent', 'wxshare', 'ios_share', 'wxsa'+spid]);
_czc.push(['_trackEvent', 'wxshare', 'ios_share', 'wxsa'+spid]);

});

WeixinJSBridge.on('menu:share:timeline', function(argv) {
WeixinJSBridge.invoke('shareTimeline', {
"appid": dataForWeixin.appId,
"img_url": dataForWeixin.imgUrl,
"img_width": "640",
"img_height": "640",
"link": dataForWeixin.url,
"desc": dataForWeixin.desc,
"title": dataForWeixin.title
});
setTimeout(function () {location.href = mebtnopenurl;}, 1500);
_hmt.push(['_trackEvent', 'wxshare', 'tl_share', 'wxst'+spid]);
_czc.push(['_trackEvent', 'wxshare', 'tl_share', 'wxst'+spid]);
});

}, false);


