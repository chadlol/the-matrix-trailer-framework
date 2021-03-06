// Everything OK?
console.log('OK');

/* Lettering JS Plugin
* Reference: https://github.com/davatron5000/Lettering.js/wiki
*/

// default
// $('h1').lettering();

// with Words options
// $('h1').lettering('words');

// with Lines options
// $('h1').lettering('lines');

/* Media Element Player Plugin
* Reference: https://github.com/mediaelement/mediaelement/blob/master/docs/usage.md
*/

$('video').mediaelementplayer();


// Pill Selection
$('#pillContainer a').on('click', function(e){
    if ( $(this).attr('id') == 'red' ){     //RED PILL
        $('header').addClass('red');
        $('main').addClass('red');
        $('canvas').addClass('hide');
        $('#pillSelect h5').html('Welcome to the real world.');
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 4000);
    }
    else{                                   //BLUE PILL
        $('header').removeClass('red');
        $('main').removeClass('red');
        $('canvas').removeClass('hide');
        $('#pillSelect h5').html('This is your last chance. After this, there is no turning back.<span class="cursor"></span>');
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 2000);
    }

    $('#pillContainer a').removeClass('active');
    $(this).addClass('active');
});