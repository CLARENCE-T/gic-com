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
    const divPictures = document.querySelectorAll('.masonry-item-events');
    divPictures.forEach((e) => {
      const description = e.children[0].alt;
      console.log(description)
      const textDiv = document.createElement("div");
      textDiv.classList.add("text-picture");
      textDiv.textContent = description;
      e.appendChild(textDiv);
      console.log(textDiv)
    })
  }
};

export { masonryEvent }
