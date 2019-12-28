// Smooth Scroll using jQuery
$(document).ready(function() {
    $('.ul-nav a').on('click', smoothScroll);
    
    $('#more-about-me').on('click', smoothScroll);
});

function smoothScroll(event) {
    if (this.hash != '') {
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900);
    }
}
