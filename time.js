//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function () {

        console.log("js ready 1");

        //change nav div img opacity to start
        //$('section nav div').css('opacity', '0.4');

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
                $('section nav div')
                    .css('visibility', 'visible')
                    .css('opacity', '1.0');
            }
        ); //end click head event

        $('section img#head').click(
            function () {
                $('aside table, h3#date').css('visibility', 'visible');
            });
        console.log("js ready 2");


        // bike list trigger bubble
        $('table tr.bike').hover(
            function () {
                $('section nav div#bike')
                    .css('visibility', 'visible')
                    .css('opacity', '1');
            },
            function () {
                $('section nav div#bike')
                    .css('visibility', 'hidden')
                    .css('opacity', '0.6');

                return false;
            }); // end bike trigger

        //work list trigger
        $('table tr.work').hover(
            function () {
                $('section nav div#work')
                    .css('visibility', 'visible')
                    .css('opacity', '1');
            },
            function () {
                $('section nav div#work')
                    .css('visibility', 'hidden')
                    .css('opacity', '0.6');
                return false;
            }); // end work trigger

        //food list trigger
        $('table tr.food').hover(
            function () {
                $('section nav div#food')
                    .css('visibility', 'visible')
                    .css('opacity', '1');
            },
            function () {
                $('section nav div#food')
                    .css('visibility', 'hidden')
                    .css('opacity', '0.6');
                return false;
            }); // end food trigger

        //play list trigger
        $('table tr.game').hover(
            function () {
                $('section nav div#game')
                    .css('transition-timing-function', 'ease')
                    .css('visibility', 'visible')
                    .css('opacity', '1');
            },
            function () {
                $('section nav div#game')
                    .css('visibility', 'hidden')
                    .css('opacity', '0.6');
                return false;
            }); // end play trigger

        console.log("js ready 3");
        return false;
    }) //end ready
