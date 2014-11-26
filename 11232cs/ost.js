///////////////first setting//////////////////////////////
var basedns = window.location.hostname;
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://g.oslook.xyz/test/assets/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测你适合在哪个城市找工作？",
desc: "很准的呦,都来试试吧"
};

/////////////////////////////////////////
var model = avalon.define("test", function (vm) {
vm.arr = [
{
type: "hello",
text: "你有没有发现有的人在一个地方工作会风生水起，而换了地方就总是失败。因为工作和人一样，要看看你的性格是否属于这个城市。因为每个城市都和人一样都自己的个性。一起来给自己和城市的亲缘关系做一个测试吧。",
select: [
{
text: "开始测试",
active: false,
tap: function (ele, select) {
tap(ele, select, function () {
model.item = model.arr[1];
model.result.sex = 0;
});
}
}
]
},
						
	
{
type: "select",
id: 1,
text: "你最喜欢：",
select: [



{
text: "太阳",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[2];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "月亮",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[2];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "星辰",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[2];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 2,
text: "你是个习惯三更半夜不睡觉的“夜猫子”？",
select: [



{
text: "肯定不是",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[3];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "偶尔为之",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[3];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "经常如此",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[3];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 3,
text: "你的拖鞋是：",
select: [



{
text: "有花纹图案，比较讲究",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[4];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "随处可见的塑料拖鞋",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[4];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "我习惯光脚踩在地毯或木地板上",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[4];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 4,
text: "以下几个词，迅速地看一遍，然后翻过报纸随便默写一个：（沙滩，橙色，小巷，树叶，玻璃，秋千，钢铁，白云，水泥），看你默写下来的词语包括在哪个选项中？",
select: [



{
text: "沙滩，白云，水泥",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[5];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "橙色，树 叶，钢铁",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[5];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "小巷，秋 千，玻璃",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[5];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 5,
text: "手拿遥控器随便换台，你看到哪一类的电视剧镜头会停下？",
select: [



{
text: "动画片、喜剧片，看上去美满又皆大欢喜的场面。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[6];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "刑侦破案之类，悬疑恐怖紧张的镜头。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[6];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "神奇诡异的镜头，一般是幻想片。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[6];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 6,
text: "你最希望的出境旅游目的地是：",
select: [



{
text: "海滨度假胜地",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[7];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "欧洲城市",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[7];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "美洲、非洲古文明遗迹",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[7];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 7,
text: "你希望自己的家挨着：",
select: [



{
text: "繁华的商业区",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[8];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "空气清新的公园",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[8];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "一堆便利超市",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[8];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 8,
text: "你更喜欢哪种零食？",
select: [



{
text: "瓜子，或者同类能磨牙的食品。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[9];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "酸甜的，软软的，比如果冻一类。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[9];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "从不喜欢吃零食，或许可以接受鸡翅膀、羊肉串之类的。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[9];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 9,
text: "你觉得在哪里最能得到休闲？",
select: [



{
text: "逛博物馆、美术馆，或者到公园湖边看书。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[10];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "逛游乐园、商业街，总之是热闹繁华好玩的地方。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[10];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "躺在自家的床上，或者坐在窗前的沙发上晒太阳。",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[10];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 10,
text: "看电视的时候，你最经常的坐姿是：",
select: [



{
text: "端坐在椅子上",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[11];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "斜倚在沙发上，两腿盘上来",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[11];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "半躺在垫子上，用枕头垫着头",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[11];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 11,
text: "你有没有最喜欢的中国城市？",
select: [



{
text: "有我情有独钟的城市",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[12];
									
																		
		fen += 3;
																			
									});
}
},


{
text: "一般喜欢，谈不上热爱",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[12];
									
																		
		fen += 2;
																			
									});
}
},


{
text: "没有，至少在中国没有",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
										model.item = model.arr[12];
									
																		
		fen += 1;
																			
									});
}
},
]
},

	
{
type: "select",
id: 12,
text: "去一个陌生的地方，你不知道自己要去的宾馆在哪里，你会怎样问路？",
select: [



{
text: "直接找一份地图和指南针",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
									
																		
		fen += 3;
												testEnd(fen);
																			
									});
}
},


{
text: "问警察，或者找好几个人打听，以确定信息的真伪",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
									
																		
		fen += 2;
												testEnd(fen);
																			
									});
}
},


{
text: "随便在路边找人问了就走",
active: false,
tap: function (ele, select) {
tap(ele, select,
function () {
									
									
									
																		
		fen += 1;
												testEnd(fen);
																			
									});
}
},
]
},



{
type: "result",
id: 13                    }, 

{
type: "result",
id: 14                    }, 

{
type: "result",
id: 15                    }, 

{
type: "result",
id: 16                    }, 

];
vm.item = vm.arr[0];
vm.result = {
sex: 0
}
vm.shared = false;
vm.sharebox = function () {
model.showshare = true;
}
vm.livetip = false;
vm.hidelivetip = function () {
model.livetip = false;
}
vm.livenow = function () {

}
vm.showxz = function () {
model.xunzhang = true;
}
vm.$watch("item", function (newval) {
if (newval.type == 'result') {
tarShare((newval.id-12));
return false;
};
})
});
var ylist = [


{
"biao": "A",
"t1": "适宜城市：成都，北京，天津",
"t2": "所谓的猫民，包括懒猫，馋猫，夜猫子。太过紧张的气氛会影响猫儿的健康，因此猫必须生活在一个相对宽松的环境中。因此你的理想居所需要具有开放的文化氛围和充足的现代便利生活，换句话说，应该是一个适宜休闲的养老城市。成都与天津都有大城市的便利和历史积存下来的轻松，更有好吃的城市传统。至于北京，这座古都文化气质上的宽容是全国之首，最适宜让崇尚慵懒自由的你发展。另外还有很多城市具备你所需要的城市特质，这种特质说来也简单——像个最现代化的养老院！",            
},

{
"biao": "B",
"t1": "适宜城市：青岛，杭州，桂林",
"t2": "世界上没有比鸟类更会挑选居所风景的生物。哪一只鸟筑巢不是选在山清水秀气候宜人的地方？对你来说，再没有比风景秀丽环境良好更重要的事情，你需要自然风景来舒缓心情，从这一点上，也可以看出，你对工业化大都市存在着潜意识上的畏惧。看过大友克洋的“大都会”吗？在钢筋水泥的城市中看到一抹绿色，对你的精神和心情都有潜在的良好作用。所以，不如抛弃电脑时代的生活，寻找一个接近自然的地方，为心性做一次疗养，绝对能抑制你的烦躁，要不，干脆就搬到街心公园里去住吧。",            
},

{
"biao": "C",
"t1": "适宜城市：广州，厦门，大连",
"t2": "要是几个月不能到繁华地段痛痛快快玩一次，只怕你的骨头就要发霉了吧？一天到晚都有可以玩乐的东西，这才是狗民的人生追求。没有夜生活的城市肯定会让你浑身发痒，你是放弃不了外面花花世界的典型。如果让你隐居活死人墓，就算身边有小龙女陪伴伴，你也早晚会来个离家出走。工作和睡觉都不是你的最终追求，要是没有充足的游乐填充，生活也未免太过无聊。不能玩的城市会让你觉得气闷，其实与其挑选城市，不如直接飞去荷兰丹麦之类 的国家，只怕你乐不思蜀。",            
},

{
"biao": "D",
"t1": "适宜城市：上海，珠海，重庆",
"t2": "每天忙忙碌碌小资端庄作白领状，这才是你希望的生活。你是个品位颇高的精英主义者，养老院游乐场一样的城市肯定都和你八字相克。精致的城市和忙碌的气氛能让你全身肌肉紧绷起来，随时进入兴奋状态。不过这种矫情的态度，多少有些装腔作势的嫌疑。因此推荐这三个列在装腔作势榜首的城市作为你的理想居住地。这些城市的生活似乎都像演戏一样，是做给别人看的样板，不过既然你适合这种随时摆Pose的生活态度，就不如去这些有更多意气相投的人的城市。",            
},

];
document.body.className = "";
function showAns(ans){
ans = ans-1;
if(ans<0 || ans>4){
ans = 1;
}
$("#sans").show();
$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
$("#sec").html(ylist[ans].t2);

}

function testEnd() {
if(fen>=12 && fen<=18){
var scores=1;
}
if(fen>=19 && fen<=24){
var scores=2;
}
if(fen>=25 && fen<=31){
var scores=3;
}
if(fen>=32 && fen<=36){
var scores=4;
}
				
tarShare(scores);
}
