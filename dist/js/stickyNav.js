function stickyNavigation () {
    const about = document.querySelector('.about-fade');
    const navBar = document.querySelector('.ul-nav');
    const stickyNavPos = about.offsetTop - 100; // Subtracted 100 for appearing early

    if (window.scrollY >= stickyNavPos) {
        navBar.classList.add('sticky-nav');
        navBar.style.padding = '1rem';
    } else {
        navBar.classList.remove('sticky-nav');
        navBar.style.paddingTop = '3rem';
        navBar.style.paddingBottom = '3rem';
    }

}

window.addEventListener('scroll', stickyNavigation);