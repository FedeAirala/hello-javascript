/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

varSuma = (7+7+7)
varResta = (15-10-3)
varMult = (6*5)
varDiv = (10/5)
varMod = (10%2)
varExp = (5**3)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(0==0)
console.log(1==true)
console.log(0==false)
console.log (false==false)
console.log(true==true)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(0==1)
console.log(0==true)
console.log(1==false)
console.log (true==false)
console.log(false==true)

// 5. Utiliza el operador lógico and

console.log (0==true && 1==false)
console.log (0==false && 1==true)

// 6. Utiliza el operador lógico or

console.log (0==false || 1==true)
console.log (0==false || 1==true)


// 7. Combina ambos operadores lógicos

console.log (0==true || (0==false && 1==true))

// 8. Añade alguna negación
let a = 6
console.log (a== 5 || a==true)



// 9. Utiliza el operador ternario

const isRaining = true
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")

const isEat = 0
isEat ? console.log ("Está comiendo") : console.log ("No está comiendo")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log ((5+5)== 10 && (10-10)==false)
console.log ((5+5)== 10 && (10-10)==true)