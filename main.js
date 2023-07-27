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

