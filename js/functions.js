const table = document.getElementById('table');
const rivit = document.getElementById('lisatytRivit');
const nappi = document.getElementById('nappi');
var riviMaara = 0;

nappi.addEventListener('click', lisaaRivi);

const getRandomInNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

function lisaaRivi() {
    var row = table.insertRow(0);

    for (let i = 0; i < 7; i++) {
        var numero = row.insertCell(i);
        numero.innerHTML = getRandomInNumberInRange(0,9);
    }
    riviMaara += 1;
    rivit.innerHTML = "Valmiita rivejä " + riviMaara;
}
