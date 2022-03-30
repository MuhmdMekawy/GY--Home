$(document).ready(function(){
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        var coun = $('.gy-who .coun').offset().top
        if(src >= coun - 200){
            $('.coun .content .cont .std h3').each(function(){
                $(this).prop('counter' , 0).animate({
                    counter : 2000
                } , {
                    duration : 4000 , 
                    easing : 'linear' ,
                    step : function(e){
                        $(this).text("+" + Math.ceil(e))
                    }
                })
            });
            $('.coun .content .cont .coa h3').each(function(){
                $(this).prop('counter' , 0).animate({
                    counter : 200
                } , {
                    duration : 4000 , 
                    easing : 'linear' ,
                    step : function(e){
                        $(this).text("+" + Math.ceil(e))
                    }
                })
            });
            $('.coun .content .cont .exp  h3').each(function(){
                $(this).prop('counter' , 0).animate({
                    counter : 15
                } , {
                    duration : 4000 , 
                    easing : 'linear' ,
                    step : function(e){
                        $(this).text("+" + Math.ceil(e))
                    }
                })
            });
        }
    })
})