$(document).ready(function(){
    $(window).scroll(function(){
  
        if ($(window).scrollTop() > 20){
           
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
        
    });
  

    // toggle menu/navbar script 
    $('.icon').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.icon i').toggleClass("active");
    });
    
});
