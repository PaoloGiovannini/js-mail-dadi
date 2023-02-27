let numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 6'));
console.log(numeroUtente);

let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputer);

if (numeroUtente > 6){
    document.getElementById('risultato').innerHTML = `Il numero che hai inserito è ${numeroUtente}: stai barando!`;
} else if (isNaN(numeroUtente)){
    document.getElementById('risultato').innerHTML = `Il numero che hai inserito è ${numeroUtente}: devi inserire un numero!`;
} else if (numeroUtente <= 0){
    document.getElementById('risultato').innerHTML = `Il numero che hai inserito è ${numeroUtente}: devi inserire un numero compreso tra 1 e 6!`;
} else if (numeroUtente > numeroComputer){
    document.getElementById('risultato').innerHTML = `Il numero che hai inserito è ${numeroUtente} e quello del computer è ${numeroComputer}: hai vinto!`;
} else if (numeroUtente == numeroComputer){
    document.getElementById('risultato').innerHTML = `Il numero che hai inserito è ${numeroUtente} e quello del computer è ${numeroComputer}: pareggio!`;
} else {
    document.getElementById('risultato').innerHTML = `Il numero che hai inserito è ${numeroUtente} e quello del computer è ${numeroComputer}: hai perso!`;
}



