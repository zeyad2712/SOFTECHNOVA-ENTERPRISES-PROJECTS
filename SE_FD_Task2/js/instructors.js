const nav = document.querySelector('.ezy__nav5');

document.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        nav.classList.add('navbar-blur');
    } else {
        nav.classList.remove('navbar-blur');
    }
});


// Staggered animation version
const teamItems = document.querySelectorAll('.ezy__team4-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 100); // 100ms delay between each card
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
});

teamItems.forEach(item => observer.observe(item));