window.addEventListener('DOMContentLoaded', function() {
    var url = window.location.pathname;
    var activePage = url.substring(url.lastIndexOf('/')+1);
    var navLinks = document.querySelectorAll('nav a');
    for (var i = 0; i < navLinks.length; i++) {
      var currentPage = navLinks[i].href.substring(navLinks[i].href.lastIndexOf('/')+1);
      if (activePage == currentPage) {
        navLinks[i].classList.add('active');
      }
    }
  });