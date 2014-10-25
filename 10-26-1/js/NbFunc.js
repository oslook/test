
NbFunc = {
    WeiXinShare: function (callback) {

                if (callback) {
                    callback();
                }

    },
    GetRandomNum: function (Min, Max) {
            var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    },
    Rotate: function (dom, angle, direction, callback) { //旋转方法 dom结构 旋转值 中心点 回调事件
        $(dom).css({
            "-webkit-transform": "rotate(" + angle + "deg)",
            "transform": "rotate(" + angle + "deg)",
            "-ms-transform": "rotate(" + angle + "deg)",
            "-moz-transform": "rotate(" + angle + "deg)",
            "-webkit-transform": "rotate(" + angle + "deg)",
            "-o-transform": "rotate(" + angle + "deg)",
            "transform-origin": direction,
            "-ms-transform-origin": direction,
            "-moz-transform-origin": direction,
            "-webkit-transform-origin": direction,
            "-o-transform-origin": direction
        });
        callback && callback();
    }
}

WeiXinArr = ["型男明星为何都穿NB复古鞋，猛戳了解详情",
            "史上最准潮人型格测试，没有之一！准确率99%",
            "全网最“型”，不信测一测便知",
            "参与型格测试，潮流单品一网打尽",
            "11种不得不知的型男绝招，你造吗？",
            "型男大盘点，有种你就来对号入座！",
            "NB再次出招，要各大牌如何接招？",
            "一个高富帅才能来点的测试",
            "对不起，我这么潮范儿你造吗？",
            "3秒看你到底有多“型”！",
            "11双鞋让你了解型男",
            "屌丝3秒变型男",
            "穿过很多双鞋，终于能做一个安静的美型男"
];

$(document).ready(function () {
    NbFunc.WeiXinShare();


    $("body").on("touchmove", function (e) {
        e.preventDefault();
    });

});
