
const zoom = () => {
  const gridItems = document.querySelectorAll('.grid-item img');
  gridItems.forEach((element) => {
    element.addEventListener('click', (event) => {
      console.log(element)

      var next = document.querySelectorAll('.next, .prev')
      next.forEach((element) => {
        element.style.display = "block"
      });
      var img = document.createElement("img");
      img.src = element.src;
      img.alt = element.alt;
      img.classList.add("fullscreen");
      document.body.appendChild(img);
      document.querySelector('.container').style.opacity = "0.2"
      img.addEventListener('click', (event) => {
        img.remove()
        document.querySelector('.container').style.opacity = "1"
      })
    });
  });
}

export { zoom }
