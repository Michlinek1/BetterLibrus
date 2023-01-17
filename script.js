const zaloguj = document.getElementById("Zaloguj");
const hasloInput = document.getElementsByClassName("hasloInput")[0];
const logowanieDiv = document.getElementsByClassName("logowanie")[0];
const checkboxHaslo = document.querySelectorAll(".checkboxPokaz");
const rejestrowanieDiv = document.getElementsByClassName("rejestrowanie")[0];
const rejestrow = document.getElementById("Zarejestruj");

zaloguj.onclick = function(){
    if(rejestrowanieDiv.style.display == "block"){
        rejestrowanieDiv.style.display = 'none';
    }
    if(logowanieDiv.style.display == 'none'){
        logowanieDiv.style.display = 'block';
    }else{
        logowanieDiv.style.display = 'none'
    }
}
rejestrow.onclick = function(){
    if(logowanieDiv.style.display == "block"){
        logowanieDiv.style.display = 'none'
    }
    if(rejestrowanieDiv.style.display == 'none'){
        rejestrowanieDiv.style.display = 'block';
    }else{
        rejestrowanieDiv.style.display = 'none'
    }
}
checkboxHaslo.onclick = function(){
    if(hasloInput.type == 'password'){
        hasloInput.type = 'text';
    }else{
        hasloInput.type = 'password'
    }
}


