function contentFadeIn(text) {
    const content = document.querySelector(text);
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (contentPosition < screenPosition) {
        content.classList.add('fade-in');
    }
}

window.addEventListener('scroll', () => {
    contentFadeIn('.about-fade');
    contentFadeIn('.resume-fade');
    contentFadeIn('.contact-fade');
});

