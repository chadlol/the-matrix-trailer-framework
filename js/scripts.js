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
        $('canvas').addClass('hide');
        $('#pillSelect h5').html('Welcome to the real world.');
    }
    else{                                   //BLUE PILL
        $('header').removeClass('red');
        $('canvas').removeClass('hide');
        $('#pillSelect h5').html('This is your last chance. After this, there is no turning back.<span class="cursor"></span>');
    }

    $('#pillContainer a').removeClass('active');
    $(this).addClass('active');
});
