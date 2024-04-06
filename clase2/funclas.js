// funcion sin return imprime console
function sumarNum(num1, num2){
    const resultado = num1 +num2
    // console.log(resultado) // si la imprime al ejecutar la funcion
    console.log(resultado)
}
sumarNum(2, 3)

let acumuladorSuma = 0

acumuladorSuma = sumarNum(2, 3)
acumuladorSuma = sumarNum (acumuladorSuma, 4)
acumuladorSuma = sumarNum (acumuladorSuma, 4)
console.log (acumuladorSuma)

const miVariable = sumarNum //asignacion de variable a funccion
console.log(miVariable(2, 3))
