const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

console.dir(burger);


function toggleMenu() {
    const isOpen = burger.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
}

function closeMenu() {
    burger.classList.remove('is-open');
    nav.classList.remove('is-open');
}

burger.addEventListener('click', toggleMenu);

// Close when a link is tapped
nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});
