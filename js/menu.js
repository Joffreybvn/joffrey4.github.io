let thisPage;

let init = () => {
    window.parent.initMenu((callback) => {
        setMenu(callback)
    });
    return true
};

function setMenu(pathname) {
    switch(pathname) {

        case "/about.html":
            document.getElementById("about-svg").classList.add('menu-icon-activated');
            thisPage = 'about-svg';
            break;

        case "/skills.html":
            document.getElementById("skills-svg").classList.add('menu-icon-activated');
            thisPage = 'skills-svg';
            break;

        case "/gallery.html":
            document.getElementById("gallery-svg").classList.add('menu-icon-activated');
            thisPage = 'gallery-svg';
            break;

        case "/contact.html":
            document.getElementById("contact-svg").classList.add('menu-icon-activated');
            thisPage = 'contact-svg';
            break;

        case "/404.html":
            break;

        case "/index.html":
        default:
            document.getElementById("home-svg").classList.add('menu-icon-activated');
            thisPage = 'home-svg';
    }
}

let menuOver = (svg) => {
    document.getElementById(svg).classList.add('menu-icon-activated')
};

let menuOut = (svg) => {
    if (svg !== thisPage) {
        document.getElementById(svg).classList.remove('menu-icon-activated')
    }
};