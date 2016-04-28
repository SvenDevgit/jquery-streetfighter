$( document ).ready(function() {
    console.log( "ready!" );  

    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide(); 
        $('.ryu-ready').show(); 
    });
    $('.ryu').mouseleave(function(){
    	$('.ryu-ready').hide(); 
        $('.ryu-still').show(); 
      
    });
    $('.ryu').mousedown(function(){
    	$('.ryu-ready').hide(); 
        $('.ryu-throwing').show();  
        $('.hadouken').show().animate({left : '1000px'},function(){
                                                          $('.hadouken').hide().css('left','550px');
                                                         }
                                      );
                         });       
    $('.ryu').mouseup(function(){
        $('.ryu-throwing').hide();   
        $('.ryu-ready').show();  
        /*$('.hadouken').hide();*/  
    });  
    $('body').keydown(function(event){
        if (event.which == 88)	
        { $('.ryu-still').hide();
          $('.ryu-ready').hide();
          $('.ryu-cool').show();}	
        	   
    });
    $('body').keyup(function(event){
        if (event.which == 88)	
        { $('.ryu-cool').hide();
          $('.ryu-still').show();}	
        	   
    });
});