$(function(){
    
   'use strict' ; 
   
   
    
    // scroll to the wanted place
    
    $(".header .navbar .links li a").click(function(){    
        
        $(this).parent().addClass("active").siblings().removeClass("active") ; 
        $("body, html").animate({
                
            scrollTop :  $("#" + $(this).data("value") ).offset().top 
        
        }, 1500) ; 
    
    });
    

    $(window).scroll(function(){
        
        if( scrollY == 0 ){

            $(".header .navbar .links li a:first").parent().addClass("active").siblings().removeClass("active") ;

        }

    });    

    // Modifiy the height of window
    
    var myheader=  $(".header") ; 
    myheader.height($(window).height()) ; 
    
    $(window).resize(function(){
       myheader.height($(window).height()) ; 
        
    });
    
    // my own slider
    
    ( function slide(){   

            $(".slide .active").each(function(){
                if( !$(this).is(":last-child") ){
                    $(this).delay(1500).fadeOut(1000, function(){

                        $(this).removeClass("active").next().addClass("active").fadeIn();
                        slide() ; 
                    })  
                } else {
                    $(this).delay(1500).fadeOut(1000, function(){

                        $(this).removeClass("active");
                        $(".slide div").eq(0).addClass("active").fadeIn();
                        slide() ; 
                    })
                }
            });
        }());

    // overlay on projects
    
    $(".project .photos div").hover(
        function(){
            $(this).find(":first-child").css("display","block");  
            $(this).css("display","block");
        },
        function(){
            $(this).find(":first-child").css("display","none");  
            
        }
    );
        
    $(".project ul li").on("click", function(){
        
        // modifiy classes
        
        $(this).addClass("activee").siblings().removeClass("activee") ; 
       
        // get custome attribut value
        
        var dataType = $(this).text() ; 
        
    
        // filter pictuers
    
        $(".project .photos div img").each(function(){
            
            if( dataType === "all" ){
                
                $(this).parent().css("display", "block");
                $(this).fadeIn(800)  ;
                
            } else {
                    
                if  ( $(this).data("type") == dataType ){

                    $(this).parent().css("display", "block");
                
                    $(this).fadeIn(800) ; 

                } else {
                    
                    $(this).fadeOut(800) ;
                    
                    $(this).parent().css("display", "none");
                }
            }
            
        });
        
    });
    
});










