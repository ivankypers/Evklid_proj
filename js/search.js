const searchBtn = document.querySelector('.header__nav__search');
const searchMenu = document.querySelector('.search__menu');
const closeSearch = document.querySelector('.closed-search');
const searchBar = document.querySelector('.search__bar')

searchBtn.addEventListener(('click'), function () {
    searchMenu.classList.add('search__menu--active')
    searchBtn.classList.add('search-btn--hidden')
    searchBar.classList.add('search__bar--active')
})

closeSearch.addEventListener(('click'), function () {
    searchMenu.classList.remove('search__menu--active')
    searchBtn.classList.remove('search-btn--hidden')
    searchBar.classList.remove('search__bar--active')
})
