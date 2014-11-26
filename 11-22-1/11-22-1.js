///////////////first setting//////////////////////////////
var basedns = window.location.hostname;
var mebtnopenurl ="http://" +basedns +"/test/"+spid+"/result.html";
var dataForWeixin = {
appId: "",
server: "http://"+basedns,
imgUrl: "http://g.oslook.xyz/test/assets/"+spid+"/icon.jpg",
url: "http://"+basedns+"/test/"+spid+"/index.html",
title: "测测你的色觉辨别能力有多强",
desc: "很准的呦,都来试试吧"
};

var imgurl = "http://g.oslook.xyz/test/assets/"+spid;

            var fen = 0;
            var s = [0, 0, 0, 0, 0]
            var cur_qids = new Array();
            function comp(str2) {
                if (str2 == 5) {
                    s[1] = s[1] + 14.28
                    s[2] = s[2] + 14.28
                } else if (str2 == 6) {
                    s[1] = s[1] + 14.28
                    s[2] = s[2] + 14.28
                    s[3] = s[3] + 14.28
                } else {
                    s[str2] = s[str2] + 14.28
                }

            }
            function tap(elemvm, select, cb) {
                var a = false;
                for (var i = 0; i < select.length; i++) {
                    a = a || select[i].active;
                };
                if (!a) {
                    elemvm.active = true;
                    setTimeout(function () {
                        cb && cb()
                    }, 500)
                }
            }
            function getQueryString(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = location.search.substr(1).match(reg);
                if (r != null) return unescape(decodeURI(r[2])); return null;
            }

