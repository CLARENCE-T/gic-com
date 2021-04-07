import Masonry from 'masonry-layout';

const masonryEvent = () => {
  if (document.querySelector('.masonry-grid-events')) {
    new Masonry( '.masonry-grid-events', {
      itemSelector: '.masonry-item-events',
      columnWidth: '.grid-sizer-events',
      percentPosition: true,
      gutter: 10,
    });
    // console.log('masonry event  done')
  }
};

export { masonryEvent }
