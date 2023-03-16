if (localStorage.getItem("cookiesAccepted")) {
    // User has already accepted cookies
  } else {
    // Show the cookie popup
    document.querySelector('.cookie-popup').classList.add('show');
  }
  
  // Add an event listener to the accept cookies button
  document.querySelector('#accept-cookies-btn').addEventListener('click', function() {
    // Set a cookie to remember that the user has accepted cookies
    localStorage.setItem("cookiesAccepted", true);
    
    // Hide the cookie popup
    document.querySelector('.cookie-popup').classList.remove('show');
  });

  