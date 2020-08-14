$(function(){
    
   'use strict' ; 
   
    
    
    
    
    // trigile slider
    
    $('.slider').bxSlider({
        pager:true
    });
    
    
    
   // modify heade 
    $("body").css({
        paddingTop : $(".navbar").innerHeight() 
    });
    
    // scroll to the wanted place
    
    $(".navbar .links li a").click(function(){    
        
        $(this).parent().addClass("active").siblings().removeClass("active") ; 
        $("body, html").animate({
                
            scrollTop :  $("#" + $(this).data("value") ).offset().top + 1
        
        }, 1500) ; 
    
    });



    
    
    
    
// I did it but it has small bug with the footer part and it,s link :(

    // sync selected the current part     
    $(window).scroll(function(){
        
        $("body > div[id]").each(function(){
            
            // the current part i scroll to the sympole > is very important NOT use the sympole ==
            
            if( $(window).scrollTop() > $(this).offset().top ){
                
                // get the current part ID

                var id = $(this).attr("id") ;  
                
                // find the link with data value which equal to id
                
                $(".navbar .links li").removeClass("active") ; 
                    
                $('.navbar .links li a[data-value="'+ id +'"]').parent().addClass("active") ; 
                
            }
                
        });  
    });
    
    if ($(window).scrollTop() == 2865){
        console.log("last");
    }

    // Modifiy the height of window
    
    var myheader=  $(".header") ; 
    
    myheader.height($(window).height()) ; 

//    // my slider position
//    $(".header .bx-wrapper .bx-viewport").height($(window).height() - 45 / 2) ; 
       
    $(".header .slider").css("paddingTop", ($(window).height() - $(".slider div").height())/ 2)  ; 
    
    $(window).resize(function(){
       
        myheader.height($(window).height()) ; 
        
        // my slider dynamic height
        
        $(".header .slider").css("paddingTop", ($(window).height() - $(".slider div").height())/ 2) 
        
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










