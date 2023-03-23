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
  if (!checkCookie("cookies_accepted")) {
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

const declineButton = document.getElementById("button");
declineButton.innerText = "Decline";
declineButton.classList.add("btn", "btn-secondary", "align-items-center", "ms-2");
document.querySelector(".cookie-popup").appendChild(declineButton);

declineButton.addEventListener("click", function () {
  setCookie("cookies_accepted", "false", 30);
  const cookiePopup = document.querySelector(".cookie-popup-container");
  cookiePopup.style.display = "none";
});

showCookiePopup();
