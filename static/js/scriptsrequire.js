'use strict';

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i<len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
}) 

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {navbar.classList.toggle
    ("active");}

navToggler.addEventListener("click", toggleNavbar);


const header = document.querySelector("[data-header]");

const activeHeader = function () {
    window.scrollY > 50 ? header.classList.add("active") : 
    header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);

function updateCurrentDateTime() {
        var currentDateTimeElement = document.getElementById('currentDateTime');
        var currentDate = new Date();

        //Year only for statement
        var currentYear = currentDate.getFullYear();

        // Insert year
        document.getElementById("currentYear").innerText = currentYear;

        // Format date
        var dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        var formattedDate = currentDate.toLocaleString(undefined, dateOptions);

        // Format time
        var timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        var formattedTime = currentDate.toLocaleString(undefined, timeOptions);

        // Combine date and time
        var formattedDateTime = formattedDate + ' ' + formattedTime;

        currentDateTimeElement.textContent = formattedDateTime;
        }

    // Update the current date and time initially
    updateCurrentDateTime();