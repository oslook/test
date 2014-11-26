///////////////first setting//////////////////////////////
var basedns = window.location.hostname;
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://g.oslook.xyz/test/assets/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测你爱上一个人需要几秒钟？",
desc: "很准的呦,都来试试吧"
};

/////////////////////////////////////////
var model = avalon.define("test", function (vm) {
vm.arr = [
{
type: "hello",
text: "根据英国专家所进行的大规模快速约会实验，女性在选择未来的人生伴侣是，决定过程所花费的时间比男性来的短，如果在30秒内无法让异性印象深刻，那么就注定成为“无缘的人”。你爱上一个人需要几秒钟?赶快测试一下吧。",
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
		text: "对你来说最重要的一样电器是?",
		select: [



		{
			text: "电视",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[2];
									
																		
						fen += 1;
																			
													});
			}
		},


		{
			text: "冰箱",
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
			text: "洗衣机",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[2];
									
																		
						fen += 5;
																			
													});
			}
		},
		]
	},

	
		{
		type: "select",
		id: 2,
		text: "你会选一张怎样的椅子给自己看电视时坐？",
		select: [



		{
			text: "藤制摇椅",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[3];
									
																		
						fen += 1;
																			
													});
			}
		},


		{
			text: "古典华丽的靠背椅",
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
			text: "完全随意的懒人沙发",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[3];
									
																		
						fen += 5;
																			
													});
			}
		},
		]
	},

	
		{
		type: "select",
		id: 3,
		text: "现在让你计算30秒时间，选择哪种方法?",
		select: [



		{
			text: "凭感觉数",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[4];
									
																		
						fen += 1;
																			
													});
			}
		},


		{
			text: "用手表或时钟",
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
			text: "用秒表",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[4];
									
																		
						fen += 5;
																			
													});
			}
		},
		]
	},

	
		{
		type: "select",
		id: 4,
		text: "紧张或兴奋时，你的身体是否会颤抖?",
		select: [



		{
			text: "颤得厉害",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[5];
									
																		
						fen += 1;
																			
													});
			}
		},


		{
			text: "说不清",
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
			text: "完全不",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[5];
									
																		
						fen += 5;
																			
													});
			}
		},
		]
	},

	
		{
		type: "select",
		id: 5,
		text: "约会无趣异性时，你会找什么借口离开?",
		select: [



		{
			text: "无聊，我回去了",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[6];
									
																		
						fen += 1;
																			
													});
			}
		},


		{
			text: "我身体有些不舒服",
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
			text: "差点忘了，我还有工作要做",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
														model.item = model.arr[6];
									
																		
						fen += 5;
																			
													});
			}
		},
		]
	},

	
		{
		type: "select",
		id: 6,
		text: "没有任何喜欢的对象，你有过这样一段时间吗?",
		select: [



		{
			text: "有，没有任何我中意的人，包括明星和故事中的人物在内",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
									
																		
						fen += 1;
																testEnd(fen);
																			
													});
			}
		},


		{
			text: "只有很短的一段时间",
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
			text: "我一直都有喜欢的对象，尽管目标经常发生变化",
			active: false,
			tap: function (ele, select) {
				tap(ele, select,
				function () {
									
									
									
																		
						fen += 5;
																testEnd(fen);
																			
													});
			}
		},
		]
	},



{
type: "result",
id: 7                    }, 

{
type: "result",
id: 8                    }, 

{
type: "result",
id: 9                    }, 

{
type: "result",
id: 10                    }, 

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
tarShare((newval.id-6));
		return false;
};
})
});
var ylist = [


{
"biao": "A",
"t1": "你属钟情闪击战 30秒",
"t2": "选择伴侣时，你的直觉往往发挥最大作用，因此一见钟情指数很高，如果30秒内无法让你印象深刻，那继续交往的可能也微乎其微。因为你在心中有一个固定的“爱的摹本”，当对方越和你心中的摹本接近，一见钟情的速度越快。你最后的爱侣，很可能是某次一见钟情的结晶。",            
},

{
"biao": "B",
"t1": "你属恋爱歼击战 60秒",
"t2": "你虽然有一见钟情的可能，但理性尚存，不会凭一眼观感就坠入爱河。就算见到心目中的标准异性，你仍然会有一定时间的犹豫，并且容易在短时间内后悔自己的冲动。你的一见钟情最有可能发展成短暂恋情，甚至是一夜情，很难最终开花结果。",            
},

{
"biao": "C",
"t1": "你属寻爱游击战 90秒",
"t2": "只要对方第一印象顺眼，不妨交往看看，但并非一见钟情，因为你潜意识里还存着骑驴找马的希望。心中没有一个特定形象的你，除非见到极其优秀的异性，否则很难有一见钟情的机会。你最后选定的伴侣，多半是因为年龄或情欲所迫的结果。",            
},

{
"biao": "D",
"t1": "你属爱情消耗战 大于90秒",
"t2": "第一印象当然重要，但只要对方在你的衡量标准内还过得去，你都会给以发展机会，免得遗漏了适合的对象。因为你的选择条件之一是精神的契合，而精神层面的考查肯定不能在1分半内得出结论。就算对于在外型上与你的理想标准有相当距离，仍然有机会在后续接触中赢得你的心。",            
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
				if(fen>=6 && fen<=12){
	var scores=1;
}
				if(fen>=13 && fen<=18){
	var scores=2;
}
				if(fen>=19 && fen<=24){
	var scores=3;
}
				if(fen>=25 && fen<=30){
	var scores=4;
}
				
tarShare(scores);
}
