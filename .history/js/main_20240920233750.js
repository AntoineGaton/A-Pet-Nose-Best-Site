// Initialize and add Google Map
function initMap() {
    const fortLauderdale = { lat: 26.1224, lng: -80.1373 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: fortLauderdale,
        mapTypeId: "roadmap",
        disableDefaultUI: true,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        draggable: false,  // Disables panning/moving the map
        scrollwheel: false,  // Disables zooming with the mouse scroll wheel
        gestureHandling: 'none'  // Disables all touch gestures and mouse interactions
    });

    // Add a marker for Fort Lauderdale
    new google.maps.Marker({
    position: fortLauderdale,
    map: map,
    title: "Fort Lauderdale"
    });
}

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

