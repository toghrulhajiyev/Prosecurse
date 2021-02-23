const hamburger = document.querySelector("#hamburger");
const navUL = document.querySelector(".nav-menu");
hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});