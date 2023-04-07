'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function(country) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    req.send();
    // console.log(req.responseText);

    req.addEventListener('load', function(){
        // console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data)
        // console.log(data[0].currencies);

    const html = `
        <article class="country">
        <img class="country__coatofarm" src="${data.coatOfArms.svg}" />
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(2)}M people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name} - ${Object.values(data.currencies)[0].symbol}</p>
                <h4 class="country__capital">Capital: ${data.capital}</h4>
            </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

    });
}


// getCountryData('portugal')
// getCountryData('usa')
// getCountryData('Nigeria')
// getCountryData('Germany')
// getCountryData('Kuwait')
// getCountryData2('Switzerland')

const renderCountry =  function(data){
    const html = `
        <article class="country">
        <img class="country__coatofarm" src="${data.coatOfArms.svg}" />
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(2)}M people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name} - ${Object.values(data.currencies)[0].symbol}</p>
                <h4 class="country__capital">Capital: ${data.capital}</h4>
            </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const myLocation = async function(country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await res.json()
    // console.log(data[0]);
    renderCountry(data[0])

    
}

myLocation('Nigeria')
myLocation('Usa')
myLocation('Uk')