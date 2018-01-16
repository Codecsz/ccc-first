$(function () {
    //轮播图
    var i=0;
    var _index=1;
    var timer=null;
$(".banner .roll-img").hover(function () {
    clearInterval(timer);
},function () {
    timer()

})
    timer=setInterval(function(){
        i++;
        i = i > 3 ? 0 : i ;
        $(".roll-cont>span").eq(i).addClass('active').siblings().removeClass("active");

        $(".banner .roll-img ul li").eq(i).fadeIn(500).siblings().fadeOut(500);
    },2000);
    $(".banner .roll-img ul li").first().css("z-index",_index);
    //监听鼠标点击事件
    $(".roll-cont>span").mouseenter(function () {
        _index++;
        //设置选中状态
        $(this).addClass("active").siblings().removeClass("active");
        //图片切换
        var index = $(this).index();
        $(".banner .roll-img ul li").eq(index).css("z-index",_index).hide().fadeIn();
    })

    //滚回顶部
    $(window).on("scroll", function () {
        var top = $(window).scrollTop();
        console.log(top);
        if (top > 400) {
            $(".fix2").css({
                "display": "block"
            })
        } else {
            $(".fix2").css({
                "display": "none"
            })
        }
        $(".fix2").click(function () {
            $("html,body").stop().animate({
                scrollTop : 0
            },600)
        })
    });
    $(".inside img").click(function () {
        $(".divs").css({
            "display" : "block"
        })
    });
    //头部切换
    $(".h_menu li").mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current")

    })

})

