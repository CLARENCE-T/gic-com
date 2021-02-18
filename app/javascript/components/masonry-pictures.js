import Masonry from 'masonry-layout';

const masonry = () => {

  if (document.querySelector('.masonry-grid-pictures')) {
    new Masonry( '.masonry-grid-pictures', {
      itemSelector: '.masonry-item-pictures',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      // gutter: 40,
      // fitWidth: true,
      // transitionDuration: 0,
  });
  console.log('masonry pictures done')
  };
};





export { masonry }
