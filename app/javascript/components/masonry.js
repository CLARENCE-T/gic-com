import $ from 'jquery'
import Masonry from 'masonry-layout';

const masonry = () => {

$(document).ready(function() {
    $('#content').show();
    $('#loading').hide();
});

$(function(){

var $container = $('#container');
var width = $(window).width();
var height = $(window).height();

if ((width > 1024  )) {

$container.imagesLoaded( function(){
  $container.masonry({
    itemSelector : '.box',
    columnWidth: 120,
      });
    });

    }
    else {
    //load the css styles for screen res below 1024
    }

});


    const grid = document.querySelector('.masonry-grid');
    const imgAll = document.querySelectorAll('img');

    // const imageLoaded = (() => {
    //   Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    //   console.log('images finished loading');
    //   });
    // });

  if (grid) {
    setTimeout(function() {
      // window.onload = () => {
        const gridItems = document.querySelectorAll('.masonry-grid-item img');
        const masonry = new Masonry(grid, {
          itemSelector: ".masonry-grid-item",
          columnWidth: 180,
          percentPosition: true,
          gutter: 10,
          isFitWidth: true
        });
      // };
    },1000);
  };
};

export {masonry}
