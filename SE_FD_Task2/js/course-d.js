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


// --- Course search filter ---
const searchInput = document.getElementById('courseSearch');
if (searchInput) {
    searchInput.addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
            const title = card.querySelector('.card-title');
            if (title && title.textContent.toLowerCase().includes(searchValue)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}


// Scroll animation for cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.cards-hold .card');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Function to animate cards when they come into view
    function animateCardsOnScroll() {
        cards.forEach((card, index) => {
            if (isInViewport(card) && !card.classList.contains('animate')) {
                // Add delay based on index for staggered effect
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 20); // 100ms delay between each card
            }
        });
    }

    // Initial check
    animateCardsOnScroll();

    // Check on scroll
    window.addEventListener('scroll', animateCardsOnScroll);
});