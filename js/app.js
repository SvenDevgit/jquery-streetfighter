$( document ).ready(function() {
    console.log( "ready!" );  

    $('.streetfighter-logo').fadeIn(3000)
     .fadeOut(3000, function(){
                        $('.brought-by').append('<p>Brought by...</p>')
                        .css('font-size','30px')
                        .fadeIn(3000)
                        .fadeOut(3000, function(){
                            $('.jquery-logo').fadeIn(3000)
                            .fadeOut(3000, function(){
                                $('.info-text').fadeIn(1000);
                            }); 
                        });
      });  
                 
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide(); 
        $('.ryu-ready').show(); 
    })
    .mouseleave(function(){
    	$('.ryu-ready').hide(); 
        $('.ryu-still').show(); 
      
    })
    .mousedown(function(){
        playHadouken();
    	$('.ryu-ready').hide(); 
        $('.ryu-throwing').show();  
        $('.hadouken').finish().show().animate({left : '1000px'},function(){
                                                          $(this).hide().css('left','550px');
                                                         }
                                      );
                         })       
    .mouseup(function(){
        $('.ryu-throwing').hide();   
        $('.ryu-ready').show();  
        /*$('.hadouken').hide();*/  
    });  
    $('body').keydown(function(event){
        if (event.which == 88)	
        { $('.ryu-still').hide();
          $('.ryu-ready').hide();
          $('.ryu-cool').show();}	
        	   
    })
    .keyup(function(event){
        if (event.which == 88)	
        { $('.ryu-cool').hide();
          $('.ryu-still').show();}	
        	   
    });
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};

