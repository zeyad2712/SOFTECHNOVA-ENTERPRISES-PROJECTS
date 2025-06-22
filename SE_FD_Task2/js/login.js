form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');

    if (!inputEmail.value.trim() || !inputPassword.value) {
        alert('Please enter both email and password.');
        return;
    }

    const email = inputEmail.value.trim();
    const password = inputPassword.value;
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const hashedInputPassword = await hashPassword(password);

    if (email === storedEmail && hashedInputPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = 'index.html';
        localStorage.clear();
    } else {
        alert('Invalid email or password.');
    }
});
