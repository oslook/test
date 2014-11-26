///////////////first setting//////////////////////////////
var basedns = window.location.hostname;
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://g.oslook.xyz/test/assets/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测10年后你是什么档次的女人？",
desc: "很准的呦,都来试试吧"
};

/////////////////////////////////////////
           var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "人们常说，你现在做着什么样的事情，决定了将来你是什么样的人。一个女人的气质和内涵是会随着社会阅历和年龄的增长而变化，就像美酒一样越久越香醇。我们不妨做个心理测试，测测十年后的你会成为什么档次的女人呢？",
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
						text: "你是不是一个意志坚定的人？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[2];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[3];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 2,
						text: "还没有走出校园的时候，你就很希望自己去工作吗？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[4];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[3];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 3,
						text: "基本上，自己是一个超级害怕麻烦的人？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[5];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[4];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 4,
						text: "年轻的时候，你喜欢一个人逛街还是很多人一起逛街？",
						select: [



						{
							text: "一个人逛街",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[6];
									
									
																	});
							}
						},


						{
							text: "很多人一起逛",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[5];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 5,
						text: "你的个人空间会公开贴许多自己的照片吗？",
						select: [



						{
							text: "会",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[6];
									
									
																	});
							}
						},


						{
							text: "不会",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[7];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 6,
						text: "你一向很听父母的话吗？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[7];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[8];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 7,
						text: "学生时代有没有收到过情书？",
						select: [



						{
							text: "有",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[10];
									
									
																	});
							}
						},


						{
							text: "没有",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[9];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 8,
						text: "你现在就经常感叹自己老了吗？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[9];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[10];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 9,
						text: "学生时代的成就一直成为了自己走上社会后引以为傲的光荣吗？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[11];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[12];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 10,
						text: "你现在很少去想自己究竟多少岁吗？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[11];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[12];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 11,
						text: "你更喜欢自己是长发还是短发？",
						select: [



						{
							text: "长发",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[13];
									
									
																	});
							}
						},


						{
							text: "短发",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[14];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 12,
						text: "你觉得其实自己的内心很阴暗的是吗？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[13];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[15];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 13,
						text: "对待去影院看电影，你的个人想法更趋近于下面哪项？",
						select: [



						{
							text: "成为一种生活方式",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[14];
									
									
																	});
							}
						},


						{
							text: "是享受生活的表现",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[15];
									
									
																	});
							}
						},


						{
							text: "没有必要去影院看",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[16];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 14,
						text: "你现在有看完电影后，写写影评感想的习惯吗？",
						select: [



						{
							text: "会",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[16];
									
									
																	});
							}
						},


						{
							text: "没有",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[17];
									
									
																	});
							}
						},


						{
							text: "偶尔写一写",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[18];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 15,
						text: "你是一个很会怀旧的人吗？",
						select: [



						{
							text: "是的，很严重",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[17];
									
									
																	});
							}
						},


						{
							text: "一般般",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[20];
									
									
																	});
							}
						},


						{
							text: "更喜欢向前看",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[18];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 16,
						text: "是不是有一段时间对男人产生过绝望感？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[24];
									
									
																	});
							}
						},


						{
							text: "不是",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[21];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 17,
						text: "你觉得即使自己结婚了，心里面也会藏着一个不敢触碰的异性吗？",
						select: [



						{
							text: "是的",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[25];
									
									
																	});
							}
						},


						{
							text: "不会",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[19];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 18,
						text: "小时候，你父母的关系更贴近下面哪一项？",
						select: [



						{
							text: "父母和睦",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[23];
									
									
																	});
							}
						},


						{
							text: "经常争吵",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[19];
									
									
																	});
							}
						},


						{
							text: "经常冷战",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[26];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 19,
						text: "当你遇到了困难的时候，你第一时间会想到谁？",
						select: [



						{
							text: "男友",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[22];
									
									
																	});
							}
						},


						{
							text: "父母",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[21];
									
									
																	});
							}
						},


						{
							text: "同性好友",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[27];
									
									
																	});
							}
						},


						{
							text: "其他人",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[20];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 20,
						text: "你喜欢道路两边呈现什么风景？",
						select: [



						{
							text: "风一吹，金黄的树叶飘落在你眼前",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[26];
									
									
																	});
							}
						},


						{
							text: "下雨时粉红的花瓣散落一地",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[24];
									
									
																	});
							}
						},


						{
							text: "阳光透过嫩绿的树叶洒下来",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[27];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 21,
						text: "桌子上面有三道菜，你会选择第一时间吃？",
						select: [



						{
							text: "鱼香茄子",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[22];
									
									
																	});
							}
						},


						{
							text: "清蒸鲈鱼",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[25];
									
									
																	});
							}
						},


						{
							text: "干锅田鸡",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[23];
									
									
																	});
							}
						},
						]
					},



                    {
                        type: "result",
                        id: 22                    }, 

                    {
                        type: "result",
                        id: 23                    }, 

                    {
                        type: "result",
                        id: 24                    }, 

                    {
                        type: "result",
                        id: 25                    }, 

                    {
                        type: "result",
                        id: 26                    }, 

                    {
                        type: "result",
                        id: 27                    }, 

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
                        tarShare((newval.id-21));
						return false;
                    };
                })
            });
			var ylist = [


			{
				"biao": "A",
				"t1": "变成俗妇指数：95%",
				"t2": "你没有想到过自己的人生会变成什么样子，至少不是现在这个样子。不管十年前还是十年后，你都要是美的，可是事与愿违，你是个懒的想怎么过活的人，慵懒的你十年之后在人生的道路上失去自我的可能性极大，日子慢慢就消磨了你人生的目标，你不在想去可以打扮自己，喜欢化妆保养的那个曾经的你不不知道哪去了……你也不会再去关注这季流行什么，保养很嫌麻烦了，干脆自暴自弃，当个黄脸婆更是直接。",            
			},

			{
				"biao": "B",
				"t1": "变成俗妇指数：80%",
				"t2": "每个人都免不了曾经想过嫁入豪门做个衣食无忧的少奶奶，只管自己美，保养、花钱，多么自在，羡慕是可以的，不过世界上终究没有那么多的豪门，你要知道自己只是一个简单的人，只能拥有自己的小幸福，所以从你出生那一刻起，就注定了你会成为一个凡妇。这道不是什么可怕的事情，可怕的是你那种自暴自弃的行为，你可以放弃自己的人生，妇女就要过着平淡无奇的生活，不要再买漂亮时尚的衣服了，发型也不用做了，所以，十年后，变庸俗的你可能就是因为自己放弃了自己。",            
			},

			{
				"biao": "C",
				"t1": "变成俗妇指数：60%",
				"t2": "你是一个很传统的人，未来的日子你变得以家庭为重，最终落得个“俗妇”的杯具下场。但是随着年龄的增长，你见的世面也变得广了，你发现家庭还是那么重要，可是你没必要变成黄脸婆了，所以在你觉悟之后你可能有所改变，但你最好改变自己的臭脾气，事事以一颗包容的心去对待。让自己俗的不要那么彻底。",            
			},

			{
				"biao": "D",
				"t1": "变成俗妇指数：50%",
				"t2": "你是一个绝对有理想的人，你从没想过虚度光阴，可是有时这些好像都是浮云，其实这是运气的关系，年轻时你可以坚持住，可是岁月会改变你的坚持，十年之后你是那个围着老公，围着小孩打转的妇人，生活就是一团麻，越扯越不清楚，现实把你变庸俗的。理想依旧存在，只是外表变的庸俗了，你仍有一个强大的内心。",            
			},

			{
				"biao": "E",
				"t1": "变成俗妇指数：30%",
				"t2": "你还是相信一切皆有可能，即使你结婚了，你相信命运和自己的力量，婚后，你还是你，不管世界怎么改变你都不会轻易去改变，不会将自己看低看轻，年轻时的你看起来也是一个平凡的人，你只是有着不为人见的骄傲的一面。这种骄傲，十年之后你仍在享用，即使你在过着机械一般规律的生活，可你就是一个不会轻易变成俗妇的一个女人。",            
			},

			{
				"biao": "F",
				"t1": "变成俗妇指数：10%",
				"t2": "你受到过良好的教育，识大体，懂人心，是一个有品位的人，婚后你很难变得俗，因为这是本身就优秀的你所不能够接受的。你不必嫁入豪门，凭你自己也可以成为一个中产阶级的小康之家，尽管每个人都斗不过岁月，即使老了，你依旧会保持住自己的品位和言谈举止。俗妇一词不可能在你的字典里出现。",            
			},

			];
            document.body.className = "";

function showAns(ans){
		ans = ans-1;
		if(ans<0 || ans>6){
			ans = 1;
		}
		$("#sans").show();
		$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
		$("#sec").html(ylist[ans].t2);

	}

////////////////////
