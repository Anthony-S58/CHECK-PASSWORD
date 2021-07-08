const password = document.getElementById("password") ;
const checkPassword = document.getElementById("check-password") ;
const message = document.getElementById("message");
const condition1 = document.getElementById("condition1");
const condition2 = document.getElementById("condition2");
const condition3 = document.getElementById("condition3");
const condition4 = document.getElementById("condition4");


checkPassword.addEventListener('keyup', function() {
 // Votre code ici

if (password.value==checkPassword.value) {
    message.textContent= "mot de passe identique";
    message.style.color = "green";

}else {
    message.textContent= "mot de passe différent";
    message.style.color = "red";


}});

password.addEventListener('keyup', function() {
if (password.value.length<8){
    condition1.textContent = "le mot de passe doit contenir au moins 8 caractères";
    condition1.style.color = "red";
}else {
    condition1.textContent = "longueur du mot de passe ok";
    condition1.style.color = "green";
}
});


password.addEventListener('keyup', function() {
    if (password.value.match(/[A-Z]/g)){
        condition2.textContent = "majuscule du mot de passe ok";
        condition2.style.color = "green";
    }else {
        condition2.textContent = "le mot de passe doit contenir au moins une majuscule";
        condition2.style.color = "red";
    }
    });

password.addEventListener('keyup', function() {
    if (password.value.match(/[0-9]/g)){
        condition3.textContent = "chiffre du mot de passe ok";
        condition3.style.color = "green";
    }else {
        condition3.textContent = "le mot de passe doit contenir au moins un chiffre";
        condition3.style.color = "red";
    }
    });

password.addEventListener('keyup', function() {
    if (password.value.match(/[^a-zA-Z\d]/g)){
        condition4.textContent = "caractère special du mot de passe ok";
        condition4.style.color = "green";
    }else {
        condition4.textContent = "le mot de passe doit contenir au moins un caractère special";
        condition4.style.color = "red";
    }
    })


