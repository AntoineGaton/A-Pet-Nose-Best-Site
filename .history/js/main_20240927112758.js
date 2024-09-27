// Utility Functions
// -----------------

/**
 * Checks if the user is on a mobile device.
 * @returns {boolean} True if on a mobile device, false otherwise.
 */
function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

/**
 * Initializes EmailJS with the user ID.
 * @param {string} userId - The EmailJS user ID.
 */
function initializeEmailJS(userId) {
    emailjs.init(userId);
}

// UI Functions
// ------------

/**
 * Adjusts the contact info row padding based on window width.
 */
function adjustContactInfoPadding() {
    const contactInfoRow = document.querySelector('.contactInfoRow');
    const padding = window.innerWidth <= 555 ? '0rem' : '1rem';
    contactInfoRow.style.setProperty('padding-bottom', padding, 'important');
    contactInfoRow.style.setProperty('padding-top', padding, 'important');
}

/**
 * Changes the opacity of the link with rel="noreferrer" to 0.
 */
async function hideNoreferrerLink() {
    const link = document.querySelector('a[rel="noreferrer"]');
    if (link) {
        link.style.setProperty('opacity', '0', 'important');
    }
}

/**
 * Removes or hides the Elfsight widget link.
 */
async function removeElfsightLink() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(() => {
            const link = document.querySelector('a[href^="https://elfsight.com/google-reviews-widget/"]');
            if (link) {
                link.style.setProperty('opacity', '0', 'important');
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Handles the visibility and functionality of the back-to-top button.
 */
function setupBackToTopButton() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
            backToTopButton.style.opacity = "1";
        } else {
            backToTopButton.style.opacity = "0";
            setTimeout(() => {
                backToTopButton.style.display = "none";
            }, 300);
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Google Maps Function
// --------------------

/**
 * Initializes and adds the Google Map.
 */
function initMap() {
    const fortLauderdale = { lat: 26.1224, lng: -80.1373 };
    const mapOptions = {
        zoom: 15,
        center: fortLauderdale,
        mapTypeId: "roadmap",
        disableDefaultUI: true,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        draggable: false,
        scrollwheel: false,
        gestureHandling: 'none'
    };
    
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    new google.maps.Marker({
        position: fortLauderdale,
        map: map,
        title: "Fort Lauderdale"
    });
}

// Event Listeners
// ---------------

document.addEventListener('DOMContentLoaded', async () => {
    await hideNoreferrerLink();
    await removeElfsightLink();
    setupBackToTopButton();
    
    // Call link event listener
    document.getElementById('call-link').addEventListener('click', (event) => {
        event.preventDefault();
        const phoneNumber = '+19544083625';
        
        if (isMobileDevice()) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            try {
                window.location.href = `tel:${phoneNumber}`;
            } catch (e) {
                console.log('VoIP application not available or tel protocol not supported.');
                alert('VoIP application not available. Please use your phone to call.');
            }
        }
    });
});

// Run on page load and window resize
adjustContactInfoPadding();
window.addEventListener('resize', adjustContactInfoPadding);

// jQuery Functions
// ----------------

(function ($) {
    "use strict";

    $(document).ready(function () {
        // EmailJS Contact Form Submission
        if (window.location.pathname.includes('contact.html')) {
            const USER_ID = "jbPu3Eo8bor4gIrkJ";
            const SERVICE_ID = "service_0egd1t2";
            const TEMPLATE_ID = "template_0ev6bp9";
            
            initializeEmailJS(USER_ID);

            $("#contactForm").on('submit', function (e) {
                e.preventDefault();
                
                const formData = {
                    name: $("input#name").val(),
                    email: $("input#email").val(),
                    subject: $("input#subject").val(),
                    message: $("textarea#message").val()
                };
                
                const $sendMessageButton = $("#sendMessageButton");
                $('#success').html('');

                if (Object.values(formData).some(val => val === "")) {
                    $('#success').html("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Please fill out all fields before submitting.</strong></div>");
                    return;
                }

                $sendMessageButton.prop("disabled", true);

                emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }).then(
                    function () {
                        $('#success').html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Your message has been sent. </strong></div>");
                        $('#contactForm').trigger("reset");
                    },
                    function () {
                        $('#success').html("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Sorry " + formData.name + ", it seems that our mail server is not responding. Please try again later!</strong></div>");
                        $('#contactForm').trigger("reset");
                    }
                ).finally(function () {
                    setTimeout(function () {
                        $sendMessageButton.prop("disabled", false);
                    }, 1000);
                });
            });

            $('#name').focus(function () {
                $('#success').html('');
            });
        }

        // Toggle Navbar Dropdowns on Hover
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

        // Back to Top Button (jQuery version)
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        $('.back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });
        
    });
})(jQuery);