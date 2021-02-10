import LocomotiveScroll from 'locomotive-scroll';

console.log('scroll')

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


export { scroll }
