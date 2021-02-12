

const removeOzero = () => {
  const imgs = document.querySelectorAll('img');
  imgs.forEach((element) => {
    element.classList.remove('o-zero')
  });
}



export { removeOzero }
