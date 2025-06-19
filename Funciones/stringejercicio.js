/*crear una funcion que s ellame sumarHastaNegativo(10) 
que pida numeros al usuario y los sume hasta que ingrese
un numero negativo

//sumarHastaNegativo(5)
//sumarHastaNegativo(4)
//sumarHastaNegativo(3)
//sumarHastaNegativo(10)
//sumarHastaNegativo(-5)
//sumarHastaNegativo(1) -> ya no funciona
//sumarHastaNegativo(2)-> ya no funciona
console.log(totalSuma)

*/
let totalSuma = 0;
let memoria = false
function sumarHastaNegativo(numero) {
   if (numero > 0 && memoria === false){
       totalSuma = totalSuma + numero
   } else {
    memoria = true
   }
}
sumarHastaNegativo(5)
sumarHastaNegativo(10)
sumarHastaNegativo(5)
sumarHastaNegativo(10) //30
sumarHastaNegativo(-1)
sumarHastaNegativo(10)

console.log(totalSuma)

//cuando agrego un numero negativo, deje de funcionar la function


