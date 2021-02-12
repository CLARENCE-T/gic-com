import $ from 'jquery'
import Masonry from 'masonry-layout';

const masonryEvent = () => {
  $('.grid').masonry({
  // options
  itemSelector: '.masonry-event-grid',
  columnWidth: 200
});


}

export {   }
