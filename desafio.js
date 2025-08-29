import { promises as fs } from 'fs'
import readline from 'readline'

async function pegaDados() {
    const dados = JSON.parse(await fs.readFile("./people.json"));
    return dados
}





async function login(){
    
    const dados = await pegaDados()

    const arrombado = dados.find((item) => {
        return item.name.first.toLowerCase() == "paulina"
    })

    // console.log(arrombado.name.first.toLowerCase() + "." + arrombado.name.last.toLowerCase() + "@example.com")

    if(arrombado.name.first.toLowerCase() + "." + arrombado.name.last.toLowerCase() + "@example.com")
        console.log(arrombado.map((item) => {
    return{
    "Nome":arrombado.name,
    "Email": arrombado.email,
    "idade": arrombado.age
}
    }
))

    // if(isEmailValid && isPasswordValid){
    //     console.log("Login realizado com sucesso")
    // }
    // else{
    //     console.log("Email ou senha incorretos.")
    // }

}

login()






