
/*!
* This file is intentionally blank
* Use this file to add JavaScript to your project
# The WTFPL License (WTFPL)
# Copyright (c) 20230719 bibibricodeur
*/

// https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("lightbox fully loaded and parsed");
    /* https://www.youtube.com/watch?v=2R525oEOl2s */
    const lightbox = document.querySelector('#lightbox');
    const close = document.querySelector('.close');
    const links = document.querySelectorAll('.gallery a')
    //console.log(links); // Debug OK
    for(let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add img in lightbox
            const image = lightbox.querySelector('.lightbox-content img');
            image.src = this.href;
            // Display lightbox
            lightbox.classList.add('show');
        });
    }
    // Activate button close
    if (close !== null ) {
        close.addEventListener('click', function() {
            lightbox.classList.remove('show');
        })
    }
    // Close in click lightbox
    if (close !== null ) {
        lightbox.addEventListener('click', function() {
            lightbox.classList.remove('show');
        })
    }    

});