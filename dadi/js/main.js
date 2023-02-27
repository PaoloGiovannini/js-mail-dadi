let numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log(numeroUtente);

let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputer);

if (numeroUtente > numeroComputer){
    document.getElementById('risultato').innerHTML = `Il numero che ti è uscito è ${numeroUtente} e quello del computer è ${numeroComputer}: hai vinto!`;
} else if (numeroUtente == numeroComputer){
    document.getElementById('risultato').innerHTML = `Il numero che ti è uscito è ${numeroUtente} e quello del computer è ${numeroComputer}: pareggio!`;
} else {
    document.getElementById('risultato').innerHTML = `Il numero che ti è uscito è ${numeroUtente} e quello del computer è ${numeroComputer}: hai perso!`;
}



