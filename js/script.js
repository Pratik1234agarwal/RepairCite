$(function() {
    "use strict";
    var toggleAffix = function(affixElement, scrollElement, wrapper) {
        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;
        if (scrollElement.scrollTop() >= top) {
            wrapper.height(height);
            affixElement.addClass("affix");
        } else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }
    };
    $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');
        ele.before(wrapper);
        $(window).on('scroll', function() {
            toggleAffix(ele, $(this), wrapper);
        });
        toggleAffix(ele, $(window), wrapper);
    });
    $('[data-toggle="tooltip"]').tooltip()
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
    if ($('#datePicker').length) {
        $('#datePicker').datepicker({
            format: 'mm/dd/yyyy'
        })
    }
});
document.addEventListener('click', function chnageCount(evt) {
    var counterBtn = evt.target;
    if (!counterBtn.closest('.js-counter-btn')) return;
    var counterInput = counterBtn.closest('.js-counter').querySelector('.js-counter-value');
    switch (counterBtn.getAttribute('data-action')) {
        case 'plus':
            counterInput.value = Number(counterInput.value) + 1;
            break;
        case 'minus':
            counterInput.value = Number(counterInput.value) - 1;
            break;
    }
});