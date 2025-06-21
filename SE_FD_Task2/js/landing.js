document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.count-up');
    let started = false;

    function animateCount(counter) {
        const target = +counter.getAttribute('data-target');
        const isPercent = counter.textContent.includes('%');
        const isPlus = counter.textContent.includes('+');
        let start = 0;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / target));
        const increment = target / (duration / stepTime);

        function updateCount() {
            start += increment;
            if (start < target) {
                counter.textContent = Math.floor(start) + (isPlus ? '+' : '') + (isPercent ? '%' : '');
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target + (isPlus ? '+' : '') + (isPercent ? '%' : '');
            }
        }
        updateCount();
    }

    function startCounting(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                counters.forEach(counter => animateCount(counter));
                started = true;
                observer.disconnect();
            }
        });
    }

    const section = document.querySelector('.ezy__numbers12');
    if (section) {
        const observer = new IntersectionObserver(startCounting, { threshold: 0.5 });
        observer.observe(section);
    }
});


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
    document.querySelector('.ezy__header42-img').classList.add('ezy__header42-imganimate');
    document.querySelector('.ezy__header42-heading').classList.add('ezy__header42-textanimate');
    document.querySelector('.ezy__header42-sub-heading ').classList.add('ezy__header42-textanimate');
    document.querySelector('.ezy__header42-btn').classList.add('ezy__header42-textanimate');
});



const serviceSection = document.querySelector('.ezy__service20');
const serviceAnimClass = 'services-animation';

const serviceObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serviceSection.classList.remove(serviceAnimClass); // restart animation
                void serviceSection.offsetWidth; // force reflow
                serviceSection.classList.add(serviceAnimClass);
                observer.disconnect(); // Stop observing after first trigger
            }
        });
    },
    { threshold: 0.3 }
);

if (serviceSection) serviceObserver.observe(serviceSection);


const aboutsection = document.querySelector('.ezy__about15');
const aboutAnimClass = 'about-animation';
const aboutObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutsection.classList.remove(aboutAnimClass); // restart animation
                void aboutsection.offsetWidth; // force reflow
                aboutsection.classList.add(aboutAnimClass);
                observer.disconnect(); // Stop observing after first trigger
            }
        });
    },
    { threshold: 0.3 }
);
if (aboutsection) aboutObserver.observe(aboutsection);


const contactsection = document.querySelector('.ezy__contact1');
const contactAnimClass = 'contact-animation';
const contactObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactsection.classList.remove(contactAnimClass); // restart animation
                void contactsection.offsetWidth; // force reflow
                contactsection.classList.add(contactAnimClass);
                observer.disconnect(); // Stop observing after first trigger
            }
        });
    },
    { threshold: 0.3 }
);
if (contactsection) contactObserver.observe(contactsection);