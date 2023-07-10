const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');

burger.addEventListener(('click'), function () {
    burger.classList.toggle('burger--active')
    burgerMenu.classList.toggle('burger__menu--show')
});
