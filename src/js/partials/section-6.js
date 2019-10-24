function initMultiSlider(){
    swiperMultislider = new Swiper('.show__slider_active .swiper-container', {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
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
            el: '.show__slider_active .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.show__slider_active .swiper-button-next',
            prevEl: '.show__slider_active .swiper-button-prev',
        },
    });
}

initMultiSlider();

$(document).ready(function() {
    $('.show__link').click(function () {
        if (!$(this).hasClass('show__link_active')) {
            var data = $(this).data('type');
            $('.show__link').removeClass('show__link_active');
            $(this).addClass('show__link_active');
            $('.show__slider').removeClass('show__slider_active');
            $('.show__slider[data-type="'+data+'"]').addClass('show__slider_active');
            swiperMultislider.destroy(true, true);
            initMultiSlider();
        }
    });
});
