import { getPost } from "../modules/getPostApi.js";
import { printDogs } from "../modules/printPost.js";
//funcion para llamar otras funciones

const getDataPost = async () => {
    let postsArray = await getPost();
    printDogs(postsArray, "box-container-canes" )
    console.log(postsArray)
}

getDataPost()


let showImg = document.getElementById("dog-img") // imagen de formulario
let inputImg = document.getElementById("text-dog-img") // entrada para url imagen en formulario
// imagen de en formulario 
inputImg.addEventListener("keyup", (event) => {
    let textImg = event.target.value
    showImg.setAttribute("src", textImg ) 
})


let canesFullInfo = []
//creacion de array de objeetos perro
const createNewPostsArray = () => {
    let fields = document.querySelectorAll("#form-data input")
    
    let infoCan = {}
    fields.forEach((val)=>{
        infoCan[val.name] = val.value
    })
    
    canesFullInfo.push({...infoCan})
    //printDogs(canesFullInfo, "box-container-canes" ) //impirmir pagina
    //return canesFullInfo
    return infoCan
}

let saveBtn = document.getElementById("save-dog") //boton de guardar

// evento de boton guardar de formulario
saveBtn.addEventListener("click", (event)=>{
  event.preventDefault() // evita envio de info de formulario, revisar para database
  let newPosts = createNewPostsArray()
  sendPost(newPosts)
  console.log(newPosts)
  
})

const sendPost = async (postObject) =>{
    let sendData = await fetch(
        "https://postprueba1-5c11d-default-rtdb.firebaseio.com/Posts/.json",
    {
        method: "POST",
        body: JSON.stringify(postObject),
    })
    let data =await sendData.json() //desempaquetar info enviada 
    console.log(data)
    let postsArray = await getPost()
    printDogs(postsArray, "box-container-canes" )
}





