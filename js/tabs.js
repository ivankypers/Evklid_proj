let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');
let tabsImg = document.querySelector('.work__right')

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) {
            btn.classList.remove('tabs-nav__btn--active')
        })
        e.currentTarget.classList.add('tabs-nav__btn--active')


        tabsItem.forEach(function (element) {
            element.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-taget="${path}"]`).classList.add('tabs-item--active')

        tabsImg.classList.remove(`tabs-bg--one`)
        tabsImg.classList.remove(`tabs-bg--two`)
        tabsImg.classList.remove(`tabs-bg--three`)
        tabsImg.classList.remove(`tabs-bg--four`)
        tabsImg.classList.add(`tabs-bg--${path}`)


    });


})
