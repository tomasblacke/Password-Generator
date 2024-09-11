const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let maxChar = 8;
let passWord1= document.getElementById("box-el-1");
let passWord2 = document.getElementById("box-el-2");
let button = document.getElementById("generator");
let amountEl = document.getElementById("amount-el")

let box1 = document.getElementById("box-el-1");
let box2 = document.getElementById("box-el-2");

//Funcion para obtener la cantidad maxima de caracteres
amountEl.addEventListener("input",function(){
    let value=amountEl.value
    // Verificar si el valor es un número
    if (!isNaN(value) && value.trim() !== "") {
        maxChar = parseInt(value, 10);  // Conversion a numero
    } else {
        alert("Por favor, ingresa solo números.");
        amountEl.value = "";  // Limpio campo si no es valido
    }
})
//Funcion que crea ambas contrasenas 
button.addEventListener("click",  function(){
    passWord1.textContent="";
    passWord2.textContent="";
    for(let i=0; i<maxChar;i++){
        let randomChar=Math.floor(Math.random()*characters.length)+1
        let randomChar2=Math.floor(Math.random()*characters.length)+1

        passWord1.textContent+= characters[randomChar];
        passWord2.textContent += characters[randomChar2];
    }
})
//funcion para copiar al clipboard
function copyToClipboard(text) {
    // Crea un input temporal
    let tempInput = document.createElement("input");
    // Asigna el texto al valor del input
    tempInput.value = text;
    // Agrega el input al body (necesario para que el copy funcione)
    document.body.appendChild(tempInput);
    // Selecciona el texto en el input
    tempInput.select();
    // Ejecuta el comando copiar
    document.execCommand("copy");
    // Remueve el input temporal
    document.body.removeChild(tempInput);
    alert("Copied: " + text);
}

// Añade el evento de click para copiar el contenido de cada box
box1.addEventListener("click", function() {
    copyToClipboard(box1.textContent);
});

box2.addEventListener("click", function() {
    copyToClipboard(box2.textContent);
});