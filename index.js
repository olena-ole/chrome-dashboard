'use strict';

const authorEl = document.querySelector('#author');
const cryptoTitleEl = document.querySelector('#crypto-title');
const cryptoPricesEl = document.querySelector('#crypto-prices');
const timeEl = document.querySelector('#time');
const units = 'metric';


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
};

function displayDogecoinRate() {
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
};

function displayCurrentTime() {
    const time = new Date();
    timeEl.textContent = time.toLocaleString('en-US', {timeStyle: "short"});
};

function success(position) {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units}`)
        .then(res => {
            if (!res.ok) {
                throw Error('The weather is currently unavailable');
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(err => console.error(err));
};

function error() {
    console.log('Unable to access your current position');
};

if(!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

setBackgroundImage();
displayDogecoinRate();
setInterval(displayCurrentTime, 1000);