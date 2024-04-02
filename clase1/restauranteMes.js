const fecha = new Date()

const mesNum = fecha.getMonth() + 1
const año = fecha.getFullYear()
let pedidosArray = []
let sumPar = 0
let promPar = 0
let sumIm = 0
let promIm = 0
let dif = 0

const CapOrden = 500


function diasMes( M, Y){
    const cantD = new Date(Y , M, 0).getDate();
    return cantD
}

const dias = diasMes(año, mesNum)
const mes = fecha.toLocaleDateString('es-MX', {month: 'long'})

for(let i=0; i<dias; i++){
    pedidosArray[i]= Math.floor(Math.random()*(900-100))+100;
}

console.log('Bienvenido a fondo de bikini')
console.log(`Estos son los cifras obtenidas las ordenes de este mes: ${mes}`)
console.log(dias)

for(i=0; i<pedidosArray.length; i++){
    console.log(`Dia: ${i+1} cantidada de pedidos: ${pedidosArray[i]}`)
}

console.log('Dias pares: ')

for(let j=0; j<pedidosArray.length; j++){
    if((j+1)%2===0){
        console.log(`${j+1} pedidos: ${pedidosArray[j]}`)
        sumPar = sumPar + pedidosArray[j]
    }
}

console.log('Dias impares: ')

for(let k=0; k<pedidosArray.length; k++){
    if((k+1)%2!=0){
        console.log(`${k+1} pedidos: ${pedidosArray[k]}`)
        sumIm = sumIm + pedidosArray[k]
    }
}

console.log(sumIm)
console.log(sumPar)

promPar = sumPar/pedidosArray.length
promIm = sumIm/pedidosArray.length

console.log(promPar)
console.log(promIm)


console.log(`La capacidad prevista: ${CapOrden}`)

if(promPar>promIm){
    console.log('La demanda de los dias pares ha sido mnayor este mes: ')
    dif = Math.round(Math.abs(CapOrden-promPar))
    if(promPar>CapOrden){ 
        console.log(`La demanda de los dias pares ha exedido la cpacidad esperada por : ${dif} ordenes`)
        console.log('Es necesario incrementar la capacidad')
    } else { 
        console.log(`La demanda de los dias pares a sido menor a la cantidad esperada con una diferencia de ${dif} ordenes`)
        console.log('Es necesario disminuir la capacidad') }
} else {
    console.log('La demanda de los dias impares ha sido mnayor este mes: ')
    dif = Math.round(Math.abs(CapOrden-promIm))
    if(promIm>CapOrden){ 
        console.log(`La demanda de los dias impares ha exedido la cpacidad esperada por : ${dif} ordenes`)
        console.log('Es necesario incrementar la capacidad')
    } else {
        console.log(`La demanda de los dias impares a sido menor a la cantidad esperada con una diferencia de ${dif} ordenes`)
        console.log('Es necesario disminuir la capacidad')
    }
}
