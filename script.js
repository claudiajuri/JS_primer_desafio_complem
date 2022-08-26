let edad
let nombre


nombre= prompt ("Ingrese su nombre").toUpperCase();
edad= parseInt(prompt ("Ingrese su edad"))

while (edad >=18) {
       alert (`Bienvenido ${nombre} , eres mayor de 18, puedes ingresar!`);
       break; 
}

/*alert (`Lo siento ${nombre}, no puede ingresar por ser menor de 18`);*/

while (edad <18) {
  alert (`Lo siento ${nombre}, no puede ingresar por ser menor de 18`);
  break; 
}

