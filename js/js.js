$(document).ready(function(){
    $(window).scroll(function(){
       if($(this).scrollTop()>=300){
           $("#navbar").addClass("new-nav");
       }
       else{
           $("#navbar").removeClass("new-nav");
       }
   });     

   $("a.scroll").on('click', function(event) {
     if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
      });
     }});

  
});