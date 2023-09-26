let count = 0;
let currentElement = '';

$(document).ready(function () {
    $('.service-list .owl-carousel').owlCarousel({
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
    })
});

function onToggle(event) {
    console.log('Start! ', count);
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