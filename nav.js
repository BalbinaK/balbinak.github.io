(function () {
  var navLinks = document.querySelectorAll("nav a[href^='#']")
  var targets = [];

  navLinks.forEach(function (navLink) {
    var href = navLink.getAttribute('href');
    var target = document.querySelector(href);
    targets.push(target);

    navLink.addEventListener('click', function (event) {
      event.preventDefault();

      window.scroll({
        top: target.offsetTop,
        behavior: "smooth"
      })
    })
  })
  
  window.addEventListener('scroll', function () {
    var scroll = window.scrollY;

    targets.forEach(function (target, index) {
      var offset = target.offsetTop;
      if (200 + scroll > offset) {
        navLinks[index].classList.add('active');
      } else {
        navLinks[index].classList.remove('active');
      }
    })

    var candidates = document.querySelectorAll('nav .active');
    for (var i = 0; i < candidates.length - 1; i += 1) {
      candidates[i].classList.remove('active');
    }
  })
})()