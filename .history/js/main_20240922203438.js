// Initialize and add Google Map
function initMap() {
    // Coordinates for Fort Lauderdale
    const fortLauderdale = { lat: 26.1224, lng: -80.1373 };  
    
    // Create a new Google Map instance
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,  // Set initial zoom level
        center: fortLauderdale,  // Center map on Fort Lauderdale
        mapTypeId: "roadmap",  // Set map type to roadmap
        disableDefaultUI: true,  // Disable default map controls like zoom and street view
        zoomControl: false,  // Disable zoom control
        streetViewControl: false,  // Disable street view control
        mapTypeControl: false,  // Disable map type selector
        draggable: false,  // Disable dragging/panning
        scrollwheel: false,  // Disable zooming with the scroll wheel
        gestureHandling: 'none'  // Disable all gestures (touch, scroll, drag)
    });

    // Add a marker on Fort Lauderdale
    new google.maps.Marker({
        position: fortLauderdale,  // Position for the marker
        map: map,  // Specify which map to place the marker on
        title: "Fort Lauderdale"  // Tooltip text for the marker
    });
}

// Call link event listener to handle mobile and desktop devices
document.getElementById('call-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default action of the link

    // Function to detect if the user is on a mobile device
    function isMobileDevice() {
        return /Mobi|Android|iPhone/i.test(navigator.userAgent);  // Check user agent for mobile devices
    }

    // If mobile device, initiate phone call
    if (isMobileDevice()) {
        window.location.href = 'tel:+19544083625';  // Initiate a phone call
    } else {
        // Try to initiate a phone call from a desktop device (VoIP app)
        try {
            window.location.href = 'tel:+19544083625';  // Try using VoIP if supported
        } catch (e) {
            // Handle the case where VoIP isn't available
            console.log('VoIP application not available or tel protocol not supported.');  // Log error to console
            alert('VoIP application not available. Please use your phone to call.');  // Notify the user
        }
    }
});

// jQuery for handling various UI features
(function ($) {
    "use strict";  // Strict mode for better error handling and cleaner code

    // Dropdown on mouse hover for navbar
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {  // Only apply on screens larger than 992px
                // Hover effect for dropdowns
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');  // Trigger the dropdown on mouseover
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();  // Close the dropdown on mouseout
                });
            } else {
                // Disable hover effects on smaller screens
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();  // Initialize the method
        $(window).resize(toggleNavbarMethod);  // Reapply the method on window resize

        // Initialize EmailJS
        var USER_ID = "jbPu3Eo8bor4gIrkJ";  // Your EmailJS user ID
        var SERVICE_ID = "service_0egd1t2";  // Your EmailJS service ID
        var TEMPLATE_ID = "template_0ev6bp9";  // Your EmailJS template ID

        emailjs.init(USER_ID);  // Initialize EmailJS with the provided user ID

        // Contact form submission with validation
        $("#contactForm").on('submit', function(e) {
            e.preventDefault();  // Prevent the default form submission
            
            // Get values from the form inputs
            var name = $("input#name").val();  
            var email = $("input#email").val();  
            var subject = $("input#subject").val();  
            var message = $("textarea#message").val();  

            var $sendMessageButton = $("#sendMessageButton");  // Reference to the submit button

            // Clear any previous error messages
            $('#success').html('');

            // Custom validation for empty fields
            if (name === "" || email === "" || subject === "" || message === "") {
                // Display error message if any field is empty
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                $('#success > .alert-danger').append("<strong>Please fill out all fields before submitting.</strong>");
                $('#success > .alert-danger').append('</div>');
                return;  // Stop form submission if validation fails
            }

            // Disable the send message button to prevent multiple submissions
            $sendMessageButton.prop("disabled", true);

            // EmailJS send method to send the form data to the service
            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                from_name: name,  // Pass form values to the template
                from_email: email,
                subject: subject,
                message: message
            }).then(
                function(response) {
                    // If successful, show success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");  // Reset the form fields
                },
                function(error) {
                    // If there's an error, show an error message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");  // Reset the form on error as well
                }
            ).finally(function() {
                // Re-enable the send message button after submission
                setTimeout(function () {
                    $sendMessageButton.prop("disabled", false);
                }, 1000);
            });
        });

        // Clear success/error message when the user starts typing in the name field
        $('#name').focus(function () {
            $('#success').html('');  // Clear the success/error message on focus
        });
    });

    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();  // Prevent the default behavior of jumping to the section
    
        var target = this.hash;  // Get the target section
        var $target = $(target);
    
        // Animate the scroll to the target section
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 1500, 'swing');  // Adjust the 1500 value to control the speed (1500ms = 1.5s)
    });
    

    // Back to top button visibility and scroll behavior
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');  // Show the button when scrolled down
        } else {
            $('.back-to-top').fadeOut('slow');  // Hide the button when scrolled up
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');  // Smooth scroll to the top
        return false;
    });

    // Initialize date and time pickers
    $('#date').datetimepicker({
        format: 'L'  // Date format
    });
    $('#time').datetimepicker({
        format: 'LT'  // Time format
    });

    // Testimonials carousel settings
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,  // Animation speed
        dots: true,  // Show dots for navigation
        loop: true,  // Enable looping
        responsive: {
            0:{
                items:1  // 1 item for small screens
            },
            576:{
                items:1  // 1 item for medium screens
            },
            768:{
                items:2  // 2 items for larger screens
            },
            992:{
                items:3  // 3 items for desktop screens
            }
        }
    });

})(jQuery);  // Self-executing function to avoid global namespace pollution