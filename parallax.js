(function () {

  var headerImage = document.querySelector('.background-01');
  var footerImage = document.querySelector('.background-01-bottom');
  var aboutMeImage = document.querySelector('.background-about-me');


  window.addEventListener('scroll', function () {
    var screenOffset = window.scrollY;
    var headerImageOffset = screenOffset * 0.7;
    var footerImageOffset = screenOffset * 0.5;
    var aboutMeImageOffset = screenOffset * 0.5;
    headerImage.style.height = 800 - headerImageOffset + 'px';
    aboutMeImage.style.height = 0 + aboutMeImageOffset + 'px';
    if (window.innerWidth >= 700) {
      footerImage.style.height = -400 + footerImageOffset + 'px';
      aboutMeImage.style.height = 300 + aboutMeImageOffset + 'px';
    }
    if (window.innerWidth >= 1200) {
      footerImage.style.height = -250 + footerImageOffset + 'px';
      aboutMeImage.style.height = 700 + aboutMeImageOffset + 'px';
    }

  })
})()