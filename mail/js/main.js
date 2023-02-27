let emailUtente = prompt('Inserisci la tua email');

const listaEmail =['pippo12@gmail.com', 'pluto12@gmail.com', 'paperino12@gmail.com', 'topolino12@gmail.com'];

let controlloEmail = false;


for (let i = 0; i < listaEmail.length; i++) {
    
    if(emailUtente == listaEmail[i]){
        controlloEmail = true;
    }
}

if(controlloEmail == false) {
    document.querySelector(".accesso").innerHTML = `Non puoi entrare: la tua email è ${emailUtente} e non è presente nei nostri database`;
    
} else{
    document.querySelector(".accesso").innerHTML = `Puoi entrare: la tua email è ${emailUtente} ed è presente nei nostri database`;
}