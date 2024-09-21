// Initialize and add Google Map
function initMap() {
    const fortLauderdale = { lat: 26.1224, lng: -80.1373 };  // Set Fort Lauderdale coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: fortLauderdale,
        mapTypeId: "roadmap",
        disableDefaultUI: true, // Disable UI elements like zoom, street view
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        draggable: false,  // Disables panning/moving the map
        scrollwheel: false,  // Disables zooming with mouse scroll
        gestureHandling: 'none'  // Disables all touch gestures and mouse interactions
    });

    // Add a marker for Fort Lauderdale
    new google.maps.Marker({
        position: fortLauderdale,
        map: map,
        title: "Fort Lauderdale"  // Marker title
    });
}

// Add an event listener to the call link
document.getElementById('call-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default behavior of the tel: link

    // Function to detect if the user is on a mobile device
    function isMobileDevice() {
        // Checks if the user agent matches common mobile devices
        return /Mobi|Android|iPhone/i.test(navigator.userAgent);
    }

    // Initiate a phone call or handle VoIP for desktop
    if (isMobileDevice()) {
        window.location.href = 'tel:+19544083625';  // Mobile devices: trigger phone call
    } else {
        try {
            window.location.href = 'tel:+19544083625';  // Desktop: try using a VoIP app
        } catch (e) {
            console.log('VoIP application not available or tel protocol not supported.');  // Handle VoIP error
            alert('VoIP application not available. Please use your phone to call.');  // Notify user of error
        }
    }
});

// jQuery for various page interactions
(function ($) {
    "use strict";

    // Dropdown on mouse hover for navbar
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                // Add hover events for dropdown
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');  // Remove hover events on mobile
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);  // Adjust behavior on window resize

        // Initialize EmailJS
        var USER_ID = "jbPu3Eo8bor4gIrkJ"; // Your EmailJS user ID
        var SERVICE_ID = "service_0egd1t2"; // Your EmailJS service ID
        var TEMPLATE_ID = "template_0ev6bp9"; // Your EmailJS template ID

        emailjs.init(USER_ID);  // Initialize EmailJS with user ID

        // Contact form submission with validation
$("#contactForm").on('submit', function(e) {
    e.preventDefault();  // Prevent form submission

    // Get form values
    var name = $("input#name").val();
    var email = $("input#email").val();
    var subject = $("input#subject").val();
    var message = $("textarea#message").val();

    var $sendMessageButton = $("#sendMessageButton");

    // Clear previous error messages
    $('#success').html('');

    // Custom validation for empty fields
    if (name === "" || email === "" || subject === "" || message === "") {
        $('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
        $('#success > .alert-danger').append("<strong>Please fill out all fields before submitting.</strong>");
        $('#success > .alert-danger').append('</div>');
        return;  // Stop the submission if validation fails
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
            $('#contactForm').trigger("reset");  // Reset the form
        },
        function(error) {
            // If there's an error, show error message
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
   
        // Remove any success or error messages when the user starts typing in the name field
        $('#name').focus(function () {
            $('#success').html('');
        });
    });
    


    // Back to top button behavior
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

    // Date and time picker initialization
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });

    // Testimonials carousel settings
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