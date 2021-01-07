"use strict";

var contacts = document.getElementsByClassName("contacts");

var toggleInfo = function toggleInfo() {
    var emails = document.querySelectorAll(".contact-email"), phones = document.querySelectorAll(".contact-phone"), i;
    /*Toggle the hide class on each contact column*/
    for (i = 0; i < emails.length; i++) {
        emails[i].classList.toggle("hide");
        phones[i].classList.toggle("hide");
    }
};

/*Code here would be for the dropdown menu*/

function dropdownHover(current) {
    var otherRows = document.getElementsByClassName("row");

    var dropdownItems = current.getElementsByClassName("drop");
    var i;
    
    for (i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].classList.toggle("hide");
    }

    for (var i = 0; i < otherRows.length; i++) {
        if (otherRows[i] === current) {
            otherRows[i].style.opacity = "1";
        } else {
            otherRows[i].style.opacity = "0.1";
        }
    }
}

function dropdownLeave(current) {
    var otherRows = document.getElementsByClassName("row");

    var dropdownItems = current.getElementsByClassName("drop");
    var i;
    
    for (i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].classList.toggle("hide");
    }

    for (var i = 0; i < otherRows.length; i++) {
        otherRows[i].style.opacity = "1";
    }
}