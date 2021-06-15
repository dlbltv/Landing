const header = document.querySelector('.section-header')
const mainNavigation = document.getElementById('main-navigation');

// -- Accordion -- //

document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion_item')) {
        event.target.closest('.faq-accordion_item')
            .classList.toggle('faq-accordion_item--active');
    }
});

// -- / Accordion -- //

// -- Burger and Scroll -- //

document.querySelector('.btn-burger').addEventListener('click', () => {
    header.classList.toggle('section-header--active-nav');

    if (header.classList.contains('section-header--active-nav')) {
        hideScroll();
    } else {
        showScroll();
    }
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
    document.body.style.paddingRight = '';
   document.body.style.overflow = 'visible';

    mainNavigation.style.paddingRight = '';

};

const resenNav = () => {
    header.classList.remove('section-header--active-nav');
    showScroll();
}

window.addEventListener('resize', resenNav)


//Get scrollbar width
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);


    return scrollBarWidth;
};


// -- / Burger and Scroll -- //

// -- Swiper -- //

new Swiper('.section-hero-image', {

//   // If we need pagination
  pagination: {
    el: '.section-hero-image .dots',
    clickable: true,
  },

});

new Swiper('.slider-blog-container', {
//   // Optional parameters

  loop: true,

//   // If we need pagination
  pagination: {
    el: '.section-blog .dots',
    clickable: true,
  },

//   // Navigation arrows
  navigation: {
    nextEl: '.section-blog .swiper-button-next',
    prevEl: '.section-blog .swiper-button-prev',
  },

});


new Swiper('.slider-qoutes-container', {
//   // Optional parameters

  loop: true,
  slidesPerView: 'auto',


//   // If we need pagination
  pagination: {
    el: '.section-quotes .dots',
    clickable: true,
  },


});

// -- / Swiper -- //