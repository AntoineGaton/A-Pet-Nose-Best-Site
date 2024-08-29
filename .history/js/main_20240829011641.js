 // Function to load an external HTML file
 function loadHTML(id, filename) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(id).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}

// Load header.html into the header div
loadHTML("navbarCollapse", "menu.html");

// Add an event listener to the call link
document.getElementById('call-link').addEventListener('click', function(event) {
    // Prevent the default behavior of the link (which would normally trigger the tel: link immediately)
    event.preventDefault();

    // Function to detect if the user is on a mobile device
    function isMobileDevice() {
        // Check the user agent string to see if it matches common mobile devices
        return /Mobi|Android|iPhone/i.test(navigator.userAgent);
    }

    // Check if the user is on a mobile device
    if (isMobileDevice()) {
        // If on a mobile device, initiate a phone call using the tel: protocol
        window.location.href = 'tel:+19544083625';
    } else {
        // If on a desktop device, try to open a VoIP application using the tel: protocol
        try {
            window.location.href = 'tel:+19544083625';
        } catch (e) {
            // If the tel: protocol isn't supported (no VoIP application available), handle the error
            // Log the error to the console for debugging purposes
            console.log('VoIP application not available or tel protocol not supported.');

            // Optionally, notify the user that a VoIP application is required or suggest using their phone
            alert('VoIP application not available. Please use your phone to call.');
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to remove the Elfsight link
    function removeElfsightLink() {
        var elfsightLink = document.querySelector('a[href*="elfsight.com/google-reviews-widget"]');
        if (elfsightLink) {
            elfsightLink.remove();
            console.log('Elfsight link removed');
        }
    }

    // Initial check
    removeElfsightLink();

    // Create an observer to watch for added nodes
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                removeElfsightLink();
            }
        });
    });

    // Start observing the document body for child elements being added
    observer.observe(document.body, { childList: true, subtree: true });
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

