document.getElementById("demo").innerHTML = "Hello javaScript";
document.getElementById("demo").style.fontSize = "35px";


//Salida de datos
window.alert("Hola care bola")
window.alert(5+2);
console.log(5*5);

//declarar variables
let a,b,c;
const M = 8;
a = 5;
b = 6;
c = a + b + b;
document.getElementById("demo").innerHTML = c;


//Tipos de datos
let num = 24; //Numero entero
let name = "Yordy Lo Mejor";//cadena de caractares
let km = 14.5;// Decimal

let persona = {firstName: "Ana", lastName:"Perez"};//objeto

let y = 17 + "POO"; // JS trata al numero como una cadena
let q = "17" + "POO";

let num1 = 8; num2 = 4;
let suma, resta, multiplicacion, division;
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;

document.getElementById("operaciones").innerHTML = 
"la suma es: " + suma + "  la resta: " + resta + "  La multiplicacion es: " + multiplicacion + "  la division es: " + division;

//Operadores de comparacion
let edad = 24;
document.getElementById("comparcion").innerHTML = (edad > 18);

//Operadores Logicos
let num4 = 6, num5 = 3;
document.getElementById("logicos").innerHTML = 
(num4 < 10 && num5 > 1) + "<br>" + (num4 < 10 && num5 < 1);

// Funciones
function myFuncion(){
    document.getElementById("demo").innerHTML = "New paragraph";
}