///////////////first setting//////////////////////////////
var basedns = window.location.hostname;
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://g.oslook.xyz/test/assets/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: document.title,
desc: "脑龄测试，看看你需要多长时间完成，敢来挑战吗？"
};

//全局声明
var matchingGame = {};
matchingGame.fontText = [
	'红色','黄色','绿色','蓝色','黑色','白色'
];
matchingGame.fontTextTit = [
	'红色','黄色','绿色','蓝色','黑色','白色'
];
matchingGame.fontColorClass = [
	'list0','list1','list2','list3','list4','list5'
];
matchingGame.fontTitClass = [
	'list0','list1','list2','list3','list4','list5'
];
matchingGame.adText = [
	'搭个伙伴上下班<br>每月多赚两千三！',
	'麻麻再也不用担心我<br>上下班地铁挤出翔了！',
	'与富帅、白美拼车<br>上下班想想也是醉了！'
]
matchingGame.downloadText = [
	'开始有爱地挣钱','免费搭车上下班','和附近车主做朋友'
]
var currentMatching=0;
var num = 1; //统计玩家所玩局数
var gameCountnum = 20;//定义每一局需要玩的步数
var daoNum = 4;//开始倒计时
var age = 100; //年龄最大值为100
var arrColor = new Array(),
arrText = new Array();
$(function(){
	stacNum();
	//创建6个
	for(var i=0;i<5;i++){
		$(".font:first-child").clone().appendTo(".fontList");
	}
	$(".textTip span").html(gameCountnum);
	$(".over i").html(checkTime(gameCountnum));
	var adrandNum = randomNum(0,3);
	$(".download span").html(matchingGame.adText[adrandNum]);
	$(".download em").html(matchingGame.downloadText[adrandNum]);
	currentMatching=adrandNum;
});
//布局函数
function layout(){
	$(".titText").animate({marginLeft:"0px"},300);
	$(".titText").attr("class","titText");
	var titColornum = randomNum(0,6);
	$(".titText").html(matchingGame.fontText[randomNum(0,6)]).addClass(matchingGame.fontTitClass[titColornum]).attr("dis",titColornum);
	arrColor = matchingGame.fontColorClass.sort(shuffle);
	arrText = matchingGame.fontText.sort(shuffle);
	//让字体以2*3的形式对齐
	$(".fontList").children().each(function(index){
		$(this).attr("class","font").addClass(arrColor[index]).html(arrText[index]);
		$(this).css({"left":($(this).width()+70)*(index%2),"top":($(this).height()+20)*Math.floor(index/2)});	
	});
}
//点击判断函数
function oJudge(){
	$(".fontList").children().each(function(index){
		//点击检测是否选对
		$(this).bind("touchstart",function(){
			var choseTextColor = $(this).html();
			var dis = $(".titText").attr("dis");
			var titTextColor = matchingGame.fontTextTit[dis];
			if(choseTextColor === titTextColor){
				$(this).addClass("successTip");
				oSuccess();
			}
			else{
				$(this).addClass("errorTip");
				var errorNum = $(".errorTip").length;
				if(errorNum>2){
					$("#tips").html("请点击与标题字体颜色对应的文字，即此步骤需要点击“ "+ titTextColor +" ”");
					$("#tips").show();
					//	alert("请点击与标题字体颜色对应的文字，即此步骤需要点击“ "+ titTextColor +" ”");
				}
			}
		});
	});
}
//选择正确后逻辑函数
function oSuccess(){
	if(num > gameCountnum-1){
		$(".result span").css("width",(num/gameCountnum)*100+"%");
		mark();
	}else{
		$(".result span").css("width",(num/gameCountnum)*100+"%");
		$(".over i").html(checkTime(gameCountnum-num));
		num++;
		$(".titText").css("margin-left","-600px");
		layout();
	}
}
//排列随机数
function shuffle(){
	return 0.5 - Math.random();
}
function randomNum(min,max){
    return Math.floor(min+Math.random()*(max-min));
}
//计时函数
var m=0,s=0,ms=0;
function oTime(){
	var timems = ms++;
	if(ms>99){
		ms=0;
		s++;
	}
	if(s>59){
		s=0;
		m++;
	}
	$(".min").text(checkTime(m));
	$(".second").text(checkTime(s));
	$(".msecond").text(checkTime(ms));
	setTimeout(oTime,10);
}
function checkTime(i) 
{ 
	if(i<10){
		i="0" + i
	} 
  	return i 
}
//成绩判断
function mark(){
	var score = (parseInt($(".min").text())*60+parseInt($(".second").text())) +"."+ parseInt($(".msecond").text());
 
	var prscore = parseInt(score);
	if(prscore>54){
		gameage = 13 + parseInt(prscore/2);
		$(".photo").attr("src","http://g.oslook.xyz/test/assets/"+spid+"/3.png");
		$(".yu").html("唉");
		$(".reload").html("不信了再来一次");
	}else if(prscore<=54 && prscore>27){
		gameage = 12 + parseInt(prscore/2) ;
		$(".photo").attr("src","http://g.oslook.xyz/test/assets/"+spid+"/3.png");
		$(".yu").html("嗤");
		$(".reload").html("不甘心再来一次");
	}else{
		gameage = prscore - 2;
		$(".photo").attr("src","http://g.oslook.xyz/test/assets/"+spid+"/3.png");
		$(".yu").html("哟");
		$(".reload").html("刷记录再来一次");
	}
	setTimeout(function(){
		$("title").text("脑龄测试：我用了"+score+"秒，大脑年龄相当于"+gameage+"岁！都来挑战一下吧~");
		dataForWeixin.title="脑龄测试：我用了"+score+"秒，大脑年龄相当于"+gameage+"岁！都来挑战一下吧~";
		$("#game").hide();
		$(".about").hide();
		$("#eval").show();
		$(".download").show();
		$(".adtip").show();
		$(".et").html(score);
		$(".eg").html(gameage);
		
	},200);
}
//倒计时进入游戏
var timerd = null;
function daoTime(){
	daoNum--;
	if(daoNum < 1){
		clearTimeout(timerd);
		$(".daotime").hide();
		$(".play").show();
		layout();
		oJudge();
		setTimeout(oTime,1000);
		return;
	}
	$(".numTip").html(daoNum);
	timerd = setTimeout(daoTime,1000);
}
//统计玩家玩的局数
function stacNum(){
	var loadCounter = window.sessionStorage.getItem('loadCounter');
	if(loadCounter){
		$(".daotime").show();
		daoTime();
	}else{
		window.sessionStorage.setItem('loadCounter',1);
		$(".howpaly").show();
	}
}
//用户点击开始玩耍
$(".startw").bind("touchstart",function(){
	setTimeout(function(){
		$(".howpaly").hide();
		$(".daotime").show();
		WeixinJSBridge.call('showOptionMenu');
		daoTime();},200);
});
//刷新按钮
$(".reload").bind("touchstart",function(){
	location.reload();
});
//点击分享按钮
$(".share").bind("touchstart",function(){
	$(".sharetip").show();
	shareTime();
});
var sharetimeNum = 5;
function shareTime(){
	sharetimeNum--;
	if(sharetimeNum < 1){
		clearTimeout(timerd);
		$(".sharetip").hide();
		sharetimeNum = 4;
		return;
	}
	timerd = setTimeout(shareTime,1000);
}
//点击下载按钮

