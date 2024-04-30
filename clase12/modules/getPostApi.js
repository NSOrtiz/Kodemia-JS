
const getPost = async () =>{
    let response = await fetch("https://postprueba1-5c11d-default-rtdb.firebaseio.com/Posts/.json")
    let Posts = await response.json()
    console.log(Posts)
    
    let keys = Object.keys(Posts) //manda a llamar metodo object 
    console.log(keys) 

    let postsArray = keys.map((key) => {
        return {...Posts[key], key}
    })
    console.log(postsArray)
    return postsArray 
}

/*const createPost = () => {
    /*aqui va la función que guarda posts en labase de datos
}*/

export {getPost}