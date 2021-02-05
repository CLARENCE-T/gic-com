import $ from 'jquery'
import Masonry from 'masonry-layout';

const masonry = () => {
    const grid = document.querySelector('.masonry-grid');
    const imgAll = document.querySelectorAll('img');
    console.log(imgAll)
    // const imageLoaded = (() => {
    //   Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    //   console.log('images finished loading');
    //   });
    // });
    $(".id").imagesLoaded

  if (grid) {
    window.onload = () => {
      const gridItems = document.querySelectorAll('.masonry-grid-item img');
      const masonry = new Masonry(grid, {
        itemSelector: ".masonry-grid-item",
        columnWidth: 180,
        percentPosition: true,
        gutter: 10,
        isFitWidth: true
      });
    };
  };
};

export {masonry}
