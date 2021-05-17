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
    uitlegButton.innerText = "Van deze personen is de creditcard binnen een jaar aan vervanging toe:";
    resultOfButtonClick.classList.add("creditcards");
    addCreditCards(creditcardsThatExpireWithinOneYear);
};

const addOudeCreditcardsToDOM = document.getElementById('oudecreditcards');
addOudeCreditcardsToDOM.addEventListener("click", addCreditcardsToDOM);
