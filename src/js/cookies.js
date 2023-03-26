function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function checkCookie(name) {
  return getCookie(name) !== null;
}

function showCookiePopup() {
  if (!checkCookie("cookies_accepted") || !checkCookie("cookies_declined")) {
    const cookiePopup = document.querySelector(".cookie-popup-container");
    cookiePopup.style.display = "block";
  }
}


document
  .getElementById("accept-cookies-btn")
  .addEventListener("click", function () {
    setCookie("cookies_accepted", "true", 30);
    const cookiePopup = document.querySelector(".cookie-popup-container");
    cookiePopup.style.display = "none";
  });

document
  .getElementById("decline-cookies-btn")
  .addEventListener("click", function () {
    setCookies("cookies_declined", "false", 30 );
    const cookiePopup = document.querySelector(".cookie-popup-container");
    cookiePopup.style.display = "none";
    })

showCookiePopup();
