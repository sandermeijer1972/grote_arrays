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
    resultOfButtonClick.classList.remove("meestemensen");
    resultOfButtonClick.classList.remove("matchmaking");

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


//MEESTE MENSEN

const getCountOfCountries = []; 
const makeNewArray = allCountriesOnlyOnce.forEach(country => {
    const peopleInOneCountry = randomPersonData.filter(person => person.region == country);
    getCountOfCountries.push(country + "/" + peopleInOneCountry.length);
});
const countriesSortedOnCount = getCountOfCountries.slice().sort((a, b) => (parseInt(a.split("/")[1]) > parseInt(b.split("/")[1])) ? -1 : 1);
console.log(countriesSortedOnCount);

const addListOfMostPeople = (array) => {
    const newTopLi = document.createElement('li');
    const newTopLeftP = document.createElement('p');
    const newTopRightDiv = document.createElement('div');
    newTopLeftP.innerText = "land";    
    newTopRightDiv.innerText = "aantal mensen";    
    newTopLi.classList.add("top");
    newTopLi.appendChild(newTopLeftP);
    newTopLi.appendChild(newTopRightDiv);
    resultOfButtonClick.appendChild(newTopLi);
    array.forEach(country => {
        const newLi = document.createElement('li');
        const newP = document.createElement('p');
        newP.innerText = (country.split("/")[0]);
        const newDiv = document.createElement('div');
        newDiv.innerText = (country.split("/")[1]);
        newLi.appendChild(newP);
        newLi.appendChild(newDiv);
        resultOfButtonClick.appendChild(newLi);
    });
};

const addMostPeopleToDOM = () => {
    emptyResults();
    uitlegButton.innerHTML = "Het aantal mensen uit de database per land gesorteerd:";
    resultOfButtonClick.classList.add("meestemensen");
    addListOfMostPeople(countriesSortedOnCount);
};

const addMeesteMensenToDOM = document.getElementById('meestemensen');
addMeesteMensenToDOM.addEventListener("click", addMostPeopleToDOM);


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


//MATCHMAKING

const checkSterrenbeeld = (month, day) => {
    if((month == 1 && day <= 19) || (month == 12 && day >= 22)) {
        return "Steenbok";
    } else if((month == 1 && day >= 20) || (month == 2 && day <= 19)) {
        return "Waterman";
    } else if((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        return "Vissen";    
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Ram";
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Stier";
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
        return "Tweeling";
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Kreeft";
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leeuw";
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Maagd";
     } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Weegschaal";
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Schorpioen";
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Boogschutter";
     }
};

const addSterrenbeelden = () => {
    randomPersonData.forEach(person => {
        const month = parseInt(person.birthday.dmy.split("/")[1]);
        const day = parseInt(person.birthday.dmy.split("/")[0]);
        person.sterrenbeeld = checkSterrenbeeld(month,day);
    });
};
addSterrenbeelden();

const sortedOnName = randomPersonData.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);
console.log(sortedOnName);

const matchesForSteenbok = sortedOnName.filter(person => (person.sterrenbeeld == "Stier" || person.sterrenbeeld == "Leeuw" || person.sterrenbeeld == "Schorpioen" || person.sterrenbeeld == "Maagd"));
const matchesForWaterman = sortedOnName.filter(person => (person.sterrenbeeld == "Tweeling" || person.sterrenbeeld == "Weegschaal" || person.sterrenbeeld == "Boogschutter"));
const matchesForVissen = sortedOnName.filter(person => (person.sterrenbeeld == "Stier" || person.sterrenbeeld == "Kreeft" || person.sterrenbeeld == "Schorpioen" || person.sterrenbeeld == "Maagd"));
const matchesForRam = sortedOnName.filter(person => (person.sterrenbeeld == "Weegschaal" || person.sterrenbeeld == "Schorpioen"));
const matchesForStier = sortedOnName.filter(person => (person.sterrenbeeld == "Vissen" || person.sterrenbeeld == "Steenbok" || person.sterrenbeeld == "Maagd"));
const matchesForTweeling = sortedOnName.filter(person => (person.sterrenbeeld == "Weegschaal" || person.sterrenbeeld == "Boogschutter" || person.sterrenbeeld == "Waterman"));
const matchesForKreeft = sortedOnName.filter(person => (person.sterrenbeeld == "Vissen" || person.sterrenbeeld == "Schorpioen"));
const matchesForLeeuw = sortedOnName.filter(person => (person.sterrenbeeld == "Leeuw" || person.sterrenbeeld == "Schorpioen" || person.sterrenbeeld == "Steenbok"));
const matchesForMaagd = sortedOnName.filter(person => (person.sterrenbeeld == "Stier" || person.sterrenbeeld == "Vissen" || person.sterrenbeeld == "Steenbok"));
const matchesForWeegschaal = sortedOnName.filter(person => (person.sterrenbeeld == "Ram" || person.sterrenbeeld == "Tweeling" || person.sterrenbeeld == "Waterman"));
const matchesForSchorpioen = sortedOnName.filter(person => (person.sterrenbeeld == "Ram" || person.sterrenbeeld == "Leeuw" || person.sterrenbeeld == "Vissen" || person.sterrenbeeld == "Steenbok" || person.sterrenbeeld == "Kreeft"));
const matchesForBoogschutter = sortedOnName.filter(person => (person.sterrenbeeld == "Tweeling" || person.sterrenbeeld == "Waterman"));

const addAllPeople = (array) => {
    array.forEach(person => {
        const newLi = document.createElement('li');
        const newPName = document.createElement('p');
        newPName.innerText = person.name;
        const newPSurname = document.createElement('p');
        newPSurname.innerText = person.surname;
        const newPhoto = document.createElement('img');
        newPhoto.src = person.photo;
        const newPAge = document.createElement('p');
        newPAge.innerText = person.age;
        const newSpan = document.createElement('span');
        newSpan.innerText = " jaar";
        const newPRegion = document.createElement('p');
        newPRegion.innerText = person.region;
        const newImg = document.createElement('img');
        newImg.src = ("./sterrenbeelden/" + person.sterrenbeeld + ".png")
        const newPSter = document.createElement('p');
        newPSter.innerText = person.sterrenbeeld;
        newPAge.appendChild(newSpan);
        newLi.appendChild(newPName);
        newLi.appendChild(newPSurname);
        newLi.appendChild(newPhoto);
        newLi.appendChild(newPAge);
        newLi.appendChild(newPRegion);
        newLi.appendChild(newImg);
        newLi.appendChild(newPSter);
        const findMatches = (sterrenbeeld) => {
            const selectedPerson = [];
            selectedPerson.push(person);
            console.log(selectedPerson);
            const getMatches = ("matchesFor" + sterrenbeeld);
            console.log(getMatches);
            selectedPerson.concat(getMatches);
            console.log(selectedPerson);
            addListToDOM(selectedPerson);
        };
        newLi.addEventListener("click", () => findMatches(person.sterrenbeeld));
        resultOfButtonClick.appendChild(newLi);
    });
};

const addListToDOM = (array) => {
    emptyResults();
    uitlegButton.innerHTML = "Hieronder staan alle mensen uit de database. Klik op 1 van de personen om te zien met wie ze het beste matchen.";
    resultOfButtonClick.classList.add("matchmaking");
    addAllPeople(array);
};

const addMatchMakingToDOM = document.getElementById('matchmaking');
addMatchMakingToDOM.addEventListener("click", () => addListToDOM(sortedOnName));
