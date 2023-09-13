
// Declaración de variables

let avaluo = 0;
let porcentaje = 0;
let cuantia = 0;

// Definición de la función que realiza el cálculo de la cuantía
function calcularCuantia (avaluo, porcentaje) {
  if (avaluo !== NaN && porcentaje !== NaN) {
    return (avaluo * porcentaje) / 100;
  }
  return NaN;
}

// 

alert("Bienvenido(a) - Este servicio le ayudará a saber a cuál tipo de juzgado le corresponde tramitar su proceso de pertenencia en Colombia.");

 // tipoInmueble = prompt("¿El inmueble que pretende en posesión es privado o público (parque, calle, plaza)? Escriba las palabras público o privado según el caso");

let respuestaContinuar = prompt("¿Desea realizar un cálculo de competencia judicial? Responda Si / No");
while (respuestaContinuar.trim().toUpperCase() === "SI") {
  alert("Por favor responda las siguientes preguntas:");
 
  avaluo = parseFloat(prompt("¿Cuál es avalúo catastral del inmueble que pretende o el de mayor extensión? Escriba el valor sólo en números - sin puntos, comas u otros signos")); 
  porcentaje = parseFloat (prompt("¿Cuál es el porcentaje que ocupa el predio que usted pretende en posesión? Escriba un valor del 0 al 100"));
  cuantia = calcularCuantia (avaluo, porcentaje);
    
    if (cuantia !== NaN) {
      if (cuantia <= 46400000){
            alert("Su proceso se cataloga de Mínima Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal o de Pequeñas Causas")
            console.log("Avalúo catastral ingresado:" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + ". Cuantía de la pretensión:" + cuantia );
          } else if (46400000 < cuantia && cuantia <= 174000000){
            alert("Su proceso se cataloga de Menor Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal");
            console.log("Avalúo catastral ingresado:" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + ". Cuantía de la pretensión:" + cuantia ); 
          } else if (174000000 < cuantia){
            alert("Su proceso se cataloga de Mayor Cuantía - Le corresponde radicar el proceso en un Juazgado del Circuito");
            console.log("Avalúo catastral ingresado:" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + ". Cuantía de la pretensión:" + cuantia );
          } else {
            alert("No se puede procesar la solicitud"); 
          }
    }
    // Opción para realizar un nuevo cálculo de jurisdicción o terminar.
    respuestaContinuar = prompt("¿Desea realizar otro cálculo de competencia judicial?"); 
}

alert("Gracias por elegirnos");
