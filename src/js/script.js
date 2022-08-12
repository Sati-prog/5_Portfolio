"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // Hamburger
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    const percents = document.querySelectorAll('.skills__progress-percent'),
          rectangles = document.querySelectorAll('.skills__progress-rectangle span');

    percents.forEach((item, i) => {
        rectangles[i].style.width = item.innerHTML;
    });
    

    // Modal
    
});