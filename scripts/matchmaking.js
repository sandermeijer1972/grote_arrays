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

const useRightArray = (sterrenbeeld, array) => {
    if (sterrenbeeld == "Steenbok") {
        const rightArray = array.concat(matchesForSteenbok);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Waterman") {
        const rightArray = array.concat(matchesForWaterman);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Vissen") {
        const rightArray = array.concat(matchesForVissen);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Ram") {
        const rightArray = array.concat(matchesForRam);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Stier") {
        const rightArray = array.concat(matchesForStier);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Tweeling") {
        const rightArray = array.concat(matchesForTweeling);
        console.log(rightArray);
        return rightArray;
    } else if(sterrenbeeld == "Kreeft") {
        const rightArray = array.concat(matchesForKreeft);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Leeuw") {
        const rightArray = array.concat(matchesForLeeuw);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Maagd") {
        const rightArray = array.concat(matchesForMaagd);
        console.log(rightArray);
        return rightArray;
    } else if  (sterrenbeeld == "Weegschaal") {
        const rightArray = array.concat(matchesForWeegschaal);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Schorpioen") {
        const rightArray = array.concat(matchesForSchorpioen);
        console.log(rightArray);
        return rightArray;
    } else if (sterrenbeeld == "Boogschutter") {
        const rightArray = array.concat(matchesForBoogschutter);
        console.log(rightArray);
        return rightArray;
    }
};

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
        newImg.src = ("./sterrenbeelden/" + person.sterrenbeeld + ".png");
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
            const arrayDieIkWil = useRightArray(sterrenbeeld, selectedPerson);
            console.log(arrayDieIkWil);
            addMatchingPeopleToDOM(arrayDieIkWil);
        };
        newLi.addEventListener("click", () => findMatches(person.sterrenbeeld));
        resultOfButtonClick.appendChild(newLi);
    });
};

const addListToDOM = (array) => {
    emptyResults();
    uitlegButton.innerText = "Hieronder staan alle mensen uit de database. Klik op 1 van de personen om te zien met wie ze het beste matchen.";
    resultOfButtonClick.classList.add("matchmaking");
    addAllPeople(array);
};

const addSpecificPerson = (array) => {
    for (i = 0; i < 1; i++) {
        const newLi = document.createElement('li');
        newLi.id="geselecteerdpersoon";
        const newDivPhoto = document.createElement('div');
        newDivPhoto.classList.add("foto");
        const newPhoto = document.createElement('img');
        newPhoto.src = array[i].photo;
        newDivPhoto.appendChild(newPhoto);
        const newDivText = document.createElement('div');
        newDivText.classList.add("gegevens");
        const newPFullName = document.createElement('p');
        newPFullName.innerText = (array[i].name + " " + array[i].surname);
        const newPEmail = document.createElement('p');
        const newImgEmail = document.createElement('img');
        newImgEmail.src = "email.png";
        const newPAdres = document.createElement('p');
        newPAdres.innerText = array[i].email;
        newPEmail.appendChild(newImgEmail);
        newPEmail.appendChild(newPAdres);
        const newPAge = document.createElement('p');
        newPAge.innerText = array[i].age;
        const newSpan = document.createElement('span');
        newSpan.innerText = " jaar";
        newPAge.appendChild(newSpan);
        const newPCountry = document.createElement('P');
        newPCountry.innerText = array[i].region;
        newDivText.appendChild(newPFullName);
        newDivText.appendChild(newPEmail);
        newDivText.appendChild(newPAge);
        newDivText.appendChild(newPCountry);
        const newDivSter = document.createElement('div');
        newDivSter.classList.add("sterrenbeeld");        
        const newImgSter = document.createElement('img');
        newImgSter.src = ("./sterrenbeelden/" + array[i].sterrenbeeld + ".png");
        const newPSterrenbeeld = document.createElement('p');
        newPSterrenbeeld.innerText = array[i].sterrenbeeld;
        newDivSter.appendChild(newImgSter);
        newDivSter.appendChild(newPSterrenbeeld);
        newLi.appendChild(newDivPhoto);
        newLi.appendChild(newDivText);
        newLi.appendChild(newDivSter);
        resultOfButtonClick.appendChild(newLi);
    };    
};

const removeSecondLi = () => {
    const secondLi = resultOfButtonClick.getElementsByTagName("li")[1];        
    resultOfButtonClick.removeChild(secondLi);
}

const addMatchingPeopleToDOM = (array) => {
    emptyResults();
    uitlegButton.innerText = "Deze persoon heeft astrologisch gezien een zeer goede klik met de mensen daaronder";
    resultOfButtonClick.classList.add("matchendemensen");
    addSpecificPerson(array);
    addAllPeople(array);
    removeSecondLi();
};

const addMatchMakingToDOM = document.getElementById('matchmaking');
addMatchMakingToDOM.addEventListener("click", () => addListToDOM(sortedOnName));
