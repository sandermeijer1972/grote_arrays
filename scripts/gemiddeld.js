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
    uitlegButton.innerText = "De mensen uit de database wonen in deze landen. Klik op een button van een land om te zien wat van die personen de gemiddelde leeftijd is.";
    resultOfButtonClick.classList.add("gemiddelde");
    addCountryButtons(allCountriesOnlyOnce);
}

const addGemiddeldeLeeftijdToDOM = document.getElementById('gemiddeldeleeftijd');
addGemiddeldeLeeftijdToDOM.addEventListener("click", addButtonsToDOM);

