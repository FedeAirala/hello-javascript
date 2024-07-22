/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

let text1 = "Fede "
let text2 = "Airala "
console.log (text1 + text2 + "!")

// 2. Muestra la longitud de una cadena de texto

let frase = "Hola Javascript"

console.log(`La frase, ${frase} , tiene ${frase.length} espacios`)


// 3. Muestra el primer y último carácter de un string

console.log (`La frase ${frase} tiene como primer caracter a ${frase.slice(0,1)}`)
console.log (`La frase ${frase} tiene como último caracter a ${frase.slice(-1)}`)

// 4. Convierte a mayúsculas y minúsculas un string

console.log (frase.toLowerCase())
console.log (frase.toUpperCase())

// 5. Crea una cadena de texto en varias líneas

let cadena = `Cadena
    de texto
    en varias Líneas`
console.log (cadena)

// 6. Interpola el valor de una variable en un string

let varValor = 44
console.log (`Soy Fede y tengo ${varValor} años`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto = "Hola estoy practicando strings en Javascript"
console.log (texto.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log (texto.includes("practica")) // comprueba por segmento del string solicitado
console.log (texto.includes("mundo")) 

// 9. Comprueba si dos strings son iguales

console.log ("hola" == "hola")
console.log ("hola" == "Hola") // diferencia entre mayúsculas y minusculas

// 10. Comprueba si dos strings tienen la misma longitud

let texto1 = "Hola"
let texto2 = "Fede"
let texto3 = "Mundo"

console.log (`Pimer comprobación es ${texto1.length==texto2.length}`)
console.log (texto1.length==texto3.length)