/////////////////////////////////////////
               var model = avalon.define("test", function (vm) {
                vm.arr = [
                    {
                        type: "hello",
                        text: "在这个五色缤纷的世界，你能想象色盲眼里的世界是怎样的吗？色盲，就是缺乏或完全没有辨别色彩的能力。通常说的色盲多是指红绿色盲(全色盲)。根据三原色学说，不能分辨红色者为红色盲，不能分辨绿色者为绿色盲，不能分辨蓝色者为蓝色盲，三种颜色都不能辨认者为全色盲。怎样简单辨别自己是不是色盲呢？下面的色盲测试图或许可以帮你",
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
                    }, {
                        type: "select",
                        id: 1,
                        img: imgurl + "/img/1.jpg",
                        text: "你在图中看到的数字是？",
                        select: [{
                            text: "27",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    model.item = model.arr[2];
								});
                            }
                        },
						{
						    text: "17",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    fen += 1;
								    model.item = model.arr[2];

								});
						    }
						},
						{
						    text: "77",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[2];

								});
						    }
						},
						{
						    text: "没有",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[2];

								});
						    }
						}]
                    },
					{
					    type: "select",
					    id: 2,
					    img: imgurl + "/img/2.gif",
					    text: "你在图中看到的数字是？",
					    select: [{
					        text: "628",
					        active: false,
					        error: false,
					        tap: function (ele, select) {
					            tap(ele, select,
								function () {
								    fen += 1;
								    model.item = model.arr[3];

								});
					        }
					    },
						{
						    text: "888",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[3];

								});
						    }
						},
						{
						    text: "388",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[3];

								});
						    }
						},
						{
						    text: "没有",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[3];

								});
						    }
						}]
					},
					{
					    type: "select",
					    id: 3,
					    img: imgurl + "/img/3.gif",
					    text: "你在图中看到的图形是？",
					    select: [{
					        text: " 方形",
					        active: false,
					        error: false,
					        tap: function (ele, select) {
					            tap(ele, select,
								function () {
								    model.item = model.arr[4];

								});
					        }
					    },
						{
						    text: "三角形",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[4];

								});
						    }
						},
						{
						    text: "圆形",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    fen += 1;
								    model.item = model.arr[4];

								});
						    }
						},
						{
						    text: "没有",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[4];

								});
						    }
						}]
					},
					{
					    type: "select",
					    id: 4,
					    img: imgurl + "/img/4.gif",
					    text: "你在图中看到的图形是？",
					    select: [{
					        text: "五角星",
					        active: false,
					        error: false,
					        tap: function (ele, select) {
					            tap(ele, select,
								function () {
								    fen += 1;
								    model.item = model.arr[5];

								});
					        }
					    },
						{
						    text: "圆形",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[5];

								});
						    }
						},
						{
						    text: "三角形",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[5];

								});
						    }
						},
						{
						    text: "没有",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[5];

								});
						    }
						}]
					},
					{
					    type: "select",
					    id: 5,
					    img: imgurl + "/img/5.gif",
					    text: "这是什么动物？",
					    select: [{
					        text: "燕子",
					        active: false,
					        error: false,
					        tap: function (ele, select) {
					            tap(ele, select,
								function () {
								    fen += 1;
								    model.item = model.arr[6];

								});
					        }
					    },
						{
						    text: "鲨鱼",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[6];

								});
						    }
						},
						{
						    text: "犀牛",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[6];

								});
						    }
						},
						{
						    text: "没有",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[6];

								});
						    }
						}]
					},
					{
					    type: "select",
					    id: 6,
					    img: imgurl + "/img/6.gif",
					    text: "这是什么动物？",
					    select: [{
					        text: "蜻蜓",
					        active: false,
					        error: false,
					        tap: function (ele, select) {
					            tap(ele, select,
								function () {
								    model.item = model.arr[7];

								});
					        }
					    },
						{
						    text: "蚊子",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[7];

								});
						    }
						},
						{
						    text: "蝴蝶",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    fen += 1;
								    model.item = model.arr[7];
								    ;
								});
						    }
						},
						{
						    text: "没有",
						    active: false,
						    error: false,
						    tap: function (ele, select) {
						        tap(ele, select,
								function () {
								    model.item = model.arr[7];

								});
						    }
						}]
					},
					{
					    type: "select",
					    id: 7,
					    img: imgurl + "/img/7.gif",
					    text: "这是什么动物？",
					    select: [{
					        text: "蜻蜓",
					        active: false,
					        error: false,
					        tap: function (ele, select) {
					            tap(ele, select,
								function () {
								    fen += 1;
								    model.item = model.arr[8];
								});
					        }
					    },
                       {
                           text: "蝎子",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {

                                   model.item = model.arr[8];
                               });
                           }
                       },
                       {
                           text: "蛇",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[8];
                               });
                           }
                       },
                       {
                           text: "没有",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[8];
                               });
                           }
                       }]
					}, {
					    type: "select",
					    id: 8,
					    img: imgurl + "/img/8.jpg",
					    text: "你在图中看到的数字是？",
					    select: [{
					        text: "969",
					        active: false,
					        error: false,
					        tap: function (ele, select) {
					            tap(ele, select,
								function () {
								    model.item = model.arr[9];
								});
					        }
					    },
                       {
                           text: "869",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   fen += 1;
                                   model.item = model.arr[9];
                               });
                           }
                       },
                       {
                           text: "860",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[9];
                               });
                           }
                       },
                       {
                           text: "没有",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[9];
                               });
                           }
                       }]
					},
                    {
                        type: "select",
                        id: 9,
                        img: imgurl + "/img/9.jpg",
                        text: "你在图中看到的是？",
                        select: [{
                            text: "19812",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    model.item = model.arr[10];
								});
                            }
                        },
                       {
                           text: "PEACE",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   fen += 1;
                                   model.item = model.arr[10];
                               });
                           }
                       },
                       {
                           text: "FIAT",
                           active: false,
                           error: false,
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
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[10];
                               });
                           }
                       }]
                    }, {
                        type: "select",
                        id: 10,
                        img: imgurl + "/img/10.jpg?v2",
                        text: "你在图中看到的是？",
                        select: [{
                            text: "66",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    
								    model.item = model.arr[11];
								});
                            }
                        },
                       {
                           text: "4",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   fen += 1;
                                   model.item = model.arr[11];
                               });
                           }
                       },
                       {
                           text: "A",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[11];
                               });
                           }
                       },
                       {
                           text: "没有",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[11];
                               });
                           }
                       }]
                    },
                    {
                        type: "select",
                        id: 11,
                        img: imgurl + "/img/11.jpg",
                        text: "你在图中看到的是？",
                        select: [{
                            text: "9",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    model.item = model.arr[12];
								});
                            }
                        },
                       {
                           text: "5",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   fen += 1;
                                   model.item = model.arr[12];
                               });
                           }
                       },
                       {
                           text: "6",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[12];
                               });
                           }
                       },
                       {
                           text: "没有",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[12];
                               });
                           }
                       }]
                    },
                    {
                        type: "select",
                        id: 12,
                        img: imgurl + "/img/12.jpg",
                        text: "你在图中看到的是？",
                        select: [{
                            text: "BEE",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    model.item = model.arr[13];
								});
                            }
                        },
                       {
                           text: "RED",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   fen += 1;
                                   model.item = model.arr[13];
                               });
                           }
                       },
                       {
                           text: "BED",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[13];
                               });
                           }
                       },
                       {
                           text: "没有",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[13];
                               });
                           }
                       }]
                    },
                    {
                        type: "select",
                        id: 13,
                        img: imgurl + "/img/13.jpg",
                        text: "你在图中看到的是？",
                        select: [{
                            text: "909",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    model.item = model.arr[14];

								});
                            }
                        },
                       {
                           text: "809",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   fen += 1;
                                   model.item = model.arr[14];

                               });
                           }
                       },
                       {
                           text: "808",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[14];

                               });
                           }
                       },
                       {
                           text: "没有",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[14];

                               });
                           }
                       }]
                    },
                    {
                        type: "select",
                        id: 14,
                        img: imgurl + "/img/14.jpg",
                        text: "你在图中看到的是？",
                        select: [{
                            text: "鹅",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    fen += 1;
								    model.item = model.arr[15];
								});
                            }
                        },
                       {
                           text: "猫",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[15];
                               });
                           }
                       },
                       {
                           text: "鸡",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[15];
                               });
                           }
                       },
                       {
                           text: "没有",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   model.item = model.arr[15];
                               });
                           }
                       }]
                    },
                    {
                        type: "select",
                        id: 15,
                        img: imgurl + "/img/15.jpg",
                        text: "你在图中看到的是？",
                        select: [{
                            text: "698",
                            active: false,
                            error: false,
                            tap: function (ele, select) {
                                tap(ele, select,
								function () {
								    fen += 1;
								    tarShare(fen);
								});
                            }
                        },
                       {
                           text: "9",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   tarShare(fen);
                               });
                           }
                       },
                       {
                           text: "6",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   tarShare(fen);
                               });
                           }
                       },
                       {
                           text: "没有",
                           active: false,
                           error: false,
                           tap: function (ele, select) {
                               tap(ele, select,
                               function () {
                                   tarShare(fen);
                               });
                           }
                       }]
                    },
                    {
                        type: "reuslt",
                        id: 16,
                        ss: "A",
                        sstext: "共对了0道题，正常程度：0%",
                        sstext1: "",
                        text: "属于色盲患者"
                    },
                      {
                          type: "reuslt",
                          id: 17,
                          ss: "B",
                          sstext: "共对了0道题，正常程度：0%",
                          sstext1: "",
                          text: "疑似色觉异常者"
                      },
                      {
                          type: "reuslt",
                          id: 18,
                          ss: "C",
                          sstext: "共对了0道题，正常程度：0%",
                          sstext1: "",
                          text: "带有轻微的色盲色弱症"
                      },
                      {
                          type: "reuslt",
                          id: 19,
                          ss: "D",
                          sstext: "共对了0道题，正常程度：0%",
                          sstext1: "",
                          text: "属于正常人群"
                      }
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
                        // tarShare((newval.id-20));
                        return false;
                    };
                })
            });
     var ylist = [{
                        ss: "A",
                        sstext: "共对了0道题，正常程度：%",
                        sstext1: "",
                        text: "属于色盲患者"
                    },
                      {
                          ss: "B",
                          sstext: "共对了0道题，正常程度：%",
                          sstext1: "",
                          text: "疑似色觉异常者"
                      },
                      {
                          ss: "C",
                          sstext: "共对了0道题，正常程度：%",
                          sstext1: "",
                          text: "带有轻微的色盲色弱症"
                      },
                      {
                          ss: "D",
                          sstext: "共对了0道题，正常程度：%",
                          sstext1: "",
                          text: "属于正常人群"
                      }];


document.body.className = "";

function showAns(fen){
    var k = fen * 6.6666666666666;
    var ans = 0;
    if (fen >= 0 && fen <= 3) {
        ans = 0;
    }
    else if (fen >= 4 && fen <= 9) {
        ans = 1;
    }
    else if (fen >= 10 && fen <= 13) {
        ans = 2;
    }
    else {
        ans = 3;
    }
	
	$("#sans").show();
	$("#fis").html("<span>" + ylist[ans].ss + "</span>" + ylist[ans].sstext.replace("0", fen).replace("%", k.toFixed(2) + "%"));
    $("#sec").html(ylist[ans].text + "<br />");
    document.title = "结果";
}
////////////////////
