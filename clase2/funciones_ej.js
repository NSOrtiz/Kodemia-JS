// funcion calculo imc 
// funcion clasificacion 

const peso = 67
const altura = 1.58

const calIMC = (p, h) => imc = p/(h*h)

function selecIMC(calIMC){
    let mensaje = null
    if(calIMC < 18.5){
        mensaje ='bajo peso'
    } else if(calIMC >= 18.5 && calIMC <= 24.9){
        mensaje = 'peso saludable'
    } else if(calIMC >= 25 && calIMC <= 29.9){
        mensaje = 'sobrepeso'
    } else  {
        mensaje = 'obesidad'
    }
    return mensaje
}

console.log('Calculadora IMC')
console.log(`La persona tiene un peso de ${peso} kg. y una altura de ${altura} m.`)
console.log(`la persona tiene un IMC de: ${calIMC(peso, altura)}`)
console.log('La persona esta en: ' + selecIMC(calIMC(peso, altura)))