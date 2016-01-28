//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function () {

        console.log("js ready");

        //change nav div img opacity to start
        $('section nav div').css('opacity', '0.4');

        //hover over head image to bring up all bubbles
        $('section img#head').hover(
            function () {
                $('section nav div').css('visibility', 'visible');
            },
            function () {
                $('section nav div').css('visibility', 'hidden');
                return false;
            }); //end head hover

        //click head image all bubbles visible
        $('section img#head').click(
            function () {
                $('section nav div').css('opacity', '1')
                    .css('visibility', 'visible');
            },
            function () {
                $('section img#head').off('hover');
            }
        ); //end click head event

        console.log("js ready");

        // bike list trigger bubble
        $('table tr.bike').hover(
            function () {
                $('section nav div#bike').css('visibility', 'visible')
                    .css('opacity', '1');
            },
            function () {
                $('section nav div#bike').css('visibility', 'hidden');
            }); // end bike trigger

        //work list trigger
        $('table tr.work').hover(
            function () {
                $('section nav div#work').css('visibility', 'visible')
                    .css('opacity', '1');
            },
            function () {
                $('section nav div#work').css('visibility', 'hidden');
            }); // end work trigger

        //food list trigger
        $('table tr.food').hover(
            function () {
                $('section nav div#food').css('visibility', 'visible')
                    .css('opacity', '1');
            },
            function () {
                $('section nav div#food').css('visibility', 'hidden');
            }); // end food trigger
    
            //play list trigger
        $('table tr.play').hover(
            function () {
                $('section nav div#play').css('visibility', 'visible')
                    .css('opacity', '1');
            },
            function () {
                $('section nav div#play').css('visibility', 'hidden');
            }); // end food trigger


    }) //end ready
