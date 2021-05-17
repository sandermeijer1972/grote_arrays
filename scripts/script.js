const resultOfButtonClick = document.getElementById('results');
const uitlegButton = document.getElementById('uitleg');

const emptyResults = () => {
    uitlegButton.innerHTML = '';
    resultOfButtonClick.innerHTML = '';
    resultOfButtonClick.classList.remove("landenlijst");
    resultOfButtonClick.classList.remove("steenbokvrouwen");
    resultOfButtonClick.classList.remove("creditcards");
    resultOfButtonClick.classList.remove("gemiddelde");
    resultOfButtonClick.classList.remove("meestemensen");
    resultOfButtonClick.classList.remove("matchmaking");
    resultOfButtonClick.classList.remove("matchendemensen");

};
