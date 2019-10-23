var swiperProtfolio = new Swiper('.section-5 .swiper-container', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    breakpoints: {
        0: {
            effect: 'slide',
            slidesPerView: 1,
            centeredSlides: false,
        },
        992: {
            effect: 'coverflow',
            slidesPerView: 'auto',
            centeredSlides: true,
        }
    },
    coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    navigation: {
        nextEl: '.section-5 .swiper-button-next',
        prevEl: '.section-5 .swiper-button-prev',
    },

});
