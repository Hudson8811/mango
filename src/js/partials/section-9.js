var swiperProtfolio = new Swiper('.portfolio .swiper-container', {
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
    pagination: {
        el: '.portfolio .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.portfolio .swiper-button-next',
        prevEl: '.portfolio .swiper-button-prev',
    },
    on:{
        init: function () {
            var slide = $('.portfolio .swiper-slide-active');
            $('.portfolio__title').html(slide.find('.hidden-content__title').html());
            $('.portfolio__text').html(slide.find('.hidden-content__text').html());
        },
        transitionEnd: function () {
            var slide = $('.portfolio .swiper-slide-active');
            $('.portfolio__title').html(slide.find('.hidden-content__title').html());
            $('.portfolio__text').html(slide.find('.hidden-content__text').html());
        },
    }
});