$(function () {
    var index = 0;
   /* setInterval(function () {
        index ++;
        console.log('___index',index);

        if(index > 4)
        {
            index = 1;
            $(".banner .roll-img ul").css({
                "left":0
            })
        }else {
            $(".banner .roll-img ul").animate({
                "left": -(index * 1260)
            })
        }
    },2000);*/

    var _index = 1;
    // $(".banner .roll-img ul li").first().css("left",_index);
    //监听鼠标点击事件
    $(".roll-cont>span").mousedown(function () {
        _index++;
        //设置选中状态
        $(this).addClass("active").siblings().removeClass("active");
        //图片切换
        var index = $(this).index();
    })

    //下一张
    /*$("span:last").click(function () {
        index ++;
        if(index > 4)
        {
            index = 1;
            $(".banner .roll-img ul").css({
                left:0
            })
        }
        $(".banner .roll-img ul").animate({
            left:-(index *1260)
        })
    })


    //4张图片 index3
    $("span:first").click(function () {
        index --;

        if(index <0)
        {
            index = 3;
            $(".banner .roll-img ul").css({
                left:-(4 *1260)
            })
        }
        $(".banner .roll-img ul").animate({
            left:-(index *1260)
        })
    })*/

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

