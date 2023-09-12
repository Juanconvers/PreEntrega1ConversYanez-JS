console.log("Hola Bienvenidos a la clase 2 🦾");

// Ejemplo 1: Estructura de un condicional en javascrip
// condicion --> es una oraciòn o una valoraciòn de la cual puedo decir si es VERDADERA o es FALSA (es un booleano)
// true --> verdadero
// false --> falso
/* if (true) {
    // Aquì va nuestro còdigo para realizar en caso de que la condiciòn fuera VERDADERA (true)
    console.log("--> Quiero ver este mensaje en pantalla <--");
} */

/* if (false) PARSEFL {--> devuelve el numero con comas (decimales)
    // Aquì va nuestro còdigo para realizar en caso de que la condiciòn fuera VERDADERA (true)
    console.log("--> Quiero ver este mensaje en pantalla <--");
} */ 

// Ejemplo 2: Mostrar la cara opuesta de un dado a partir del numero que obtuvimos de la tirada de este
// let numero = parseInt(prompt("Qué número obtuviste con la tirada de un dado"));
// parseFloat("un numero") 
// console.log("--> Elnúmero ingresado es", { numero });

// if (numero == 1) {
//   console.log("--> La cara opuesta de un dado para el 1, es 6 <--");
// }


// MINE


// alert("Bienevnido. Vamos a analizar si su número es menor o mayor que 10")
// let numero = parseInt(prompt("Indique el número a analizar"));
// console.log("Tu número es:", {numero});

// if (numero < 10){
//   console.log("Tu número es menor que 10");
//   alert("Tu número es menor que 10")
// }else if (numero == 10){
//   console.log("Tu número es el 10");
//   alert("Tu número es el 10")
// } else {
//   console.log("Tu número es mayor que 10")
//   alert("Tu número es mayor que 10")
// }


// MINE

// let numeroUno = parseInt(prompt("Dame el primer número"));
// let numeroDos = parseInt(prompt("Dame el segundo número"));
// let resultadoSuma = numeroUno + numeroDos;
// let resultadoMulti = numeroUno * numeroDos;
// let resultadoDivi = numeroUno / numeroDos;
// let resultadoResta = numeroUno - numeroDos;

// console.log("--> Resultado Suma: " + resultadoSuma);
// alert("El resultado Suma es :" + resultadoSuma)

// console.log("--> Resultado Multi: " + resultadoMulti);
// alert("El resultado Multi es :" + resultadoMulti)

// console.log("--> Resultado Divi: " + resultadoDivi);
// alert("El resultado Divi es :" + resultadoDivi)

// console.log("--> Resultado Resta: " + resultadoResta);
// alert("El resultado Resta es :" + resultadoResta)

// MINE

// let programa = prompt("Dime el nombre del programa");
// let carrera = prompt("Dime el nombre de la carrera");
// console.log("Bienvenido a la carrera de " + carrera +" del programa de " + programa);
// alert("Bienvenido a la carrera de " + carrera +" del programa de " + programa);






// Ejemplo 3: Evaluación de un nombre de usuario

//CORREGIDO

// let nombreUsuario = prompt("Ingresa un nombre para tu usuario");
// console.log(
//   "La cantidad de caracteres que posee el nombre es " + nombreUsuario.length
// );

// if (nombreUsuario.length >= 4) {
//   console.log("Tú nombre de usuario es válido por el número de sus caracteres");
// } else {
//   console.log("Tú nombre de usaurio es muy corto");
// }


//SACADO DE https://francescricart.com/ejercicios-sobre-condicionales-para-nivel-principiante/

var culpable = window.prompt("¿eres culpable?"); // si, no

	if(culpable=="si"){
		document.write("irás a la cárcel");
	}else if(culpable=="no"){
		document.write("irás a casa");
	}else{
		document.write("la documentación por favor");
	}




// Ejemplo 4: Qué ocurre con datos de distintos tipos (== y ===)
// ==  --> comparador de igualdad blando (no toma en cuenta los tipos)
// === --> comparador de igualdad duro (es estricto con los valores y los tipos)

// let edad = prompt("¿Qué edad tienes?");
// Una persona es mayor de edad si tiene al menso o es mayor de 18 años
// edad > 17
// edad >= 18

// if (edad >= 18) {
//   console.log("La persona es mayor de edad, y puede ingresar!");
// } else {
//   console.log("No puedo permitirte el acceso!");
// }

// if (edad > 35) {
//   console.log("Puedes participar del estudio clínico!");
// } else {
//   console.log("No puedes participar de nuestro ensayo clínico");
// }

