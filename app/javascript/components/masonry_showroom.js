import Masonry from 'masonry-layout';

const masonryShowroom = () => {

  if (document.querySelector('.masonry-grid-showroom')) {
    new Masonry( '.masonry-grid-showroom', {
      itemSelector: '.masonry-item-showroom',
      columnWidth: '.grid-sizer-showroom',
      percentPosition: true,
      gutter: 10,
  });
  console.log('masonryG done')
  };
};

export { masonryShowroom }
