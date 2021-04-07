const descriptionMaker = () => {
  const divPictures = document.querySelectorAll('.description-maker');
  divPictures.forEach((e) => {
      if(e.children[0].alt != "" || undefined ) {
        const description = e.children[0].alt;
        const textDiv = document.createElement("div");
        textDiv.classList.add("text-picture");
        textDiv.textContent = description;
        e.appendChild(textDiv);
      }
  });
};

export { descriptionMaker }
