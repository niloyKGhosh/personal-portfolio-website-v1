$(document).ready(function() {
    let h = $(".about-fade").offset().top - 100;
    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop();
        if (scrollPosition >= h) {
            $(".ul-nav").addClass("sticky-nav");
        }
        else {
            $(".ul-nav").removeClass("sticky-nav");
        }
    });
});
