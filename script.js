$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: true
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const menuIcon = menuBtn.querySelector('ion-icon');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        
        if (navbar.classList.contains('active')) {
            menuIcon.setAttribute('name', 'close-outline');
        } else {
            menuIcon.setAttribute('name', 'menu-outline');
        }
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.navbar .menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.setAttribute('name', 'menu-outline');
        });
    });
});