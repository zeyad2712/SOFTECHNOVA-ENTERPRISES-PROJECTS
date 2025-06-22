const nav = document.querySelector('.ezy__nav5');

document.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        nav.classList.add('navbar-blur');
    } else {
        nav.classList.remove('navbar-blur');
    }
});

