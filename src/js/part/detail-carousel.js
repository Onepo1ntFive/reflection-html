(function () {
    const swiperDetailOptions = {
        lazy: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    };

    const swiperDetail = new Swiper(document.querySelector('.js-swiper-detail'), swiperDetailOptions);
})();
