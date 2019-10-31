$(document).ready(function() {
    $('.reviews__see-all').click(function () {
        $('.reviews__item').slideDown();
        $(this).fadeOut();
    });


    var collapsedHeightName = $('.reviews__name').css('maxHeight');
    var collapsedHeightRole = $('.reviews__role').css('maxHeight');
    var collapsedHeightText = $('.reviews__text').css('maxHeight');


    $('.reviews__name').each(function(){
        var $this = $(this);
        $this.data('natural', $this[0].scrollHeight);
    });
    $('.reviews__role').each(function(){
        var $this = $(this);
        $this.data('natural', $this[0].scrollHeight);
    });
    $('.reviews__text').each(function(){
        var $this = $(this);
        $this.data('natural', $this[0].scrollHeight);
    });


    $('.reviews__item').hover(function(){
        var $rName = $(this).find('.reviews__name').eq(0),
            $rRole = $(this).find('.reviews__role').eq(0),
            $rText = $(this).find('.reviews__text').eq(0),
            duration = 250;
        if ($rName.data('natural') > parseInt(collapsedHeightName)) $rName.animate({'maxHeight': $rName.data('natural')}, duration);
        if ($rRole.data('natural') > parseInt(collapsedHeightRole)) $rRole.animate({'maxHeight': $rRole.data('natural')}, duration);
        if ($rText.data('natural') > parseInt(collapsedHeightText)) $rText.animate({'maxHeight': $rText.data('natural')}, duration);
        $(this).animate({'zIndex': 1}, 0);
    },function () {
        var $rName = $(this).find('.reviews__name').eq(0),
            $rRole = $(this).find('.reviews__role').eq(0),
            $rText = $(this).find('.reviews__text').eq(0),
            duration = 250;
        $rName.animate({'maxHeight': collapsedHeightName}, duration);
        $rRole.animate({'maxHeight': collapsedHeightRole}, duration);
        $rText.animate({'maxHeight': collapsedHeightText}, duration);
        $(this).animate({'zIndex': 0}, duration);
    });
});
