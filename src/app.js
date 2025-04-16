import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



function generateExcuse(){

    // Definimos nuestro array

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Escogemos una palabra al azar de nuestro arreglo

let randomWho = who[Math.floor(Math.random() * who.length)];
let randomAction = action[Math.floor(Math.random()* action.length)];
let randomWhat = what[Math.floor(Math.random()* what.length) ];
let randomwhen = when[Math.floor(Math.random()* when.length) ];

//Contruimos la frase
    return randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomwhen;


}


window.onload = function() {
  document.getElementById("excuse").innerText = generateExcuse()

};

