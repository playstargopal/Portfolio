$(document).ready(function(){
    $(window).scroll(function(){
  
        if ($(window).scrollTop() > 20){
           
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    });
  

    // toggle menu/navbar script 
    $('.icon').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.icon i').toggleClass("active");
    });
    
});
