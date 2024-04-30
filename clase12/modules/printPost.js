import { createDogCard } from "./createCardPost.js";
//imprimir card
const printDogs = (dogArray, containerDog) => {
    let dogBox = document.getElementById(containerDog)
  
    // eliminacion del primer elemento de lista para evitar repetir
    while (dogBox.firstChild) {
      dogBox.removeChild(dogBox.firstChild);
    }
  
    dogArray.forEach((can)=>dogBox.append(createDogCard(can)))
  }
  
  export {printDogs}