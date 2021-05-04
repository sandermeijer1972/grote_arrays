const resultOfButtonClick = document.getElementById('results');
const uitlegButton = document.getElementById('uitleg');
const emptyResults = () => {
    uitlegButton.innerHTML = '';
    resultOfButtonClick.innerHTML = '';
    resultOfButtonClick.classList.remove("landenlijst");
    resultOfButtonClick.classList.remove("work");
    resultOfButtonClick.classList.remove("steenbokvrouwen");
};

const workInProgress = () => {
    emptyResults();
    resultOfButtonClick.classList.add("work");
    const newImg = document.createElement('img');
    newImg.src="werk-in-uitvoering.gif";
    resultOfButtonClick.appendChild(newImg);
};


// LANDENLIJST

const getCountries = randomPersonData.map(person => person.region);
const allCountriesOnlyOnce = [...new Set(getCountries)];
const sortedCountries = allCountriesOnlyOnce.sort();
console.log(sortedCountries);
const addCountries = (array) => {
    array.forEach(country => {
        const newLi = document.createElement('li');
        newLi.innerHTML = country;
        resultOfButtonClick.appendChild(newLi);
    });
};

const addCountriesToDOM = () => {
    emptyResults();
    uitlegButton.innerHTML = "De mensen in de Database wonen in deze landen:";
    resultOfButtonClick.classList.add("landenlijst");
    addCountries(sortedCountries);
};

const addLandenLijstToDOM = document.getElementById('landenlijst');
addLandenLijstToDOM.addEventListener("click", addCountriesToDOM);


// STEENBOKVROUWEN

const getWomen = randomPersonData.filter(person => person.gender == "female");
const get30PlusWomen = getWomen.filter(person => person.age >= 30);
const getWomenJan = get30PlusWomen.filter(person => person.birthday.mdy.split("/")[0] == 01);
const getWomenBeginJan = getWomenJan.filter(person => person.birthday.dmy.split("/")[0] <= 19);
const getWomenDec = get30PlusWomen.filter(person => person.birthday.mdy.split("/")[0] == 12);
const getWomenEndDec = getWomenDec.filter(person => person.birthday.dmy.split("/")[0] >= 22);
const getSteenbokVrouwen = getWomenEndDec.concat(getWomenBeginJan);
const sortedSteenbokWomen = getSteenbokVrouwen.sort(getSteenbokVrouwen.name);
console.log(sortedSteenbokWomen);
const addSteenbokVrouwen = (array) => {
    array.forEach(woman => {
        const newLi = document.createElement('li');
        const newPName = document.createElement('p');
        const newPSurName = document.createElement('p');
        const newImg = document.createElement('img');
        newPName.innerHTML = (woman.name);
        newPSurName.innerHTML = (woman.surname);
        newImg.src = (woman.photo);
        newLi.appendChild(newPName);
        newLi.appendChild(newPSurName);
        newLi.appendChild(newImg);
        resultOfButtonClick.appendChild(newLi);
    });
};

const addSteenbokVrouwenToDOM = () => {
    emptyResults();
    uitlegButton.innerHTML = "Dit zijn vrouwen van boven de 30 met Steenbok als sterrenbeeld:";
    resultOfButtonClick.classList.add("steenbokvrouwen");
    addSteenbokVrouwen(sortedSteenbokWomen);
};

const addSteenbokWomenToDOM = document.getElementById('steenbokvrouwen');
addSteenbokWomenToDOM.addEventListener("click", addSteenbokVrouwenToDOM);


// OUDE CREDITCARDS

const date = new Date();
console.log(date);
const month = date.getMonth();
const year = date.getFullYear();
console.log(month, year);
const getCreditcardsExpireThisYear = randomPersonData.filter(person => person.credit_card.expiration.split("/")[1] == (year-2000));
const getCreditcardsExpireNextYear = randomPersonData.filter(person => person.credit_card.expiration.split("/")[1] == (year-1999));
console.log(getCreditcardsExpireThisYear);
console.log(getCreditcardsExpireNextYear);
const getCCLaterThisYear = getCreditcardsExpireThisYear.filter(person => person.credit_card.expiration.split("/")[0] > month);
const getCCEarlyNextYear = getCreditcardsExpireNextYear.filter(person => person.credit_card.expiration.split("/")[0] <= month);
console.log(getCCLaterThisYear);
console.log(getCCEarlyNextYear);
const getSortedCCThisYear = getCCLaterThisYear.slice().sort((a, b) => (parseInt(a.credit_card.expiration.split("/")[0]) > parseInt(b.credit_card.expiration.split("/")[0])) ? 1 : -1);
const getSortedCCNextYear = getCCEarlyNextYear.slice().sort((a, b) => (parseInt(a.credit_card.expiration.split("/")[0]) > parseInt(b.credit_card.expiration.split("/")[0])) ? 1 : -1);
console.log(getSortedCCThisYear);
console.log(getSortedCCNextYear);
const creditcardsThatExpireWithinOneYear = getSortedCCThisYear.concat(getSortedCCNextYear);
console.log(creditcardsThatExpireWithinOneYear);




const addOudeCreditcardsToDOM = document.getElementById('oudecreditcards');
addOudeCreditcardsToDOM.addEventListener("click", workInProgress);
