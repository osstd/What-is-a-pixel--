"use strict";

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNavbar);

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50
    ? header.classList.add("active")
    : header.classList.remove("active");
};

window.addEventListener("scroll", activeHeader);

function updateCurrentDateTime() {
  var currentDateTimeElement = document.getElementById("currentDateTime");
  var currentDate = new Date();

  var currentYear = currentDate.getFullYear();

  document.getElementById("currentYear").innerText = currentYear;
}
updateCurrentDateTime();
