const emailDom = document.getElementById('email')

const invioDom = document.getElementById('invio');

const listaEmail =['pippo12@gmail.com', 'pluto12@gmail.com', 'paperino12@gmail.com', 'topolino12@gmail.com'];

invioDom.addEventListener('click',

    function() {
        let controlloEmail = false;
        let email = emailDom.value;

        for (let i = 0; i < listaEmail.length; i++) {
    
            if(email == listaEmail[i]){
                controlloEmail = true;
            }
        }
        
        if(controlloEmail) {
            document.querySelector(".accesso").innerHTML = `Puoi entrare: la tua email è ${email} e non è presente nei nostri database`;
            
        } else{
            document.querySelector(".accesso").innerHTML = `Non puoi entrare: la tua email è ${email} ed è presente nei nostri database`;
        }
   
    }

)