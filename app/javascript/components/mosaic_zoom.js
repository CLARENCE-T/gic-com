
const zoom = () => {
  const gridItems = document.querySelectorAll('.masonry-grid-item img');
  gridItems.forEach((element) => {
    element.addEventListener('click', (event) => {

      //removing old one
      var fullscreen = document.querySelectorAll('.fullscreen')
      var container = document.querySelector('.container')

      //create new fullscreen image only if there is no fullscreen displayed
      if (fullscreen.length == 0) {
        //create img
        var img = document.createElement("img");
        img.src = element.src;
        img.alt = element.alt;
        img.classList.add("fullscreen");
        document.body.appendChild(img);
        //blur the background
        document.querySelector('.container').classList.toggle('blur');
        //click again to remove the fullscreen
        img.addEventListener('click', (event) => {
          img.remove()
          document.querySelector('.container').classList.toggle('blur')
        });
      };


    });
  });
}

export { zoom }
