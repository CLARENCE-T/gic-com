const onLoad = (callback, callback2) => {
  var imgs = document.images,
  len = imgs.length,
  counter = 0;

  Array.prototype.forEach.call( imgs, function(img) {
      if(img.complete)
        incrementCounter();
      else
        img.addEventListener( 'load', incrementCounter, false );
  });

  function incrementCounter() {
    counter++;
    if ( counter === len ){
      callback();
      callback2();
    };
  }
};

export { onLoad }
