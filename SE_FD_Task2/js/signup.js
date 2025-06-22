async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

document.querySelector('.form').addEventListener('submit', async function (e) {
    const username = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const password = document.querySelectorAll('input[type="password"]')[0];
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1];

    let valid = true;
    let message = "";

    if (!username.value.trim()) {
        valid = false;
        message += "Username is required.\n";
    }
    if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
        valid = false;
        message += "Enter a valid email address.\n";
    }
    if (!password.value) {
        valid = false;
        message += "Password is required.\n";
    }
    if (password.value.length < 6) {
        valid = false;
        message += "Password must be at least 6 characters.\n";
    }
    if (password.value !== confirmPassword.value) {
        valid = false;
        message += "Passwords do not match.\n";
    }

    if (!valid) {
        e.preventDefault();
        alert(message);
    } else {
        e.preventDefault(); // Prevent default to wait for hashing
        const hashedPassword = await hashPassword(password.value);
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', hashedPassword);

        alert("Form submitted successfully!");
        window.location.href = 'login.html';
    }
});




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