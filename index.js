'use strict';

const authorEl = document.querySelector('#author');
const cryptoTitleEl = document.querySelector('#crypto-title');
const cryptoPricesEl = document.querySelector('#crypto-prices');

function setBackgroundImage() {
    fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
        .then(res => res.json())
        .then(data => {
            document.body.style.backgroundImage = `url(${data.urls.full})`; 
            authorEl.textContent = `By: ${data.user.name}`;
        })
        .catch(err => {
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1473448912268-2022ce9509d8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTY2MzExODM&ixlib=rb-1.2.1&q=80)'; 
            authorEl.textContent = 'By: Luca Bravo';
        });
}

setBackgroundImage();

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res => {
        if (!res.ok) {
            throw Error('something went wrong');
        }
        return res.json();
    })
    .then(data => {
        cryptoTitleEl.innerHTML = `
            <img src="${data.image.small}" alt="${data.name} icon">
            <span>${data.name}</span>
        `;
        cryptoPricesEl.innerHTML = `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `;
    })
    .catch(err => console.error(err));