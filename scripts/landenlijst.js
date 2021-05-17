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
    uitlegButton.innerText = "De mensen in de Database wonen in deze landen:";
    resultOfButtonClick.classList.add("landenlijst");
    addCountries(sortedCountries);
};

const addLandenLijstToDOM = document.getElementById('landenlijst');
addLandenLijstToDOM.addEventListener("click", addCountriesToDOM);
