$(document).ready(function () {
    $('.fancybox-btn').fancybox({
        clickOutside: "close",
        smallBtn: false,
        buttons: false,
        touch: false
    });

    $('.modal-block__close').click(function () {
        $.fancybox.close();
    });

    $('.modal-block__button_close').click(function () {
        $.fancybox.close();
    });

    $('.modal-block__form').submit(function () {
        event.preventDefault();
        $(this).siblings('.modal-block__subtitle').fadeOut(300);
        $(this).fadeOut(300, function () {
            $(this).siblings('.modal-block__button_close').css("display", "flex");
            $(this).siblings('.modal-block__subtitle_success').css("display", "block");
        });
    });
});

var d = new Date();

var monthJs = d.getMonth() + 1;
var dayJs = d.getDate();
if (dayJs > 30) monthJs++;
if (monthJs > 12) monthJs = 1;
if (monthJs == 4) { dayJs = "28" } else { dayJs = "30" }
var output = dayJs + '.' + (monthJs < 10 ? '0' : '') + monthJs;
$('#dateJs').html(output);



new WOW().init();

function offWow() {
    if ($(window).width() <= 991) {
        $(".wow").removeClass("wow");
    }
}

$(document).ready(function () {
    offWow();
});

$(window).resize(function () {
    offWow();
 });
