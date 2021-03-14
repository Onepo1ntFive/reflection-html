(function () {
    const swiperMainOptions = {
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
        lazy: true,
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

    let windowWitdh = window.innerWidth;

    if (windowWitdh >= 1200) {
        swiperMainOptions.parallax = true;
    }

    const swiperMainSelector = document.querySelectorAll('.js-swiper-main');

    Array.prototype.forEach.call(swiperMainSelector, function(el, i){
        let swiperMain = new Swiper(el, swiperMainOptions);
    });

    
})();
