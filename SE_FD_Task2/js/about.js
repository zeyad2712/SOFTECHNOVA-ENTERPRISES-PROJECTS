const nav = document.querySelector('.ezy__nav5');
const btn = document.querySelector('.ezy__back-to-top');

document.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        nav.classList.add('navbar-blur');
        btn.classList.remove('d-none');
    } else {
        nav.classList.remove('navbar-blur');
        btn.classList.add('d-none');
    }
});

btn.addEventListener('click', function (e) {
    e.preventDefault;
    window.scrollTo({ top: 0 });
});


document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('#section1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
});