// Ejemplo 5: Estructura IF-ELSE-IF
/* let precio = parseFloat(prompt("¿Cuál es el precio de tu compra?"));
let descuento = 0;
let total = 0;
if (precio < 2000) {
  total = precio;
} else if (precio < 5000) {
  descuento = precio * 0.15; // 15/100
  //total = precio * 0.85;
} else if (precio < 10000) {
  descuento = precio * 0.25; // 25/100
  //total = precio * 0.75;
} else {
  descuento = precio * 0.45; // 45/100
  //total = precio * 0.55;
}

total = precio - descuento;

alert(" Vas a tener que pagar un total de " + total);
if (descuento) {
  alert("El descuento recibido es de " + descuento);
} else {
  alert(
    "Te invitamos a comprar otros artículos para obtener descuentos exclusivos!"
  );
} */

// Ejemplo 6: Uso de variables booleanas
/* let numeroSolicitado = parseInt(prompt("Ingrese un número"));
const esPositivo = numeroSolicitado > 0; // true --> numero > 0, false --> numero <= 0
console.log("El resultado de la comparación es", { esPositivo });
if (esPositivo) {
  alert("El número ingresado ES positivo!");
} else {
  alert("El número ingresado NO es positivo!");
} */

// Ejemplo 7: Uso de operadores lógicos de relación (AND)
/* let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

const esNombreValido = nombreIngresado != "";
const esApellidoValido = apellidoIngresado != "";

console.log("Resultados obtenidos", {
  nombreIngresado,
  apellidoIngresado,
  esNombreValido,
  esApellidoValido,
});

if (esNombreValido && esApellidoValido) {
  alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
  alert("Error: Ingresar nombre y apellido");
} */

// Ejemplo 8: Uso de operadores lógicos de relacion (OR)
/* let nombreIngresado = prompt("Ingresar nombre");

if (nombreIngresado == "ANA" || nombreIngresado == "ana") {
  alert("El nombre ingresado es Ana");
} else {
  alert("El nombre ingresado NO ES Ana");
} */

// Ejemplo 9: Uso de operadores lógicos para ingresar al sistema como super usuario
/* const ID_SUPER_USUARIO = "CHAMAN";
let nombreIngresado = prompt("Ingresar nombre del usuario admin");

// En este ejemplo, asumimos que el nombre del usuario es indistinto si se escribe en mayúsculas como en minúsculas, por lo tanto lo volveremos NO key sensitive.
if (nombreIngresado.toUpperCase() == ID_SUPER_USUARIO) {
  alert("Puedes acceder como puser usuario una vez ingreses tú clave");
} else {
  alert("El ID de super usuario no existe");
} */

// Ejemplo 10: Uso de operadores lógicos para validar la contraseña de un usuario
/* const PASSWORD_SUPER_USUARIO = "A1b2C3d4E5";
let passwordIngresada = prompt("Ingresar la contraseña del usaurio");

// Para este ejemplo si es necesario que la cadena de texto ingresada por el usuario coincida exactamente con la contraseña "recuperada de nuestro servidor".
if (passwordIngresada === PASSWORD_SUPER_USUARIO) {
  alert("Puedes permitido");
} else {
  alert("Contraseña incorrecta");
} */

// // Ejemplo 11: Continuamos con el ejemplo anterior
// const PASSWORD_SUPER_USUARIO = "A1b2C3d4E5";
// const LIMITE_INTENTOS = 3;
// let intentos = 0;
// let passwordIngresada = prompt("Ingresar la contraseña del usaurio");

// // Para este ejemplo simula de manera "ficticia" la acumulación de intentos.
// // ACLARACIÓN: hasta hoy vimos solamente la estructura IF, este problema no se puede resolver de forma "elegante" y eficinte con este tipo de esstructuras, en la clase siguiente la vamos a majorar y adaptar a los nuevos conocimientos que obtendremos.
// // Aquí no es necesario usar el comparador === ya que ambos son cadenas de caracteres
// if (
//   passwordIngresada == PASSWORD_SUPER_USUARIO &&
//   intentos < LIMITE_INTENTOS
// ) {
//   alert("Puedes permitido");
// } else if ((intentos = LIMITE_INTENTOS)) {
//   alert("Usuario bloqueado por límite de intentos");
// } else {
//   intentos = intentos + 1; // Tenemos una forma abreviada de hacer esta operación, pero la veremos en clases futuras.
//   alert("Contraseña incorrecta, vuelve a ingresarla");
// }
