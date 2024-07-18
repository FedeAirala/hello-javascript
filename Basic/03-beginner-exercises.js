/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
// Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/*
Esto es un comentario 
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let varString = "Fede" //Strings
let varInt = 5 // Enteros
let varFloat = 10.3 //Float
let varBoolean = true // Boleanos
let undefinedValue // Indefinido
let varInfinito = (5/0) // Infinito, también existe el -Infinito y el NaN(x/0)
let  varBigint = BigInt(817239871289371986589716389471628379612983761289376129) // Valores mayores a 2^53
let  varBigint2 = 817239871289371986589716389471628379612983761289376129 // Muestra con e+53
let varNull = null // Valor nulo
let varSymbol = Symbol("mysymbol")


// 4. Imprime por consola el valor de todas las variables

console.log(varString)
console.log(varInt)
console.log(varFloat)
console.log(varBoolean)
console.log(varInfinito)
console.log(varBigint)
console.log(varBigint2)
console.log(varNull)
console.log(varSymbol)

// 5. Imprime por consola el tipo de todas las variables

console.log (typeof (varString))
console.log (typeof (varInt))
console.log (typeof (varFloat))
console.log (typeof (varBoolean))
console.log (typeof (varBigint))
console.log (typeof (varBigint2))
console.log (typeof (varNull))
console.log (typeof (varSymbol))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

varString = "Airala"
console.log (varString)
varBoolean = false
console.log (varBoolean)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

varString = 15
varBoolean = "Fede"
console.log (varString)
console.log(varBoolean)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const int = 5
const string = "Airala"
console.log(int)
console.log (string)

// 9. A continuación, modifica los valores de las constantes

/*
int = "Fede"
srting = 5
console.log(int)
console.log (string)
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser

// No se pueden cambiar de tipo de dato las variables declaradas con const
