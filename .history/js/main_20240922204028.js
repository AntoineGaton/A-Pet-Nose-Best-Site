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
    "use strict";  // Enforce strict mode for cleaner code and better error handling

    // Document ready block to ensure the DOM is fully loaded before executing
    $(document).ready(function () {
        
        // Toggle Navbar dropdowns on hover for larger screens (992px and above)
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                // On hover, trigger the dropdown toggle
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    // Close the dropdown on mouseout
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                // Remove hover effect on smaller screens
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        
        toggleNavbarMethod();  // Call the method on page load
        $(window).resize(toggleNavbarMethod);  // Reapply the method on window resize

        /*********** EmailJS Contact Form Submission ***********/
        // Initialize EmailJS
        var USER_ID = "jbPu3Eo8bor4gIrkJ";    // Your EmailJS user ID
        var SERVICE_ID = "service_0egd1t2";   // Your EmailJS service ID
        var TEMPLATE_ID = "template_0ev6bp9"; // Your EmailJS template ID

        emailjs.init(USER_ID);  // Initialize EmailJS with the provided user ID

        // Handle form submission with validation
        $("#contactForm").on('submit', function (e) {
            e.preventDefault();  // Prevent the default form submission

            // Retrieve form values
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            var $sendMessageButton = $("#sendMessageButton");

            // Clear any previous messages
            $('#success').html('');

            // Validate that all fields are filled
            if (name === "" || email === "" || subject === "" || message === "") {
                // Display error message for empty fields
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                $('#success > .alert-danger').append("<strong>Please fill out all fields before submitting.</strong>");
                $('#success > .alert-danger').append('</div>');
                return;  // Stop form submission
            }

            // Disable the send message button to prevent multiple submissions
            $sendMessageButton.prop("disabled", true);

            // Use EmailJS to send the form data
            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            }).then(
                function (response) {
                    // Show success message upon successful submission
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-success').append("<strong>Your message has been sent.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#contactForm').trigger("reset");  // Reset form fields
                },
                function (error) {
                    // Show error message if submission fails
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");  // Reset form fields after error
                }
            ).finally(function () {
                // Re-enable the send message button after completion
                setTimeout(function () {
                    $sendMessageButton.prop("disabled", false);
                }, 1000);
            });
        });

        // Clear any displayed success/error messages when the user starts typing
        $('#name').focus(function () {
            $('#success').html('');
        });

        /*********** Smooth Scroll for Navigation Menu ***********/
        // Smooth scrolling for anchor links starting with #
        $('a[href^="#"]').on('click', function (event) {
            event.preventDefault();  // Prevent default anchor behavior

            var target = this.hash;  // Get the target section based on hash
            var $target = $(target);

            // Animate the scroll to the target section
            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 1500, 'swing');  // Smooth scroll with a duration of 1500ms
        });

        /*********** Back to Top Button ***********/
        // Show the back-to-top button after scrolling 100px
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        // Scroll to the top of the page when the back-to-top button is clicked
        $('.back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');  // Smooth scroll to the top
            return false;
        });

        /*********** Initialize Date and Time Pickers ***********/
        // Initialize date picker
        $('#date').datetimepicker({
            format: 'L'  // Date format for the picker
        });

        // Initialize time picker
        $('#time').datetimepicker({
            format: 'LT'  // Time format for the picker
        });

      

    });  // End of document ready function

})(jQuery);  // Self-invoking function to avoid global namespace pollution
