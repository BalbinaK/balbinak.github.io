var headerImage = document.querySelector('.background-01')
var footerImage = document.querySelector('.background-01-bottom')



window.addEventListener('scroll', function() {
  var screenOffset = window.scrollY;
  var headerImageOffset = screenOffset * 0.3;
  var footerImageOffset = screenOffset * 0.5;
  headerImage.style.top = headerImageOffset + 'px';
  if (window.innerWidth >= 700) {
    footerImage.style.height = -500 + footerImageOffset + 'px';
  }
  if (window.innerWidth >= 1200) {
    footerImage.style.height = -350 + footerImageOffset + 'px';
  }
})