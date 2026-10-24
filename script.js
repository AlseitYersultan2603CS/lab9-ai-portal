
document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  const themeBtn = document.getElementById("themeBtn");

  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

  const form = document.getElementById("subscribeForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("message").textContent =
      "Thank you for subscribing!";
  });

});
