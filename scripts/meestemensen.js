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
    uitlegButton.innerText = "Het aantal mensen uit de database per land gesorteerd:";
    resultOfButtonClick.classList.add("meestemensen");
    addListOfMostPeople(countriesSortedOnCount);
};

const addMeesteMensenToDOM = document.getElementById('meestemensen');
addMeesteMensenToDOM.addEventListener("click", addMostPeopleToDOM);

