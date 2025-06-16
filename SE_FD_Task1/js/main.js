const texts = ["Web Developer", "UI/UX Designer", "Freelancer"];
const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 50);
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1200);
        } else {
            setTimeout(typeWriter, 100);
        }
    }
}
typeWriter();

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function showpopup1() {
    popup1.classList.remove("d-none");
    popup2.classList.add("d-none");
    popup3.classList.add("d-none");
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
}
function showpopup2() {
    popup1.classList.add("d-none");
    popup2.classList.remove("d-none");
    popup3.classList.add("d-none");
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
}

function showpopup3() {
    popup1.classList.add("d-none");
    popup2.classList.add("d-none");
    popup3.classList.remove("d-none");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
}

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.hero-section').classList.add('visible');
});
