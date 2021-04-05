import Masonry from 'masonry-layout';

const masonryEvent = () => {
  if (document.querySelector('.masonry-grid-events')) {
    new Masonry( '.masonry-grid-events', {
      itemSelector: '.masonry-item-events',
      columnWidth: '.grid-sizer-events',
      percentPosition: true,
      gutter: 5,
      fitWidth: true,
      // columnWidth: 20%,
    });
    console.log('masonry event  done')
  }
};

export { masonryEvent }
