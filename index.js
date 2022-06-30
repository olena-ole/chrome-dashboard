'use strict';

const authorEl = document.querySelector('#author')

function setBackgroundImage() {
    fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
        .then(res => res.json())
        .then(data => {
            console.log(data.urls.full)
            console.log(data.user.name)
            document.body.style.backgroundImage = `url(${data.urls.full})`; 
            authorEl.textContent = `By: ${data.user.name}`;
        })
        .catch(err => {
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1473448912268-2022ce9509d8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTY2MzExODM&ixlib=rb-1.2.1&q=80)'; 
            authorEl.textContent = 'By: Luca Bravo';
        });
}

setBackgroundImage();