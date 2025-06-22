const nav = document.querySelector('.ezy__nav5');

document.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        nav.classList.add('navbar-blur');
    } else {
        nav.classList.remove('navbar-blur');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Animate container
    const container = document.querySelector('.courses-animate-container');
    const cards = document.querySelectorAll('.courses-animate-card');

    if (container) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    container.classList.add('animated-fadeInUp');
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });
        observer.observe(container);
    }

    // Animate cards with stagger
    if (cards.length) {
        const cardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    // Stagger effect
                    setTimeout(() => {
                        entry.target.classList.add('animated-fadeInUp');
                    }, idx * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(card => {
            cardObserver.observe(card);
        });
    }
});