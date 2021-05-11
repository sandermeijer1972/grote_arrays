const resultOfButtonClick = document.getElementById('results');
const uitlegButton = document.getElementById('uitleg');
const emptyResults = () => {
    uitlegButton.innerHTML = '';
    resultOfButtonClick.innerHTML = '';
    resultOfButtonClick.classList.remove("landenlijst");
    resultOfButtonClick.classList.remove("work");
    resultOfButtonClick.classList.remove("steenbokvrouwen");
    resultOfButtonClick.classList.remove("creditcards");
    resultOfButtonClick.classList.remove("gemiddelde");

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
const sortedCountries = allCountriesOnlyOnce.slice().sort();
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
const getCreditcardsExpireThisYear = randomPersonData.filter(person => person.credit_card.expiration.split("/")[1] == (year-2000));
const getCreditcardsExpireNextYear = randomPersonData.filter(person => person.credit_card.expiration.split("/")[1] == (year-1999));
const getCCLaterThisYear = getCreditcardsExpireThisYear.filter(person => person.credit_card.expiration.split("/")[0] > month);
const getCCEarlyNextYear = getCreditcardsExpireNextYear.filter(person => person.credit_card.expiration.split("/")[0] <= month);
const getSortedCCThisYear = getCCLaterThisYear.slice().sort((a, b) => (parseInt(a.credit_card.expiration.split("/")[0]) > parseInt(b.credit_card.expiration.split("/")[0])) ? 1 : -1);
const getSortedCCNextYear = getCCEarlyNextYear.slice().sort((a, b) => (parseInt(a.credit_card.expiration.split("/")[0]) > parseInt(b.credit_card.expiration.split("/")[0])) ? 1 : -1);
const creditcardsThatExpireWithinOneYear = getSortedCCThisYear.concat(getSortedCCNextYear);
console.log(creditcardsThatExpireWithinOneYear);

const addCreditCards = (array) => {
    array.forEach(person => {
        const newLi = document.createElement('li');
        const newDivName = document.createElement('div');
        const newDivTelefoon = document.createElement('div');
        const newDivTelNr = document.createElement('div');
        const newDivCC = document.createElement('div');
        const newDivCCNr = document.createElement('div');
        const newDivCCVerloop = document.createElement('div');
        const newImg = document.createElement('img');
        const newDivVerloopText = document.createElement('div');
        const newDivVerloopDate = document.createElement('div');
        newDivName.innerText = ("naam: " + person.name + " " + person.surname);
        newDivName.classList.add("naam");
        newImg.src = "telefoon.png";
        newDivTelefoon.classList.add("tel-nr");
        newDivTelNr.innerHTML = person.phone;
        newDivCC.innerText = "creditcard-gegevens:";
        newDivCC.classList.add("cc");
        newDivCCNr.innerText = ("nr.: " + person.credit_card.number);
        newDivCCNr.classList.add("cc-nr");
        newDivVerloopText.innerText = "verloopdatum:"
        newDivVerloopDate.innerText = person.credit_card.expiration;
        newDivVerloopDate.classList.add("verloop");
        newDivCCVerloop.classList.add("cc-exp");
        newDivTelefoon.appendChild(newImg);
        newDivTelefoon.appendChild(newDivTelNr);
        newDivCCVerloop.appendChild(newDivVerloopText);
        newDivCCVerloop.appendChild(newDivVerloopDate);
        newLi.appendChild(newDivName);
        newLi.appendChild(newDivTelefoon);
        newLi.appendChild(newDivCC);
        newLi.appendChild(newDivCCNr);
        newLi.appendChild(newDivCCVerloop);
        resultOfButtonClick.appendChild(newLi);
    });
};

const addCreditcardsToDOM = () => {
    emptyResults();
    uitlegButton.innerHTML = "Van deze personen is de creditcard binnen een jaar aan vervanging toe:";
    resultOfButtonClick.classList.add("creditcards");
    addCreditCards(creditcardsThatExpireWithinOneYear);
};

const addOudeCreditcardsToDOM = document.getElementById('oudecreditcards');
addOudeCreditcardsToDOM.addEventListener("click", addCreditcardsToDOM);


const addMeesteMensenToDOM = document.getElementById('meestemensen');
addMeesteMensenToDOM.addEventListener("click", workInProgress);


//GEMIDDELDE LEEFTIJD

const addCountryButtons = (array) => {
    array.forEach(country => {
        const newLi = document.createElement('li');
        const newButton = document.createElement('button');
        const peopleInOneCountry = randomPersonData.filter(person => person.region == country);
        const agesOfPeopleInOneCountry = peopleInOneCountry.map(person => person.age);
        const totalAge = agesOfPeopleInOneCountry.reduce((accumulator, currentValue) => accumulator + currentValue);
        const totalPeopleInOneCountry = peopleInOneCountry.length;
        const averageAge = Math.round(totalAge/totalPeopleInOneCountry);
        newButton.innerText = (country);
        const viewText = (country, age) => {    
            uitlegButton.innerText = ("De gemiddelde leeftijd van de mensen in " + country + " is " + age + " jaar")
        };
        newButton.addEventListener("click", () => viewText(country, averageAge));
        newLi.appendChild(newButton);
        resultOfButtonClick.appendChild(newLi);
    });
};

const addButtonsToDOM = () => {
    emptyResults();
    uitlegButton.innerHTML = "De mensen uit de database wonen in deze landen. Klik op een button van een land om te zien wat van die personen de gemiddelde leeftijd is.";
    resultOfButtonClick.classList.add("gemiddelde");
    addCountryButtons(allCountriesOnlyOnce);
}

const addGemiddeldeLeeftijdToDOM = document.getElementById('gemiddeldeleeftijd');
addGemiddeldeLeeftijdToDOM.addEventListener("click", addButtonsToDOM);

const addMatchMakingToDOM = document.getElementById('matchmaking');
addMatchMakingToDOM.addEventListener("click", workInProgress);
