(function ($) {

    "use strict";

    // Wait until the document is fully loaded
    $(document).ready(function () {

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

        // Counter effect (no change)
        function visible(partial) {
            var $t = partial,
                $w = $(window),
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
                    $(this).animate({
                        Counter: $this.text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
            }
        });

        // Toggle menu for the hamburger icon
        function toggleMenu() {
            const menu = $('.menu-space');
            const hamburgerIcon = $('.hamburger-icon');
            
            // Toggle the active class for both the menu and the hamburger icon
            menu.toggleClass('active');
            hamburgerIcon.toggleClass('active');
        }

        // Add event listener to hamburger icon to toggle the menu
        $('.hamburger-icon').on('click', toggleMenu);

        // Get the stock status text and the button element
        var stockStatus = $('#stockStatus').text().trim();  // .trim() ensures no extra spaces are considered
        var buyNowButton = $('#buyNowButton');  // Button selector

        console.log("Stock Status: ", stockStatus);  // Debugging: check what the stock status is
        console.log("Buy Now Button: ", buyNowButton);  // Debugging: ensure button is correctly selected

        // Check if the stock status is "Out of Stock"
        if (stockStatus === "Out of Stock") {
            buyNowButton.addClass("disabled");  // Add the disabled class to the "Buy Now" button
            $('#stockStatus').css('color', 'red');  // Make the stock status text red
        }

        if (stockStatus === "In Stock") {
            $('#stockStatus').css('color', 'green');  // Make the stock status text red
        } 
        
     
    });

})(window.jQuery);
