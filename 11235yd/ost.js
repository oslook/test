///////////////first setting//////////////////////////////
var basedns = window.location.hostname;
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://g.oslook.xyz/test/assets/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测试异地恋你有多远的底线？",
desc: "很准的呦,都来试试吧"
};

/////////////////////////////////////////
        var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "距离产生美，可以测试彼此对爱的坚定；同样距离也会让人生疏，使彼此的感情渐行渐远。当你与相爱的人，因为种种原因不能生活在同一个城市，甚至相距千里的时候，你是否还会坚持这份感情？你适合远距离的恋爱吗？赶快来测试一下吧。",
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
						text: "当你打算去一个陌生的城市，你通常会怎么做？",
						select: [



						{
							text: "自己看地图",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[2];
									
																		
										fen += 15;
																			
																	});
							}
						},


						{
							text: "向别人询问路线",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[2];
									
																		
										fen += 10;
																			
																	});
							}
						},


						{
							text: "希望有人在车站接",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[2];
									
																		
										fen += 5;
																			
																	});
							}
						},


						{
							text: "找人同行",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[2];
									
																		
										fen += 0;
																			
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 2,
						text: "有一顶钻石皇冠被锁在箱子里，箱子有四个把手，只有一个可打开箱子。拉错了，就会报警，你决定赌一赌，你会拉哪个把手呢？ ",
						select: [



						{
							text: "写着“要快一点！”字样的把手",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[3];
									
																		
										fen += 0;
																			
																	});
							}
						},


						{
							text: "写着“祝你幸运！”字样的把手",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[3];
									
																		
										fen += 10;
																			
																	});
							}
						},


						{
							text: "写着“喂！拉这里。”字样的把手",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[3];
									
																		
										fen += 5;
																			
																	});
							}
						},


						{
							text: "写着“这绝对是真的啦！”字样的把手",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[3];
									
																		
										fen += 15;
																			
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 3,
						text: "当与人约会时，他迟到了，你会怎么做？",
						select: [



						{
							text: "他是不是遇到什么麻烦了",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[4];
									
																		
										fen += 15;
																			
																	});
							}
						},


						{
							text: "打电话催他",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[4];
									
																		
										fen += 5;
																			
																	});
							}
						},


						{
							text: "再等等，他正在路上赶过来",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[4];
									
																		
										fen += 10;
																			
																	});
							}
						},


						{
							text: "一走了之",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[4];
									
																		
										fen += 0;
																			
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 4,
						text: "当你在图书馆看书的时候，对面坐着一个长相不错的异性，你会联想到什么呢？",
						select: [



						{
							text: "他一个人吗？是不是在等人？",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[5];
									
																		
										fen += 10;
																			
																	});
							}
						},


						{
							text: "他是不是有什么不愉快，怎么一个人呢？",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[5];
									
																		
										fen += 5;
																			
																	});
							}
						},


						{
							text: "他真是一个勤奋好学的人。",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[5];
									
																		
										fen += 0;
																			
																	});
							}
						},


						{
							text: "你仿佛没有看到，仍自顾自的看书",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[5];
									
																		
										fen += 15;
																			
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 5,
						text: "如果你的情人像睡美人(睡美男)一般沉沉睡去，只有你深情的一吻，才能唤醒他，那么你会亲吻他哪里呢？",
						select: [



						{
							text: "下巴",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[6];
									
																		
										fen += 0;
																			
																	});
							}
						},


						{
							text: "眼睛",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[6];
									
																		
										fen += 15;
																			
																	});
							}
						},


						{
							text: "额头",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[6];
									
																		
										fen += 10;
																			
																	});
							}
						},


						{
							text: "耳朵",
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
						text: "什么样的连续剧会引起你的感动？",
						select: [



						{
							text: "悲伤的剧情我很容易就哭得唏哩哗啦",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[7];
									
																		
										fen += 0;
																			
																	});
							}
						},


						{
							text: "贴近生活的较易引起我的注意",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[7];
									
																		
										fen += 5;
																			
																	});
							}
						},


						{
							text: "情扑朔迷离容易引起我的关切",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[7];
									
																		
										fen += 10;
																			
																	});
							}
						},


						{
							text: "看到好笑的较容易引起共鸣",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[7];
									
																		
										fen += 15;
																			
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 7,
						text: "当你的爱人满心欢喜地要求你做一件你可能做不到的事情，你会怎样？",
						select: [



						{
							text: "稍微迟疑，但还是很高兴的答应他",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[8];
									
																		
										fen += 10;
																			
																	});
							}
						},


						{
							text: "婉转拒绝，并请对方原谅",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[8];
									
																		
										fen += 5;
																			
																	});
							}
						},


						{
							text: "满口答应，还装作很愿意的样子",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[8];
									
																		
										fen += 15;
																			
																	});
							}
						},


						{
							text: "一口回绝，表示做不到",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[8];
									
																		
										fen += 0;
																			
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 8,
						text: "某天，你有机会参加跳伞活动。假如由你分配，你希望多少人陪你一起跳下去呢？ ",
						select: [



						{
							text: "所有人",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[9];
									
																		
										fen += 0;
																			
																	});
							}
						},


						{
							text: "只与教练",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[9];
									
																		
										fen += 10;
																			
																	});
							}
						},


						{
							text: "自己一个人",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[9];
									
																		
										fen += 15;
																			
																	});
							}
						},


						{
							text: "2—3个人",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[9];
									
																		
										fen += 5;
																			
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 9,
						text: "由于意外，你必须卧床静养几个月。这段无比乏味的日子，如有机会让你接触一样活生生的“东西”，你希望是？",
						select: [



						{
							text: "一个负责照料你的异性",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[10];
									
																		
										fen += 15;
																			
																	});
							}
						},


						{
							text: "一只漂亮的宠物猫",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[10];
									
																		
										fen += 5;
																			
																	});
							}
						},


						{
							text: "住在窗外大树上的小鸟",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[10];
									
																		
										fen += 0;
																			
																	});
							}
						},


						{
							text: "一只老实巴交的狗",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
																		model.item = model.arr[10];
									
																		
										fen += 10;
																			
																	});
							}
						},
						]
					},

	
						{
						type: "select",
						id: 10,
						text: "在山水间游玩时，忽然眼前出现美丽耀眼的瀑布，瀑布下有一匹马在奔驰，你期望马的颜色是？",
						select: [



						{
							text: "棕色",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
									
																		
										fen += 5;
																				testEnd(fen);
																			
																	});
							}
						},


						{
							text: "白色",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
									
																		
										fen += 15;
																				testEnd(fen);
																			
																	});
							}
						},


						{
							text: "黑色",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
									
																		
										fen += 0;
																				testEnd(fen);
																			
																	});
							}
						},


						{
							text: "金黄色",
							active: false,
							tap: function (ele, select) {
								tap(ele, select,
								function () {
									
									
									
																		
										fen += 10;
																				testEnd(fen);
																			
																	});
							}
						},
						]
					},



                    {
                        type: "result",
                        id: 11                    }, 

                    {
                        type: "result",
                        id: 12                    }, 

                    {
                        type: "result",
                        id: 13                    }, 

                    {
                        type: "result",
                        id: 14                    }, 

                    {
                        type: "result",
                        id: 15                    }, 

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
                        tarShare((newval.id-10));
						return false;
                    };
                })
            });
			var ylist = [


			{
				"biao": "A",
				"t1": "柏拉图式恋爱",
				"t2": "你是一个纯情而充满幻想的人，你信仰爱情，对浪漫也有一份期待。你深信两情若是长久时，又岂在朝朝暮暮。在你的心中的爱情是纯洁而至高无上的，你认为感情的交流，精神的寄托才是最重要的。你坚信纯洁的爱难能可贵，而真情必须等待。在远距离的爱情长跑中，即使无法天天见面，你也能孕育感情。",            
			},

			{
				"biao": "B",
				"t1": "天涯若比邻",
				"t2": "你是一个浪漫主义者，偏向于精神恋爱。你认为距离对于真心相爱的人来说并不是障碍，反而会使彼此更加思念对方，感情也不断升温。虽然有时你也会觉得与爱人两地相思很痛苦，但这份感情也充满甜蜜滋味。对你来说人虽远在天涯，但心灵的距离却近在咫尺。",            
			},

			{
				"biao": "C",
				"t1": "小别胜新婚",
				"t2": "你是理性与感性并重的人，即喜欢保持一定的距离，但又害怕长久的分离。对你而言小别胜新婚，短暂的分离会使你觉得充满罗曼蒂克。但长久的分离又会让你心神不宁。你渴望有一段充满曲折的爱情，但并不想肆无忌惮的陷入远距离的恋情中。在你心中真情诚可贵，面包价也高。",            
			},

			{
				"biao": "D",
				"t1": "一日不见如隔三秋",
				"t2": "你是一个偏向实际的人，隔着空间谈恋爱对你来说是不可为的。一日不见如隔三秋，你喜欢天天与爱人黏在一起。即使爱人就住附近，若没有经常联系，你也会很担心。远距离的恋爱对你来说是一场巨大的考验。久而久之，爱情也会变得苍白无力，就好像产品过了保质期，曾经缠绵悱恻的爱情也会突然瓦解。",            
			},

			{
				"biao": "E",
				"t1": "现实恋爱",
				"t2": "你是一个现实主义者，认为远距离的恋爱是彻底不可能的。或许你不够自信，或许你的感情路走得十分坎坷、一路跌跌撞撞，对于远距离的恋爱你充满恐惧与排斥。你觉得时间可以使感情冲淡，空间的距离也会割断一切，那些所谓的美丽爱情，不过是一种传说。能看得见，抓得住，才是最有保证的。",            
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

			function testEnd() {
								if(fen>=130 && fen<=150){
					var scores=1;
				}
								if(fen>=100 && fen<=129){
					var scores=2;
				}
								if(fen>=50 && fen<=99){
					var scores=3;
				}
								if(fen>=20 && fen<=49){
					var scores=4;
				}
								if(fen>=0 && fen<=19){
					var scores=5;
				}
				
				tarShare(scores);
			}
