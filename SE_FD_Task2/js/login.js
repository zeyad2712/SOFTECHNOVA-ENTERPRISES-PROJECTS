// Validation on login
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const inputEmail = document.querySelector('input[type="email"]').value.trim();
        const inputPassword = document.querySelector('input[type="password"]').value;
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const hashedInputPassword = await hashPassword(inputPassword);

        if (!inputEmail || !inputPassword) {
            alert('Please enter both email and password.');
            return;
        }

        if (inputEmail === storedEmail && hashedInputPassword === storedPassword) {
            alert('Login successful!');
            window.location.href = 'courses.html';
            localStorage.clear();
        } else {
            alert('Invalid email or password.');
        }
    });
}





const eye1 = document.getElementById('eye1');
const eyeIcon = eye1.querySelector('i');

document.querySelectorAll('.eye').forEach(function (eyeBtn, idx) {
    eyeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const passwordField = this.parentElement.querySelector('input[type="password"], input[type="text"]');
        const icon = this.querySelector('i');
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});