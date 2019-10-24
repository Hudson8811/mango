$(document).ready(function() {
    $('.fancybox-btn').fancybox({
        modal : true,
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
       $(this).fadeOut(300,function () {
           $(this).siblings('.modal-block__button_close').css("display", "flex");
           $(this).siblings('.modal-block__subtitle_success').css("display", "block");
       });
    });
});
