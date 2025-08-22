(function($) {

    /* Используем методы siblings и children чтобы не искать вглубь, и не натолкнуться на вложенные табы */
    $('.tabs__tag').click(function() {

        /* Кнопки */
        $(this).siblings('.tabs__tag').removeClass('tabs__tag--current');
        $(this).addClass('tabs__tag--current');

        /* Тела табов */
        const index = $(this).index();
        const $tabsBodies = $(this).parent('.tabs__navigation').siblings('.tabs__bodies');
        $tabsBodies.children('.tabs__body').removeClass('tabs__body--current');
        $tabsBodies.children('.tabs__body').eq(index).addClass('tabs__body--current');
    });

})(jQuery);
