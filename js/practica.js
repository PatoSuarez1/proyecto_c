// MENU DESPLEGABLE 

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})









/* 
const edad = prompt("ingresa tu edad");
const nuevaEdad = Number(edad) + 1;
console.log (nuevaEdad);
*/
// TABLA ASCII VER https://elcodigoascii.com.ar/

// Operadores de comparacion
/*

<
>
<=
>=
==

*/

// Tipo de dato BOOLEANO
/*
let resultado = Boolean(""); => false
let resultado = Boolean(0); => false
let resultado = Boolean(undefined); => false
let resultado = Boolean(null); => false
*/

// Variables
/*
let variableTrue = true;
let variableFalse = false;
*/

/* let edad = prompt("Ingrese su edad");

// Condicionales 

if (edad >= 18) {
    // se ejecuta si "condicion es verdadera (true)
    console.log("OK, podes ingresar");
} else {
    // se ejecuta si "condicion" es falsa (false)
    console.log("NO podes ingresar, sos menor");
}
*/

/* DESAFIO CLASE 2 */
/*
const cantidadZapatillas = Number (prompt("Ingrese cantidad de zapatillas que va a comprar"));

if (cantidadZapatillas >= 2) {
    console.log("obtuviste un 15% de descuento en tu compra!");
} else if (cantidadZapatillas < 2) {
    console.log("comprando un par mas de zapatillas obtenes un 15% de desc en el total de la compra");
}
*/
