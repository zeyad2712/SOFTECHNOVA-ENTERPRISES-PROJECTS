const nav = document.querySelector('.ezy__nav5');

document.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        nav.classList.add('navbar-blur');
    } else {
        nav.classList.remove('navbar-blur');
    }
});



// Card animation
document.addEventListener('DOMContentLoaded', function () {
    const animateContainer = document.querySelector('.courses-animate-container');
    const animateCards = document.querySelectorAll('.courses-animate-card');

    // Make container visible immediately
    animateContainer.style.opacity = '1';

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Function to animate cards when they come into view
    function animateCardsOnScroll() {
        animateCards.forEach((card, index) => {
            if (isInViewport(card)) {
                // Add delay based on index for staggered effect
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.classList.add('animated-fadeInUp');
                }, index * 100); // 100ms delay between each card
            }
        });
    }

    // Initial check
    animateCardsOnScroll();

    // Check on scroll
    window.addEventListener('scroll', animateCardsOnScroll);
});

