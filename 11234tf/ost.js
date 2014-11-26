///////////////first setting//////////////////////////////
var basedns = window.location.hostname;
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://g.oslook.xyz/test/assets/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测你有哪些未知的天赋？",
desc: "很准的呦,都来试试吧"
};

/////////////////////////////////////////
               var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "人的潜能是很强大的，或许你以为自己擅长游泳，其实你真正的天赋在跑步。要清楚了解自己的天赋在哪，才能更好发展自我。准备好挖掘你的潜能了吗？",
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
						text: "你觉得有必要现在就开始为将来养老蓄积基金吗？ ",
						select: [



						{
							text: "yes",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[3];
									
									
																	});
							}
						},


						{
							text: "no",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[2];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 2,
						text: "在你看来，“公关”是漂亮的人做的事情？",
						select: [



						{
							text: "yes",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[4];
									
									
																	});
							}
						},


						{
							text: "no",
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
						text: "假如这期的体彩让你中了头奖1000万，你将如何安排这笔巨额资金呢？",
						select: [



						{
							text: "满足目前所有的消费需要，剩下的存进银行",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[8];
									
									
																	});
							}
						},


						{
							text: "1/3用来满足目前消费，2/3用于投资",
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
						id: 4,
						text: "在人群中，你很容易成为一个发号施令的人吗？",
						select: [



						{
							text: "yes",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[7];
									
									
																	});
							}
						},


						{
							text: "no",
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
						text: "在电视中看到身患绝症而没钱治病的人，你的第一念头是？",
						select: [



						{
							text: "搞好身体就是在赚钱",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[8];
									
									
																	});
							}
						},


						{
							text: "十分同情，希望他能得到社会各界的帮助",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[6];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 6,
						text: "出入公众场合，你从来都会把自己打扮得光彩夺目？",
						select: [



						{
							text: "yes",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[10];
									
									
																	});
							}
						},


						{
							text: "no",
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
						id: 7,
						text: "你十分享受自己在人群中备受关注的感觉？",
						select: [



						{
							text: "yes",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[9];
									
									
																	});
							}
						},


						{
							text: "no",
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
						id: 8,
						text: "你认为超级富豪与一般人相比，最具哪方面的优势？",
						select: [



						{
							text: "更容易体现其社会价值",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[11];
									
									
																	});
							}
						},


						{
							text: "轻而易举地满足一般人梦寐以求的消费",
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
						id: 9,
						text: "你曾经几次申请办理过信用卡？",
						select: [



						{
							text: "一次以上",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[11];
									
									
																	});
							}
						},


						{
							text: "一次都没",
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
						id: 10,
						text: "如果人生能重新选择职业，你最有可能选择的是？",
						select: [



						{
							text: "明星",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[12];
									
									
																	});
							}
						},


						{
							text: "创业",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[11];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 11,
						text: "在与人相处方面，你对以下哪个方面更有信心？",
						select: [



						{
							text: "说服别人",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[12];
									
									
																	});
							}
						},


						{
							text: "获得别人在感情上的青睐",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[13];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 12,
						text: "你对一个职业的选择偏重于哪种因素？",
						select: [



						{
							text: "兴趣",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[13];
									
									
																	});
							}
						},


						{
							text: "薪资",
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
						id: 13,
						text: "在《射雕英雄传》中，你更喜欢哪个角色？",
						select: [



						{
							text: "洪七公",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[16];
									
									
																	});
							}
						},


						{
							text: "老顽童",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[17];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 14,
						text: "聪明能帮人解决眼前的小问题，智慧能解决人生的大问题，若你一生只能在这两者之中选其一，你选择的是？",
						select: [



						{
							text: "聪明",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[16];
									
									
																	});
							}
						},


						{
							text: "智慧",
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
						id: 15,
						text: "有一句话叫作：“一生二、二生三、三生无穷”，看到这句话，你脑中闪的第一个念头是？",
						select: [



						{
							text: "人生哲学",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[19];
									
									
																	});
							}
						},


						{
							text: "赚钱的道理",
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
						text: "黄蓉和王语嫣假如同时站在选秀台上竞争，你认为谁有机会胜出？",
						select: [



						{
							text: "黄蓉",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[17];
									
									
																	});
							}
						},


						{
							text: "王语嫣",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[22];
									
									
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 17,
						text: "如果有一个人给你10块钱让你施舍给一个乞丐，在你面前同时有两个乞丐，一名是残疾的老乞丐，一名是拉奏二胡的年轻乞丐，你会把钱捐给谁？",
						select: [



						{
							text: "残疾的老乞丐",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
																		model.item = model.arr[21];
									
									
																	});
							}
						},


						{
							text: "拉奏二胡的年轻乞丐",
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
                        type: "result",
                        id: 18                    }, 

                    {
                        type: "result",
                        id: 19                    }, 

                    {
                        type: "result",
                        id: 20                    }, 

                    {
                        type: "result",
                        id: 21                    }, 

                    {
                        type: "result",
                        id: 22                    }, 

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
                        tarShare((newval.id-17));
						return false;
                    };
                })
            });
			var ylist = [


			{
				"biao": "A",
				"t1": "理财",
				"t2": "你在理财方面可谓是生来的专家哦！你深谙金钱的各大功能，同时也是“开源节流”的身体力行者，你对金钱的理念是：出去的是为了要进来的。从来不对金钱做无用功，算盘打得比卖家还精的你几乎从不掉进推销陷阱，上街购物的时候，你一定也是“不买贵的，只买对的”。",            
			},

			{
				"biao": "B",
				"t1": "悟禅",
				"t2": "在茫茫众生之中，你的情商算是高的了。你比较重视人与人之间的感情，重视感情的价值，认为那是人生最宝贵的东西。不仅如此，你还把这种情延伸到自然各界，将人之情类推到动物、植物等万物之情，你思路开阔，常不为眼前事物所束，喜欢思考人生哲学的大问题，如果涉足佛界，你成为慧根极高的佛家弟子。",            
			},

			{
				"biao": "C",
				"t1": "管理",
				"t2": "首先，你有较强的领袖欲，在伙伴中，一定是最喜发号施令的那一个。然后，你属于一个“通情达理”的人，在人群中给人值得信任和可以依靠的的印象，在别人只关心自己的利益是否获得满足时，你却能更多的考虑到众人的利益是否得以公平分配。可能你现在从事的是与管理无关的行业，但是一旦得到机会，你的管理才能将会充分施展。",            
			},

			{
				"biao": "D",
				"t1": "慈善",
				"t2": "你有博大的悲天悯人的胸怀，不管自己过得如何，都对遭遇着生活不幸的人寄予一颗富有同情的心。还记得小时候，学校里我们做过“人心本善还是人心本恶”的一场辩论吗？你一定是不由自主地站在人心本善的这一方吧？做善事会让你有种自我价值的实现的快感。一个人做一件善事不难，难的是一辈子都做善事，特别是不论是贫穷还是富有时都在坚持做善事。如果你能碰上致富的机会，也有可能成为一名大慈善家哦！",            
			},

			{
				"biao": "E",
				"t1": "明星",
				"t2": "你有很强的自我实现意识，而且对于想去做的事一定会很认真地去做，你讨厌半途而废，认为努力过的事就一定要有个结果。另外，你很享受在大众场合成为焦点以及被人称赞的感觉，这让你尝到人生的乐趣和价值。总之你具备做明星的性格，若同时能拥有其他两样东西（一是外貌气质，二是时运机会）的话，那就能成为一颗耀眼的“恒星”了！",            
			},

			];
            document.body.className = "";
	function showAns(ans){
				ans = ans-1;
				if(ans<0 || ans>5){
					ans = 1;
				}
				$("#sans").show();
				$("#fis").html("<span>"+ylist[ans].biao+"</span>"+ylist[ans].t1);
				$("#sec").html(ylist[ans].t2);

			}

