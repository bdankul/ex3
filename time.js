//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    //change nav div img opacity to start
    $('section nav div').css('opacity','0.4');
    
    //hover over head image to bring up all bubbles
    $('section img#head').hover(
        function(){
            $('section nav div').css('visibility','visible')},
        function(){
        $('section nav div').css('visibility','hidden');
            return false;
    }); //end head hover
    
    //click head image all bubbles visible
    $('section img#head').click(
        function(){
            $('section nav div')
                .css('opacity','1')
                .css('visibility','visible');
            return false;
        }); //end click head event
    
}) //end ready