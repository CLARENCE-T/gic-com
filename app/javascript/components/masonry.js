import $ from 'jquery'
import Masonry from 'masonry-layout';

const masonry = () => {
  const gridPictures = document.querySelector('.masonry-grid');
  const gridItems = document.querySelectorAll('.masonry-grid-item img');
  if (gridPictures) {
    console.log('masonry done')
    const masonry = new Masonry(gridPictures, {
      itemSelector: ".masonry-grid-item",
      columnWidth: 180,
      percentPosition: true,
      gutter: 10,
      isFitWidth: true
    });
  };
};





export { masonry }