//分享到朋友圈
function _WXShare(desc,title,img,width,height,url,appid){
	img=img;
	width=width||100;
	height=height||100;
	title=title||document.title;
	desc=desc||document.title;
	url=url||document.location.href;
	appid=appid||'';
	function _ShareFriend() {
		WeixinJSBridge.invoke('sendAppMessage',{
			  'appid': appid,
			  'img_url': img,
			  'img_width': width,
			  'img_height': height,
			  'link': url,
			  'desc': desc,
			  'title': title
			  }, function(res){
				_report('send_msg', res.err_msg);
		  })
	}
	function _ShareTL() {
		WeixinJSBridge.invoke('shareTimeline',{
			  'img_url': img,
			  'img_width': width,
			  'img_height': height,
			  'link': url,
			  'desc': desc,
			  'title': title
			  }, function(res) {
			  _report('timeline', res.err_msg);
			  });
	}
	function _ShareWB() {
		WeixinJSBridge.invoke('shareWeibo',{
			  'content': desc,
			  'url': url,
			  }, function(res) {
			  _report('weibo', res.err_msg);
			  });
	}
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
		WeixinJSBridge.on('menu:share:appmessage', function(argv){
			_ShareFriend();
		});
		// 分享到朋友圈
		WeixinJSBridge.on('menu:share:timeline', function(argv){
			title=document.title;
			_ShareTL();
		});
		// 分享到微博
		WeixinJSBridge.on('menu:share:weibo', function(argv){
			_ShareWB();
		});
	}, false);
}

