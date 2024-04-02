const fecha = new Date()
const diaNum = fecha.getDay()
const CapOrden = 500
const ordenDia = Math.floor(Math.random()*(700-100))+100;
const mes = fecha.toLocaleDateString('es-MX', {month: 'long'})
let mensaje = ''

function diferencia(CapOrden, ordenDia){
    dif = Math.round(Math.abs(CapOrden-ordenDia))
    return dif
}

const res = diferencia(CapOrden, ordenDia)

function decision(CapOrden, ordenDia, res){
    const porcentaje = (res*100)/500
    if(CapOrden > ordenDia){
        mensaje = `La demanda ha sido menor a la esperada con una diferencia de ${res} ordenes, reducir capacidad en un ${porcentaje}%`
    } else mensaje = `La demanda ha sido mayor a la esperada con una diferencia de ${res} ordenes, aumentar capacidad en un ${porcentaje}%`
    return mensaje
}

console.log('Bienvenido a fondo de bikini')
console.log(`Hoy es ${diaNum} de ${mes}`)
console.log(`La capacidad esperada para hoy era de ${CapOrden} ordenes`)

if(diaNum%2===0){
    console.log(`Hoy es un dia par, la demanda ha sido de ${ordenDia} ordenes`) 
    mensaje= decision(CapOrden, ordenDia, res)
    console.log(mensaje)
} else {
    console.log(`Hoy es un dia impar, la demanda ha sido de ${ordenDia} ordenes`) 
    mensaje= decision(CapOrden, ordenDia, res)
    console.log(mensaje)
}

