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
    uitlegButton.innerText = "Dit zijn vrouwen van boven de 30 met Steenbok als sterrenbeeld:";
    resultOfButtonClick.classList.add("steenbokvrouwen");
    addSteenbokVrouwen(sortedSteenbokWomen);
};

const addSteenbokWomenToDOM = document.getElementById('steenbokvrouwen');
addSteenbokWomenToDOM.addEventListener("click", addSteenbokVrouwenToDOM);
