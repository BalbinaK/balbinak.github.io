var headerImage = document.querySelector('.parallax background-01')
console.log(headerImage)
var footerImage = document.querySelector('background-01-bottom')

window.addEventListener('scroll', function() {
  var screenOffset = window.scrollY;
  var headerImageOffset = screenOffset * 0.5;
  headerImage.style.top = 0 + headerImageOffset + "px";

})