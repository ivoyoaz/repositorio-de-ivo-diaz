let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIp");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById ("title");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signUp.classList.remove("disable");
}

signUP.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signUp.classList.add("disable");
}

