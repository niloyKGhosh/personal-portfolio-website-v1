$(document).ready(function() {
    $('ul').wrap('<div class="nav-placeholder"></div>');
    $('nav-placeholder').height($('ul').outerHeight());
    $(window).scroll(function() {
        if($(window).scrollTop()){
            $('.ul-nav').addClass('sticky-nav');
        } else {
            $('.ul-nav').removeClass('sticky-nav');
        }
    });
});


