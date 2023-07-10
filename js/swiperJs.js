const swiperHero = new Swiper('.swiperHero', {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
    },


});
