const container = document.getElementById('container');
const registerBtn = document.getElementById('cadastre-se');
const loginBtn = document.getElementById('login-2');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
