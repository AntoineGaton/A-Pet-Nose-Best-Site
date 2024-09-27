function checkWidth() {
    var contactInfoRow = document.getElementById('contactInfoRow');
    if (window.innerWidth <= 460) {
        console.log('test');
        contactInfoRow.style.setProperty('padding-bottom', '0rem', 'important');
        contactInfoRow.style.setProperty('padding-top', '0rem', 'important');
    } else {
        contactInfoRow.style.display = '';
    }
}

// Run on page load
checkWidth();

// Run on window resize
window.addEventListener('resize', checkWidth);

// This function changes the opacity of the link with rel="noreferrer" to 0
document.addEventListener('DOMContentLoaded', async () => {
    await changeLinkOpacity();
});

async function changeLinkOpacity() {
    // Select the <a> element with rel="noreferrer"
    let link = document.querySelector('a[rel="noreferrer"]');

    // If the element exists, change its opacity
    if (link) {
        link.style.setProperty('opacity', '0', 'important'); // Adding !important
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await removeNoreferrerLink();
});

async function removeNoreferrerLink() {
    // Create a MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            const link = document.querySelector('a[href="https://elfsight.com/google-reviews-widget/?utm_source=websites&utm_medium=clients&utm_content=google-reviews&utm_term=127.0.0.1&utm_campaign=free-widget"]');
            if (link) {
                // Set opacity to 0 with !important
                link.style.setProperty('opacity', '0', 'important'); 
            }
        });
    });

    // Start observing the body for child nodes being added
    observer.observe(document.body, { childList: true, subtree: true });
}

// Function to handle back-to-top button visibility and smooth scrolling
(function() {
    var backToTopButton = document.querySelector('.back-to-top');
    
    // Show button after scrolling 200px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
            backToTopButton.style.opacity = "1";
        } else {
            backToTopButton.style.opacity = "0";
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 300);
        }
    });

    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

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
        window.location.href = 'tel:+19543356704';  // Initiate a phone call
    } else {
        // Try to initiate a phone call from a desktop device (VoIP app)
        try {
            window.location.href = 'tel:+19543356704';  // Try using VoIP if supported
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

        /*********** EmailJS Contact Form Submission ***********/
        // Check if the current page is 'contact.html'
        if (window.location.pathname.includes('contact.html')) {
            // Ensure EmailJS is initialized
            var USER_ID = "jbPu3Eo8bor4gIrkJ";  // Your EmailJS user ID
            var SERVICE_ID = "service_0egd1t2"; // Your EmailJS service ID
            var TEMPLATE_ID = "template_0ev6bp9"; // Your EmailJS template ID
            emailjs.init(USER_ID);  // Initialize EmailJS with the provided user ID

            // Contact form submission with validation
            $("#contactForm").on('submit', function (e) {
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
                    function (response) {
                        // If successful, show success message
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                        $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
                        $('#success > .alert-success').append('</div>');
                        $('#contactForm').trigger("reset");  // Reset the form fields
                    },
                    function (error) {
                        // If there's an error, show an error message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                        $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                        $('#success > .alert-danger').append('</div>');
                        $('#contactForm').trigger("reset");  // Reset the form on error as well
                    }
                ).finally(function () {
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
        }

        /*********** Toggle Navbar Dropdowns on Hover ***********/
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
        
        /*********** Smooth Scroll for Navigation Menu and Footer ***********/
        // Smooth scrolling for anchor links starting with #
        $('a[href^="#"]').on('click', function (event) {
            event.preventDefault();  // Prevent default anchor behavior

            var target = this.hash;  // Get the target section based on hash
            var $target = $(target);

            if ($target.length) {
                // Calculate the offset, accounting for any fixed headers
                var headerOffset = $('.your-fixed-header-class').outerHeight() || 0;
                var elementPosition = $target.offset().top;
                var offsetPosition = elementPosition - headerOffset;

                // Animate the scroll to the target section
                $('html, body').animate({
                    scrollTop: offsetPosition
                }, 1500, 'swing', function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
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

    });  // End of document ready function

})(jQuery);  // Self-invoking function to avoid global namespace pollution