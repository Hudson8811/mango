//header
var burger = $('.sh-burger');
var hMenu = $('.sh-menu');
burger.on('click', function (e) {
    e.preventDefault();

    if (hMenu.is(':visible')) {
        $(this).removeClass('sh-burger--active');
        hMenu.stop().slideUp(200);
    }
    else {

        $(this).addClass('sh-burger--active');
        hMenu.stop().slideDown(200);
    }
});
$(window).resize(function () {
    if (!burger.is(':visible')) {
        hMenu.attr('style', '');
    }
    if (!hMenu.is(':visible')) {
        burger.removeClass('sh-burger--active');
    }

});

var header = $('#masthead');
$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        header.removeClass('site-header--scrolled');
    }
    else {
        header.addClass('site-header--scrolled');
    }
});


    //end header
