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
} () )
