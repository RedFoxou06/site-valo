document.getElementById('scrollTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const burgerBtn = document.getElementById('burgerBtn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    nav.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('open');
        nav.classList.remove('open');
    });
});