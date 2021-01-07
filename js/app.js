"use strict";
/*Starting Fresh*/

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