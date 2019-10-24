$(document).ready(function() {
    $('.reviews__see-all').click(function () {
        $('.reviews__item').slideDown();
        $(this).fadeOut();
    });
});