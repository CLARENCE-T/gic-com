import $ from 'jquery'
import Masonry from 'masonry-layout';

const masonry = () => {

  window.onload = () => {
    const gridItems = document.querySelectorAll('.grid-item img');
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
      itemSelector: ".grid-item",
      columnWidth: 180,
      percentPosition: true,
      gutter: 10,
      isFitWidth: true
    });
  };
};

export {masonry}
