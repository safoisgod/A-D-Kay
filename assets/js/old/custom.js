(function ($) {

    "use strict";

    // Scroll event to change header background color
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var header = $('header');
        var scrollStop = $('#scroll-stop').offset().top; // Get the position of the #scroll-stop section
    
        // Check if we have passed the scroll-stop section
        if (scroll >= scrollStop) {
            // If we passed scroll-stop, make the header fixed and solid white
            header.addClass("fixed").addClass("scrolled");
        } else {
            // If we're above scroll-stop, remove the fixed class and keep it transparent
            header.removeClass("fixed").removeClass("scrolled");
        }
    });
    
    
    
    
    



    // Page loading animation
    $(window).on('load', function () {
        if ($('.cover').length) {
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function () {
            setTimeout(function () {
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });

    const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Counter effect (no change)
    function visible(partial) {
        var $t = partial,
            $w = jQuery(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
    }

    $(window).scroll(function () {
        if (visible($('.count-digit'))) {
            if ($('.count-digit').hasClass('counter-loaded')) return;
            $('.count-digit').addClass('counter-loaded');

            $('.count-digit').each(function () {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    })


    function toggleMenu() {
        const menu = document.querySelector('.menu-space');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        menu.classList.toggle('active');
        hamburgerIcon.classList.toggle('active');
    }

})(window.jQuery);



