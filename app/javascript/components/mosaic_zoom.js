
const zoom = () => {
  const gridItems = document.querySelectorAll('.mosaic-zoom');
  gridItems.forEach((element1) => {
    element1.addEventListener('click', (event) => {

      //removing old one
      var fullscreen = document.querySelectorAll('.fullscreen-pics');
      var container = document.querySelector('.container');
      var numOfPics = document.querySelectorAll(".masonry-item-pictures").length;
    //create new fullscreen image only if there is no fullscreen displayed
      if (fullscreen.length == 0) {
        //create img
        let divImg = document.createElement("div");
        let imgSelected = document.createElement("img");
        // let closeBtn = document.createElement("div")
        imgSelected.src = element1.src;
        imgSelected.alt = element1.alt;
        imgSelected.id = element1.id;
        imgSelected.classList.add("fullscreen-pics");
        document.body.appendChild(divImg);
        divImg.appendChild(imgSelected);

        //create arrow
        var next = document.createElement("i");
        next.classList.add("next", "fa", "fa-chevron-right");

        document.body.appendChild(next);

        var prev = document.createElement("i");
        prev.classList.add("prev", "fa", "fa-chevron-left");

        document.body.appendChild(prev);
        var crossClose = document.createElement("i");
        crossClose.classList.add("cross-close");
        divImg.appendChild(crossClose);

        //touche controle
        window.addEventListener("keydown", function (event) {

          switch (event.key) {
            case "ArrowRight":
              if ( parseInt(imgSelected.id) < numOfPics -1) {
                var nextImageId = parseInt(imgSelected.id) + 1;
                var nextImage = document.getElementById(nextImageId);
                imgSelected.src = nextImage.src;
                imgSelected.id = nextImage.id;

              };
              break;
            case "ArrowLeft":
              if ( 0 < parseInt(imgSelected.id)) {
                var prevImageId = parseInt(imgSelected.id) - 1;
                var prevImage = document.getElementById(prevImageId);
                imgSelected.src = prevImage.src;
                imgSelected.id = prevImage.id;
              };
              break;
            case "Escape":
                imgSelected.remove()
                next.remove()
                prev.remove()
                crossClose.remove()
                document.querySelector('.container').classList.remove('blur')
              break;
            default:
              return; // Quitter lorsque cela ne gère pas l'événement touche.
          }

          // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
          event.preventDefault();
        }, true);


        //click on next

        next.addEventListener('click', (next) => {
          if ( parseInt(imgSelected.id) < numOfPics -1) {
            var nextImageId = parseInt(imgSelected.id) + 1;
            var nextImage = document.getElementById(nextImageId);
            imgSelected.src = nextImage.src;
            imgSelected.id = nextImage.id;
          };
        });

        //click on prev
        prev.addEventListener('click', (element) => {
          if ( 0 < parseInt(imgSelected.id)) {
            var prevImageId = parseInt(imgSelected.id) - 1;
            var prevImage = document.getElementById(prevImageId);
            imgSelected.src = prevImage.src;
            imgSelected.id = prevImage.id;
          };
        });

        //click again to remove the fullscreen
        imgSelected.addEventListener('click', (event) => {
          imgSelected.remove()
          next.remove()
          prev.remove()
          crossClose.remove()
          document.querySelector('.container').classList.remove('blur')
        });

        crossClose.addEventListener('click', (event) => {
          imgSelected.remove()
          next.remove()
          prev.remove()
          crossClose.remove()
          document.querySelector('.container').classList.remove('blur')
        });

        //blur the background
        document.querySelector('.container').classList.toggle('blur');

      };


    });
  });
}

export { zoom }
