import Masonry from 'masonry-layout';

const masonryPictures = () => {
  if (document.querySelector('.masonry-grid-pictures')) {
    new Masonry( '.masonry-grid-pictures', {
      itemSelector: '.masonry-item-pictures',
      columnWidth: '.grid-sizer-pictures',
      percentPosition: true,
      gutter: 5,
      fitWidth: true,
      // columnWidth: 20%,
    });
    console.log('masonry event  done')
  }
};

export { masonryPictures }
