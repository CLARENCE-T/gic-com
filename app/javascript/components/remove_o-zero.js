const removeOzero = () => {
  const imgs = document.querySelectorAll('img');
  imgs.forEach((element) => {
    element.classList.remove('o-zero')
  });
    // console.log('zero removed')
}

export { removeOzero }
