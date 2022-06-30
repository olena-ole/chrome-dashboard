'use strict';

const authorEl = document.querySelector('#author')

function setBackgroundImage() {
    fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
        .then(res => res.json())
        .then(data => {
            document.body.style.backgroundImage = `url(${data.urls.full})`; 
            authorEl.textContent = `By: ${data.user.name}`;
        });
}

setBackgroundImage();