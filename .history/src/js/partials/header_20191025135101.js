//header
var burger = $('.sh-burger');
var hMenu = $('.sh-menu');
var hContacts = $('.sh-contacts');

function toggleMenu() {
    if ($(window).width() > 815) {
        if (hMenu.is(':visible')) {
            $(this).removeClass('sh-burger--active');
            hMenu.stop().slideUp(200);
        }
        else {

            $(this).addClass('sh-burger--active');
            hMenu.stop().slideDown(200);
        }
    }

    if ($(window).width() <= 815) {
        if (hMenu.is(':visible')) {
            $(this).removeClass('sh-burger--active');
            hContacts.stop().fadeOut(200);
            setTimeout(function () {
                hMenu.stop().slideUp(200);
            }, 150);
        }
        else {
            $(this).addClass('sh-burger--active');
            hMenu.stop().slideDown(200);
            setTimeout(function () {
                hContacts.stop().fadeIn(200/*, function () {
                    $(this).css('display', 'flex');
                }*/);
            }, 200);

        }
    }
}


burger.on('click', function (e) {
    e.preventDefault();



});
$(window).resize(function () {
    if (!burger.is(':visible')) {
        hMenu.attr('style', '');
        hContacts.attr('style', '');
    }
    if (!hMenu.is(':visible')) {
        burger.removeClass('sh-burger--active');
    }

});

var links = [];

$('.sh-menu__link').each(function (i) {
    links[i] = $(this).attr('href');
});


var header = $('#masthead');
$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        header.removeClass('site-header--scrolled');
    }
    else {
        header.addClass('site-header--scrolled');
    }

    var scrollDistance = $(window).scrollTop();
    if (!burger.is(':visible')) {
        $.each(links, function (index, value) {
            if ($(value).position().top <= scrollDistance + 200) {
                $('.sh-menu__link--active').removeClass('sh-menu__link--active');
                $('.sh-menu__link').eq(index).addClass('sh-menu__link--active');
            }
        });
    });

$(document).ready(function () {
    $(".sh-menu__link").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 500);
    });

    $('.sh-menu__link').click(function () {
        if (burger.is(':visible')) {
            toggleMenu();
        }
    });
});
    //end header
