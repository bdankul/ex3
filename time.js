//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function () {

        console.log("js ready");

        //change nav div img opacity to start
        $('section nav div').css('opacity', '0.4');

        //click head image all bubbles visible
        $('section img#head').click(function () {
            $('section nav div').css('visibility', 'visible').off('hover');
        }); //end click head event    
        //hover over head image to bring up all bubbles
        $('section img#head').hover(
            function () {
                $('section nav div').css('visibility', 'visible')
            },
            function () {
                $('section nav div').css('visibility', 'hidden');
            }); //end head hover

        //click head image all bubbles visible
        $('section img#head').click(function () {
            $('section nav div').toggleClass('toggle');
            return false;
        }); //end click head event

        console.log("js ready");

    }) //end ready
