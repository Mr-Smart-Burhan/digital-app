window.addEventListener('resize', function() {
  var image = document.getElementById('myImage');
  if (window.innerWidth <= 600) {
    image.style.display = 'none';
  } else {
    image.style.display = 'block';
  }
});
