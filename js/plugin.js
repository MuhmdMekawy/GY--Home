$(document).ready(function(){
    $('.home-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        margin:0,
        rtl:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.services .container .cont').hover(function(){
        $(this).find('button').css({
            "visibility" : "visible"
        })
    } ,function(){
        $(this).find('button').css({
            "visibility" : "hidden"
        })
    });
    $('.courses-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        nav:true,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.say-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        nav:true,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        if(src >= 1000){
        $('.up button').show(500).click(function(){
            $(window).scrollTop(0)
        });
        }
    else{
        $('.up button').hide(500)
        }
    });
    $('.lessons-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        margin:30,
        nav:true,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.gy-course .links .content .direct').click(function(){
        $('.gy-course .directed').show().siblings().hide()
        $(this).css({
            "background-color" : "#262626" ,
            "color" : "#FFFFFF"
        }).siblings().css({
            "background-color" : "rgb(38 38 38 / 10%)" ,
            "color" : "#262626"
        })
    });
    $('.gy-course .links .content .act').click(function(){
        $('.gy-course .acting').show().siblings().hide()
        $(this).css({
            "background-color" : "#262626" ,
            "color" : "#FFFFFF"
        }).siblings().css({
            "background-color" : "rgb(38 38 38 / 10%)" ,
            "color" : "#262626"
        })
    });
    $('.gy-course .links .content .fm-voi').click(function(){
        $('.gy-course .fm-voice').show().siblings().hide()
        $(this).css({
            "background-color" : "#262626" ,
            "color" : "#FFFFFF"
        }).siblings().css({
            "background-color" : "rgb(38 38 38 / 10%)" ,
            "color" : "#262626"
        })
    });
    $('.gy-course .links .content .sport-voi').click(function(){
        $('.gy-course .sport-voice').show().siblings().hide()
        $(this).css({
            "background-color" : "#262626" ,
            "color" : "#FFFFFF"
        }).siblings().css({
            "background-color" : "rgb(38 38 38 / 10%)" ,
            "color" : "#262626"
        })
    });
})