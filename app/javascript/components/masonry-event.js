import Masonry from 'masonry-layout';

const masonryEvent = () => {
  if (document.querySelector('.masonry-grid-events')) {
    new Masonry( '.masonry-grid-events', {
      itemSelector: '.masonry-item-events',
      columnWidth: '.grid-sizer-events',
      // columnWidth: 20%,
      percentPosition: true,
      // percentPosition: true,
      // fitWidth: true,
    });
    console.log('masonry event  done')
  }
};

export { masonryEvent }
