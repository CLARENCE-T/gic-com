
const zoom = () => {
  const gridItems = document.querySelectorAll('.masonry-grid-item img');
  gridItems.forEach((element1) => {
    element1.addEventListener('click', (event) => {

      //removing old one
      var fullscreen = document.querySelectorAll('.fullscreen-pics')
      var container = document.querySelector('.container')

    //create new fullscreen image only if there is no fullscreen displayed
      if (fullscreen.length == 0) {
        //create img
        var imgSelected = document.createElement("img");
        imgSelected.src = element1.src;
        imgSelected.alt = element1.alt;
        imgSelected.classList.add("fullscreen-pics");
        document.body.appendChild(imgSelected);

        //create arrow
        var next = document.createElement("i");
        next.classList.add("next", "fa", "fa-chevron-right");
        document.body.appendChild(next);

        var prev = document.createElement("i");
        prev.classList.add("prev", "fa", "fa-chevron-left");
        document.body.appendChild(prev);

        //click on next
        next.addEventListener('click', (element2) => {

          console.log(imgSelected.id)



        });

        //click on prev
        prev.addEventListener('click', (element) => {
          console.log('prev')

        });


        //blur the background
        document.querySelector('.container').classList.toggle('blur');

        //click again to remove the fullscreen
        imgSelected.addEventListener('click', (event) => {
          imgSelected.remove()
          next.remove()
          prev.remove()
          document.querySelector('.container').classList.toggle('blur')

        });
      };


    });
  });
}

export { zoom }
