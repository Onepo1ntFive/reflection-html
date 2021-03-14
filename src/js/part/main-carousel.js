(function () {
    const swiperSaleOptions = {
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
        lazy: true,
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: false,
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            }
        }
    };

    const swiperSaleSelector = document.querySelectorAll('.js-swiper-sale');

    Array.prototype.forEach.call(swiperSaleSelector, function(el, i){
        let swiperSale = new Swiper(el, swiperSaleOptions);
    });

    
})();
