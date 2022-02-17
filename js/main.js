/* Header background - start */

( function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 20) { header.classList.add ('header-background-opacity-25'); }
        else { header.classList.remove ('header-background-opacity-25'); }

        if (window.pageYOffset > 40) { header.classList.add ('header-background-opacity-50'); }
        else { header.classList.remove ('header-background-opacity-50'); }

        if (window.pageYOffset > 60) { header.classList.add ('header-background-opacity-75'); }
        else { header.classList.remove ('header-background-opacity-75'); }

        if (window.pageYOffset > 80) { header.classList.add ('header-background-opacity-100'); }
        else { header.classList.remove ('header-background-opacity-100'); }

        if (window.pageYOffset > 20) { header.classList.add ('js-item-border-opacity-25'); }
        else { header.classList.remove ('js-item-border-opacity-25'); }

        if (window.pageYOffset > 40) { header.classList.add ('js-item-border-opacity-50'); }
        else { header.classList.remove ('js-item-border-opacity-50'); }
    }
} () );

/* Header background - end */

/* Burger menu - start */

( function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.main-menu');
    const menuCloseItem = document.querySelector('.main-menu__close');
    const menuLinks = document.querySelectorAll('.main-menu__item');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('main-menu__active')
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('main-menu__active')
    });
    if (window.innerWidth <= 750) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('main-menu__active');
            });
        };
    };
} () );

/* Burger menu - end */


/* Scroll for item menu - start */

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

/* Scroll for item menu - end */




