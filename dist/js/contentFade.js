function contentFadeIn(text) {
    var content = document.querySelector(text);
    var contentPosition = content.getBoundingClientRect().top;
    console.log(contentPosition);
    var screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add('fade-in');
    }
}

window.addEventListener('scroll', function () {
    contentFadeIn('.about-fade');
    contentFadeIn('.resume-fade');
    contentFadeIn('.contact-fade');
  });