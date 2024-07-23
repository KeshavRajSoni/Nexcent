document.addEventListener('DOMContentLoaded', function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: $('.slider')
    });
    $('.slider').show(); // Show the slider after slick initialization
});

function openSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

    const fixedBody = document.querySelector('body');
    fixedBody.classList.add('fixed-position');
    
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    const fixedBody = document.querySelector('body');
    fixedBody.classList.remove('fixed-position');
    
}
