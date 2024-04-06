/*let  holaFunction = (parametros) => {
    // contenido
}*/

let saludo = (nombre) => {
    console.log('hola', nombre)
}
saludo('Pedro')

saludo = (nombre, apellido) => {
    console.log('hola', nombre, apellido)
}

saludo('Pedro', 'Ruiz')

const suma = (a, b) => a + b

console.log(suma(3, 6))

/// ----------------
let decirHola = (darNombreParam) => { // parametro
    console.log("hola", darNombreParam()) //define que el parametro es una funcion
}

let DarNombre = () => "Pedro"

decirHola(DarNombre)

