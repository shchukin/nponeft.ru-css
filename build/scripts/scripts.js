(function($) {

    /* Инициализация модалок */

    $('.mfp-handler').magnificPopup({
        type: 'inline',
        removalDelay: 200,
        showCloseBtn: false
    });


    /* Инпуты */


    /* placeholder в <select> */

    function selectPlaceholder($element) {
        if ($element.val() === 'placeholder') {
            $element.parent('.input').addClass('input--placeholder-is-chosen');
        } else {
            $element.parent('.input').removeClass('input--placeholder-is-chosen');
        }
    }

    $('select.input__widget').each(function () {
        selectPlaceholder($(this));
    }).on('change', function () {
        selectPlaceholder($(this));
    });


    /* input--expandable */
    function expandTextarea($element) {
        $element.css('height', 'auto');
        $element.css('height', ($element[0].scrollHeight + 2 * parseInt($element.css('border-width'), 10)) + 'px');
    }

    $('.input--expandable .input__widget').each(function () {
        expandTextarea($(this));
    }).on('input', function () {
        expandTextarea($(this));
    });


    /* input--error */
    $('.input__widget').on('focus', function () {
        $(this).parents('.input').removeClass('input--error');
        $(this).parents('.input').nextUntil(':not(.helper--error)').remove();
    });



    /* Табы */

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
