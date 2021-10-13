/* 
scripts.js
Jason Miles

handles animations as well as contact form validation
*/

$(document).ready(function() {

    // navbar: transparent -> blue on scroll
    $(window).scroll(function () {
        // nav listener
        if ($(this).scrollTop() >= 400) {
            $('#site-navbar').css({'background-image': 'linear-gradient(to left, #7c71c1, darkslateblue)'});
        } else {
            $('#site-navbar').css({'background':'transparent'});
        }

        // animation listener
        handleScrollAnimation();     
    });

    // scrolling animation
    const anim_elements_up = document.querySelectorAll('.anim_element');
    const anim_elements_left = document.querySelectorAll('.anim_header');

    // site message
    const site_message_els = document.querySelectorAll('.anim_type');

    // in view
    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight - offset)
        );
    }

    const displayAnimationUp = (element) => {
        element.classList.add("in_up");
    }

    const displayAnimationLeft = (element) => {
        element.classList.add("in_left");
    }

    const displayAnimationRight = (element) => {
        element.classList.add("in_right");
    }

    const hideAnimation = (element) => {
        element.classList.remove("in_up");
    }

    const handleScrollAnimation = () => {
        anim_elements_up.forEach((el) => {
            if (elementInView(el, 200)) {
                displayAnimationUp(el);
            }
        });
        anim_elements_left.forEach((el) => {
            if (elementInView(el, 200)) {
                displayAnimationLeft(el);
            }
        });
    }

    // data validation for contact form
    const constraints = {
        name: {
            presence: { allowEmpty: false }
        },
        email: {
            presence: { allowEmpty: false },
            email: true
        },
        message: {
            presence: { allowEmpty: false }
        }
    };

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        const formValues = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            message: form.elements.message.value
        };
        const errors = validate(formValues, constraints);
        if (errors) {
            console.log("errors");
        }
    }, false);

});
