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