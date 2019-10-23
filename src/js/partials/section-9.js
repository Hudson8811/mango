var swiper = new Swiper('.portfolio .swiper-container', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
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
});