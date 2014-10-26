var mebtnopenurl = "http://i.oslook.com/test/"+spid+"/result.html?s="+s;
var dataForWeixin = {
"appId": "",
"imgUrl": "http://i.oslook.com/test/"+spid+"/icon.jpg",
"timeLineLink": "",
"url": "http://i.oslook.com/test/"+spid+"/index.html",
"title": decodeURIComponent(t),
"desc": decodeURIComponent(d)
};
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
WeixinJSBridge.call('showOptionMenu');
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
});

}, false);

document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
WeixinJSBridge.call('hideToolbar');
});
