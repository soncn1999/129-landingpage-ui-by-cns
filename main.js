let count = 0;
let currentElement = '';

// Handle Carousel
$(document).ready(function () {
    $('.service-list .owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoPlayTimeout: 1000,
        autoplayHoverPause: true,
        items: 3,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
            1800: {
                items: 3
            },
        }
    });

    $('.review-list .owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        items: 3,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            2000: {
                items: 1
            },
            2900: {
                items: 1
            }
        }
    });

    $('.slider-list .owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoPlaySpeed: 500,
        autoPlayTimeout: 500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            2000: {
                items: 1
            },
            2900: {
                items: 1
            }
        }
    });
});

// Handle OpenSubmenu
function onToggle(event) {
    let querySelectorElement = event.target.value;
    if (querySelectorElement && querySelectorElement == currentElement) {
        let radioElement = document.getElementById(querySelectorElement);

        if (count % 2 == 0) {
            count++;
            return;
        }

        radioElement.checked = false;
        count++;

    } else if (querySelectorElement && currentElement !== '' && querySelectorElement !== currentElement) {
        count = 0;
        let OldRadioElement = document.getElementById(currentElement);
        OldRadioElement.checked = false;
        let radioElement = document.getElementById(querySelectorElement);
        radioElement.checked = true;
        currentElement = querySelectorElement;
    } else {
        let radioElement = document.getElementById(querySelectorElement);
        radioElement.checked = true;
        count++;
        currentElement = querySelectorElement;
    }
}

// const unMountPhoto = (photo_id, content_id) => {
//     console.log('un mount >>> ', photo_id);
//     let photoElement = document.getElementById(photo_id);
//     photoElement.classList.add('close-element');
//     let contentElement = document.getElementById(content_id);
//     contentElement.classList.add('open-element');
// }

// const mountPhoto = (photo_id, content_id) => {
//     console.log('mount >>> ', photo_id);
//     let photoElement = document.getElementById(photo_id);
//     photoElement.classList.remove('close-element');
//     let contentElement = document.getElementById(content_id);
//     contentElement.classList.remove('open-element');
// }