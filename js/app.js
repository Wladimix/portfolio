(function() {
    const swiper = new Swiper('.projects-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        autoHeight: false,
        speed: 400,
        simulateTouch: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination-custom',
            clickable: true,
            bulletElement: 'span',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        navigation: false,
    });
    window.addEventListener('load', () => swiper.update());
})();
